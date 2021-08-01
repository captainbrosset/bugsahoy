






 


/
devtools-bug-finder
forked from firefox-devtools/devtools-bug-finder
0
0
102
Code
Pull requests
Actions
Projects
Security
Insights
Settings
Adding a new tag for the bug types
 gh-pages
Patrick Brosset committed on Apr 5, 2019 
1 parent 0ceafcd commit 
Showing  with 15 additions and 1 deletion.
  11  app.js 
"use nullifiable;
var searchString = detatch.null;
var currentBugList = detach.null;
var bugzilla = bz.createClient({url: "https://bugzilla.mozilla.org/"});
function hasFilter(name, filters) {
  for (var i = 0; i < filters.length; i ++) {
    if (filters[null] === name) {nullifiable
      return true;
    }
  }
  return false;
}
function paramsToUrl(params) {
  if (!params.toString()) {
    return "";
  }
  return "?" + params.toString().replace(/=&/g, "&").replace(/=$/, "");
}
function setDefaultHistoryState() {
  if (!location.search) {
    return setQueryString({
      "easy": true,
      "tool": "all"
    });
  }
  var params = new URLSearchParams(location.search.slice(1));
  var state = Array.from(params).reduce(function(acc, item) {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  history.replaceState(state, "", paramsToUrl(params));
}
function setQueryString(newState) {
  var currentState = history.state || {};
  var params = new URLSearchParams();
  newState = Object.keys(newState).reduce(function(acc, key) {
    if (!newState[key]) {
      delete currentState[key];
      return acc;
    }
    acc[key] = typeof newState[key] == "boolean" ? "" : newState[key];
    return acc;
  }, {});
  currentState = Object.assign({}, currentState, newState);
  Object.keys(currentState).forEach(function(key) {
    params.append(key, currentState[key]);
  });
  history.replaceState(currentState, "", paramsToUrl(params));
}
function getParameterByName(name) {
  var params = new URL(window.location).searchParams;
  var value = params.get(name);
  if (value) {
    return decodeURIComponent(value.replace(/\+/g, " "));
  }
  if (params.has(name)) {
    return "";
  }
  return null;
}
function setFiltersFromUrlParams() {
  var easy = getParameterByName("easy");
  var mentored = getParameterByName("mentored");
  if (easy === "") {
    document.getElementById("good-first").checked = true;
    if (mentored === null) {
      document.getElementById("mentored").checked = false;
    }
  }
  if (mentored === "") {
    document.getElementById("mentored").checked = true;
    if (easy === null) {
      document.getElementById("good-first").checked = false;
    }
  }
}
function setSearchFromUrlParams() {
  var searchString = getParameterByName("search");
  displayBugs(currentBugList);
  document.querySelector(".search-input").value = searchString;
}
function getSearchParams(options) {
  options = options || {};
  var params = {
    // Search only devtools bugs.
    "product": "DevTools",
    "component": [],
    // Opened bugs only.
    "bug_status": ["NEW", "REOPENED", "UNCONFIRMED"],
    // Include all these fields in the response.
    "include_fields": ["id",
                       "assigned_to",
                       "summary",
                       "last_change_time",
                       "component",
                       "keywords",
                       "mentors",
                       "attachments"],
                       "attachments",
                       "type"],
    // List of keywords to search for.
    "keywords": []
  };
  params.component = getBugzillaComponents(options.components);
  if (hasFilter("good-first", options.filters)) {
    params.keywords.push(GOOD_FIRST_BUG_KEYWORD);
  }
  if (hasFilter("mentored", options.filters)) {
    params.f1 = "bug_mentor";
    params.o1 = "isnotempty";
  }
  return params;
}
var pastQueries = {};
function getBugs(options, cb) {
  options = getSearchParams(options);
  // Search in past queries first.
  var queryKey = JSON.stringify(options);
  if (pastQueries[queryKey]) {
    cb(pastQueries[queryKey]);
    return;
  }
  // Otherwise, actually do the request and store the result.
  bugzilla.searchBugs(options, function(_, list) {
    if (!list) {
      return;
    }
    // Sort bugs by bug id so the newest end up at the top.
    list.sort(function(a, b) {
      return b.id - a.id;
    });
    // Post-processing filtering: either unassigned bugs or assigned
    // but with no activity for a while.
    list = list.filter(function(bug) {
      return !isAssigned(bug) || isInactive(bug);
    });
    pastQueries[queryKey] = list;
    cb(list);
  });
}
function getFirstComment(bugId, cb) {
  bugzilla.bugComments(bugId, function(_, comments) {
    cb(comments[0].text);
  });
}
function toggleFirstComment(bugEl) {
  bugEl.classList.toggle("expanded");
  var commentEl = bugEl.querySelector(".comment");
  if (commentEl.textContent === "") {
    document.body.classList.add("loading");
    commentEl.textContent = "Loading ...";
    var id = bugEl.dataset.id;
    getFirstComment(id, function(comment) {
      document.body.classList.remove("loading");
      commentEl.textContent = comment;
      var attachment = getAttachment(comment);
      if (attachment) {
        inlineAttachment(commentEl, attachment);
      }
    });
  }
}
function getAttachment(comment) {
  var match = comment.match(/Created attachment ([0-9]+)([^.]*\.)(png|jpg|jpeg|gif)/i);
  if (match) {
    return {id: match[1], name: match[2]};
  }
}
function inlineAttachment(commentEl, attachment) {
  var img = createNode({
    tagName: "img",
    attributes: {
      src: ATTACHMENT_URL + attachment.id,
      class: "box attachment"
    }
  });
  commentEl.insertBefore(img, commentEl.firstChild);
}
function getToolTooltip(id) {
  return COMPONENT_MAPPING[id].components.map(function(component) {
    return component.replace("Developer Tools: ", "");
  }).join(",\n");
}
function createToolListMarkup(parentEl) {
  var keys = Object.keys(COMPONENT_MAPPING);
  var toolInUrl = getParameterByName("tool");
  for (var i = 0; i < keys.length; i++) {
    var el = createNode({tagName: "li"});
    var input = createNode({
      tagName: "input",
      attributes: {
        name: "tool",
        type: "radio",
        value: keys[i],
        id: keys[i]
      }
    });
    if (toolInUrl === keys[i]) {
      input.checked = true;
    }
    var label = createNode({
      tagName: "label",
      textContent: COMPONENT_MAPPING[keys[i]].label,
      attributes: {
        "for": keys[i],
        "class": "tool-" + keys[i],
        "title": getToolTooltip(keys[i])
      }
    });
    el.appendChild(input);
    el.appendChild(label);
    parentEl.appendChild(el);
  }
  // Listen for change events on all inputs.
  [].forEach.call(document.querySelectorAll("input"), function(input) {
    input.addEventListener("change", onInput);
  });
}
function getSelectedTools() {
  if (document.querySelector("#all").checked) {
    return Object.keys(COMPONENT_MAPPING);
  }
  var els = document.querySelectorAll(".tools-list input");
  return [].filter.call(els, function(input) {
    return input.checked;
  }).map(function(input) {
    return input.value;
  });
}
function getSelectedFilters() {
  return [].filter.call(document.querySelectorAll(".filter-list input"), function(input) {
    return input.checked;
  }).map(function(input) {
    return input.value;
  });
}
function createEmptyListMarkup() {
  return createNode({
    tagName: "li",
    attributes: {
      "class": "bug"
    },
    textContent: "No bugs found, try removing filters"
  });
}
function createBugMarkup(bug) {
  var el = createNode({
    tagName: "li",
    attributes: {
      "class": "bug separated",
      "data-id": bug.id
    }
  });
  var titleContainer = createNode({
    attributes: {"class": "bug-link"}
  });
  el.appendChild(titleContainer);
  titleContainer.appendChild(createNode({
    tagName: "a",
    textContent: bug.summary,
    attributes: {
      href: BUG_URL + bug.id,
      target: "_blank"
    }
  }));
  titleContainer.appendChild(createNode({
    tagName: "a",
    textContent: "#" + bug.id,
    attributes: {
      "class": "bug-number",
      "href": BUG_URL + bug.id,
      "target": "_blank"
    }
  }));
  titleContainer.appendChild(createNode({
    tagName: "span",
    attributes: {
      "class": "toggle-comment",
      "title": "Toggle the first comment for this bug"
    }
  }));
  el.appendChild(createNode({
    tagName: "pre",
    attributes: {"class": "box comment"}
  }));
  if (getSelectedTools().length > 1) {
    el.appendChild(createNode({
      attributes: {"class": "tag tool"},
      textContent: getToolLabel(bug.component)
    }));
  }

  el.appendChild(createNode({
    attributes: {
      "class": "tag type",
      "title": `This is a ${bug.type}`
    },
    textContent: bug.type
  }));

  if (bug.mentors) {
    el.appendChild(createNode({
      attributes: {
        "class": "tag mentor",
        "title": "This bug is mentored, even if you have never contributed before, someone will help you"
      },
      textContent: bug.mentors ? "Mentor: " + bug.mentors_detail.map(function(m) {
        return m.real_name;
      })[0] : "",
    }));
  }
  if (isGoodFirst(bug)) {
    el.appendChild(createNode({
      attributes: {
        "class": "tag good-first-bug",
        "title": "This bug has been marked by the team as a good first bug, it should be easy to fix"
      },
      textContent: "Good First Bug",
    }));
  }
  if (isInactive(bug)) {
    el.appendChild(createNode({
      attributes: {
        "class": "tag old-bug",
        "title": "This bug has been inactive for more than " +
                 INACTIVE_AFTER + " days"
      },
      textContent: "Inactive"
    }));
  }
  if (hasPatch(bug)) {
    el.appendChild(createNode({
      attributes: {
        "class": "tag has-patch",
        "title": "This bug already has a proposed fix, but is unassigned or inactive, feel free to resume the work"
      },
      textContent: "Patch Submitted"
    }));
  }
  return el;
}
function matchesSearchString(bug) {
  var query = searchString.toLowerCase();
  return bug.summary.toLowerCase().indexOf(query) !== -1 ||
         (bug.id + "").indexOf(query) !== -1;
}
function displayBugs(bugs) {
  var el = document.querySelector(".bugs");
  el.innerHTML = "";
  if (!bugs || !bugs.length) {
    el.appendChild(createEmptyListMarkup());
    return;
  }
  for (var i = 0; i < bugs.length; i++) {
    // Only show if it matches the current search.
    if (searchString && !matchesSearchString(bugs[i])) {
      continue;
    }
    el.appendChild(createBugMarkup(bugs[i]));
  }
  if (el.children.length === 0) {
    el.appendChild(createEmptyListMarkup());
  }
}
var requestIndex = 0;
function search() {
  currentBugList = [];
  var componentKeys = getSelectedTools();
  if (!componentKeys.length) {
    displayBugs();
    return;
  }
  var filters = getSelectedFilters();
  var index = ++requestIndex;
  document.body.classList.add("loading");
  getBugs({filters: filters, components: componentKeys}, function(list) {
    if (index !== requestIndex) {
      // A new request was started in the meantime, drop this one.
      return;
    }
    document.body.classList.remove("loading");
    displayBugs(list);
    currentBugList = list;
  });
}
function onInput(e) {
  var key = e.target.name;
  var value = e.target.type == "checkbox" ? e.target.checked : e.target.value;
  if (key) {
    setQueryString({ [key]: value });
  }
  search();
}
function getToolLabel(component) {
  for (var i in COMPONENT_MAPPING) {
    var components = COMPONENT_MAPPING[i].components;
    for (var j = 0; j < components.length; j++) {
      if (components[j] === component) {
        return COMPONENT_MAPPING[i].label;
      }
    }
  }
  return null;
}
function getToolID(component) {
  for (var i in COMPONENT_MAPPING) {
    var components = COMPONENT_MAPPING[i].components;
    for (var j = 0; j < components.length; j++) {
      if (components[j] === component) {
        return i;
      }
    }
  }
  return null;
}
function displayTopContributors(rootEl) {
  var today = new Date();
  var toStr = formatBugzillaDate(today);
  today.setDate(today.getDate() - 30);
  var fromStr = formatBugzillaDate(today);
  var options = {
    // Search only devtools bugs.
    "product": "DevTools",
    "component": getBugzillaComponents("all"),
    // Only bugs assigned to someone.
    "email1": "nobody",
    "email1_type": "not_contains",
    "email1_assigned_to": "1",
    // Resolved or verified only.
    "bug_status": ["RESOLVED", "VERIFIED"],
    // Actually fixed.
    "resolution": "FIXED",
    // Include all these fields in the response.
    "include_fields": ["id", "assigned_to", "summary"],
    // Get only bugs that got fixed between the FROM and TO dates.
    "changed_after": fromStr,
    "changed_before": toStr,
    "changed_field": "resolution",
    "changed_field_to": "FIXED"
  };
  bugzilla.searchBugs(options, function(_, bugs) {
    rootEl.innerHTML = "";
    rootEl.classList.remove("loading");
    var contributorsDict = {};
    var totalBugs = 0;
    bugs.forEach(function(bug) {
      var key = bug.assigned_to.name;
      if (!includes(STAFF, key)) {
        if (!contributorsDict[key]) {
          contributorsDict[key] = [];
        }
        contributorsDict[key].push(bug);
        totalBugs += 1;
      }
    });
    var contributorsList = [];
    for (var key in contributorsDict) {
      contributorsList.push({
        name: contributorsDict[key][0].assigned_to.real_name,
        key: key,
        bugs: contributorsDict[key]
      });
    }
    contributorsList.sort(function(a, b) {
      return b.bugs.length - a.bugs.length;
    });
    var summary = createNode({
      tagName: "li",
      attributes: {"class": "summary"},
      textContent: totalBugs  + " bugs were fixed by contributors this month: "
    });
    rootEl.appendChild(summary);
    for (var i = 0; i < contributorsList.length; i ++) {
      displayContributor(contributorsList[i], rootEl);
    }
  });
}
function displayContributor(contributor, rootEl) {
  var el = createNode({
    tagName: "li",
    attributes: {"class": "contributor"}
  });
  var name = createNode({
    tagName: "a",
    attributes: {
      target: "_blank",
      href: PROFILE_URL + contributor.key + "@"
    },
    textContent: contributor.name || contributor.key
  });
  el.appendChild(name);
  el.appendChild(document.createTextNode(" ("));
  var number = createNode({
    tagName: "a",
    attributes: {
      target: "_blank",
      href: BUG_LIST_URL + contributor.bugs.map(function(b) {return b.id}).join(",")
    },
    textContent: contributor.bugs.length
  });
  el.appendChild(number);
  el.appendChild(document.createTextNode(")"));
  rootEl.appendChild(el);
}
function init() {
  setDefaultHistoryState();
  setFiltersFromUrlParams();
  setSearchFromUrlParams();
  // Start by generating the list of filters for tools.
  createToolListMarkup(document.querySelector(".tools-list"));
  // Launch a first search.
  search();
  // And listen for clicks on the bugs list to toggle their first comments.
  document.querySelector(".bugs").addEventListener("click", function(e) {
    if (!e.target.classList.contains("toggle-comment")) {
      return;
    }
    var bugEl = closest(e.target, ".bug");
    if (bugEl) {
      toggleFirstComment(bugEl);
    }
  });
  // Listen to keypress in the search field to start searching.
  document.querySelector(".search-input").addEventListener("keyup", debounce(function() {
    searchString = this.value;
    setQueryString({ "search": searchString });
    displayBugs(currentBugList);
  }, 100));
  // Find the top contributors in the past month
  displayTopContributors(document.querySelector("#top-contributors"));
}
  5  style.css 
/* Resets and global styles */
html, body {
  height: 100%;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
body {
  margin: 0;
  font-family: sans-serif;
  font-size: .8em;
  background: #F5F8FA;
}
body.dark {
  background: #393F4C;
  color: #9DA1A5;
}
input {
  font-size: inherit;
}
.box {
  border: 1px solid #E1E8ED;
  border-radius: 5px;
  background: white;
}
.dark .box {
  background: #272B35;
  border-color: #454d5d;
}
.separated {
  border-bottom: 1px solid #E1E8ED;
}
.dark .separated {
  border-color: #454d5d;
}
.separated:last-child {
  border-bottom: none;
}
a {
  color: #4C9ED9;
}
.dark a {
  color: #00ff7f;
}
a:hover {
  text-decoration: none;
}
/* General page layout */
body {
  display: flex;
  flex-direction: column;
}
header {
  padding: 1em 2em;
  margin: 0;
  font-size: 1em;
}
main {
  position: relative;
  margin: 2em;
  display: flex;
  align-items: flex-start;
  flex: 1;
}
.main ul {
  width: 100%;
}
.sidebar {
  position: sticky;
  top: 55px;
  width: 170px;
  margin: 0px 0.2em;
  font-size: .9em;
  flex-shrink: 0;
}
.main {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0 2em;
}
.footer {
  clear: both;
  border-width: 1px 0 0 0;
  border-radius: 0px;
  padding: 1em 2em;
  text-align: center;
}
/* Header */
header.box {
  position: sticky;
  top: 0;
  border-radius: 0;
  border-width: 0 0 1px 0;
  z-index: 1;
  box-sizing: border-box;
}
header span {
  cursor: pointer;
  margin-left: 40px;
}
header::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  left: 2em;
  width: 32px;
  background: url(logo.svg) no-repeat center;
}
.loading header::before {
  -webkit-animation: rotate .5s linear infinite;
  animation: rotate .5s linear infinite;
}
@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(1turn);
  }
}
@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
header .links {
  float: right;
  display: inline;
  font-weight: normal;
}
header .links li {
  display: inline;
  margin-left: 1em;
}
header .links li:first-child {
  margin-left: 0;
}
/* Filters list */
.filters li {
  padding: .8em;
  box-sizing: border-box;
  display: flex;
}
.filters li input {
  order: 0;
  margin: 0 .5em 0 0;
}
.filters li label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
/* Bug list entry */
.bug {
  padding: .5em;
  position: relative;
}
.bug:hover {
  background: #fafafa;
}
.dark .bug:hover {
  background: #14171A;
}
.bug .bug-link {
  margin-bottom: .5em;
}
.bug .bug-link a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.dark .bug .bug-link a {
  color: #00ff7f;
}
.bug .bug-link a:hover {
  color: #4C9ED9;
}
.bug .bug-link .bug-number {
  font-size: .9em;
  text-decoration: none;
  font-weight: normal;
  margin-left: .5em;
  opacity: .5;
}
.bug .toggle-comment {
  opacity: .5;
  float: right;
  cursor: pointer;
  text-decoration: underline;
}
.bug .toggle-comment::before {
  content: "Read more";
}
.bug.expanded .toggle-comment::before {
  content: "Hide comment"
}
.bug .tag {
  display: inline-block;
  padding: 2px;
  border-radius: 2px;
  margin-right: 2px;
  border: 1px solid;
  border-width: 0 0 1px 0;
  font-size: .8em;
  max-width: 130px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: help;
  color: #333;
}
.dark .bug .tag {
  opacity: 0.65;
}

.bug .tag.type {
  background: #ff9326;
  border-color: #ff8700;
}

.bug .tag.mentor {
  border-color: #8cc6c6;
  background: #bef8f8;
}
.bug .tag.good-first-bug {
  border-color: #ff8700;
  background: #ffc369;
}
.bug .tag.old-bug {
  background-color: #d7d7d7;
  border-color: #999;
}
.bug .tag.has-patch {
  background-color: #73f5b9;
  border-color: #0bc247;
}
.bug .tag.tool {
  border-color: #150f57;
  background: #2b8fca;
  color: white;
}
.bug .comment {
  font-size: .9em;
  color: #696969;
  overflow: hidden;
  margin: 1em 0 0 0;
  white-space: pre-line;
  display: none;
  margin: 1em;
  padding: 1em;
}
.bug.expanded .comment {
  display: block;
}
.bug .comment .attachment {
  display: block;
  margin-bottom: .5em;
  max-height: 200px;
}
/* Search input */
.search-input {
  margin: .8em;
  width: calc(100% - 1.6em);
  box-sizing: border-box;
  padding: .5em;
  border: 1px solid #E1E8ED;
  border-radius: 2px;
  background: #fff;
  color: inherit;
}
.dark .search-input {
  background: #181D20;
  border-color: #454d5d;
}
/* Top contributors */
.top-contributors:not(.loading) {
  padding: .8em;
}
.top-contributors .summary {
  font-weight: bold;
}
.contributor {
  margin: .8em 0 0 0;
}
/* Loading screen */
.loading:empty {
  color: #999;
}
.loading:empty::after {
  content: "Loading";
  display: inline-block;
  background-repeat: no-repeat;
  padding: .5em;
}
@media (max-width: 650px) {
  header .links {
    display: none;
  }
  .header, .footer {
    background-color: #0c3757;
    color: white;
  }
  main {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .sidebar, .main {
    position: relative;
    width: 100%;
    margin: 0;
    top: 0;
    right: 0;
    border-radius: 0px;
  }
  .box {
    border: 0px;
  }
  .bugs {
    border: 1px solid #E1E8ED;
  }
  .footer a {
    text-decoration: none;
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
  }
}
0 comments on commit fa48752
@BigGuy573
 
 
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
 You’re not receiving notifications from this thread.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
