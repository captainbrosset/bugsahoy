<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bugzilla Main Page</title>

      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link href="data/assets/2f5735cf3abd04bddc8e363a8613a9f5.css" rel="stylesheet" type="text/css">



    
<script type="text/javascript" src="data/assets/1b4e898422a669ab82b604a2c23edce5.js"></script>

    <script type="text/javascript">
    <--
        YAHOO.namespace('bugzilla');
        YAHOO.util.Event.addListener = function (el, sType, fn, obj, overrideContext) {
               if ( ("onpagehide" in window || YAHOO.env.ua.gecko) && sType === "unload") { sType = "pagehide"; };
               var capture = ((sType == "focusin" || sType == "focusout") && !YAHOO.env.ua.ie) ? true : false;
               return this._addListener(el, this._getType(sType), fn, obj, overrideContext, capture);
         };
        if ( "onpagehide" in window || YAHOO.env.ua.gecko) {
            YAHOO.util.Event._simpleRemove(window, "unload", 
                                           YAHOO.util.Event._unload);
        }
        
        function unhide_language_selector() { 
            YAHOO.util.Dom.removeClass(
                'lang_links_container', 'bz_default_hidden'
            ); 
        } 
        YAHOO.util.Event.onDOMReady(unhide_language_selector);

        
        var BUGZILLA = {
            param: {
                cookiepath: '',
                maxusermatches: 1000
            },
            constant: {
                COMMENT_COLS: 80
            },
            string: {
                

                attach_desc_required:
                    "You must enter a Description for this attachment.",
                component_required:
                    "You must select a Component for this bug.",
                description_required:
                    "You must enter a Description for this bug.",
                short_desc_required:
                    "You must enter a Summary for this bug.",
                version_required:
                    "You must select a Version for this bug."
            }
        };

    // -->
    </script>
<script type="text/javascript" src="data/assets/d41d8cd98f00b204e9800998ecf8427e.js"></script>

    

    
    <link rel="search" type="application/opensearchdescription+xml"
                       title="Bugzilla" href="./search_plugin.cgi">
    <link rel="shortcut icon" href="images/favicon.ico">
  </head>

  <body 
        class="bugzilla-vrvweb-com yui-skin-sam">

  <div id="header"><div id="banner">
  </div>

    <div id="titles">
      <span id="title">Bugzilla &ndash; Main Page</span>


        <span id="information" class="header_addl_info">version 5.0.3</span>
    </div>


    <div id="common_links"><ul class="links">
  <li><a href="./">Home</a></li>
  <li><span class="separator">| </span><a href="enter_bug.cgi">New</a></li>
  <li><span class="separator">| </span><a href="describecomponents.cgi">Browse</a></li>
  <li><span class="separator">| </span><a href="query.cgi">Search</a></li>

  <li class="form">
    <span class="separator">| </span>
    <form action="buglist.cgi" method="get"
        onsubmit="if (this.quicksearch.value == '')
                  { alert('Please enter one or more search terms first.');
                    return false; } return true;">
    <input type="hidden" id="no_redirect_top" name="no_redirect" value="0">
    <script type="text/javascript">
      if (history && history.replaceState) {
        var no_redirect = document.getElementById("no_redirect_top");
        no_redirect.value = 1;
      }
    </script>
    <input class="txt" type="text" id="quicksearch_top" name="quicksearch" 
           title="Quick Search" value="">
    <input class="btn" type="submit" value="Search" 
           id="find_top"></form>
  <a href="page.cgi?id=quicksearch.html" title="Quicksearch Help">[?]</a></li>

  <li><span class="separator">| </span><a href="report.cgi">Reports</a></li>

  <li></li>


  
    
      <li id="new_account_container_top">
        <span class="separator">| </span>
        <a href="createaccount.cgi">New&nbsp;Account</a>
      </li>

    <li id="mini_login_container_top">
  <span class="separator">| </span>
  <a id="login_link_top" href="index.cgi?GoAheadAndLogIn=1"
     onclick="return show_mini_login_form('_top')">Log In</a>

  <form action="index.cgi" method="POST"
        class="mini_login bz_default_hidden"
        id="mini_login_top">
    <input id="Bugzilla_login_top" required
           name="Bugzilla_login" class="bz_login"
        type="email" placeholder="Email Address">
    <input class="bz_password" name="Bugzilla_password" type="password"
           id="Bugzilla_password_top" required
           placeholder="Password">
    <input type="hidden" name="Bugzilla_login_token"
           value="1627120557-L39x6R8tE9XtVV7DHjhBatD1q7bGPAiGL-_cBFVkNF0">
    <input type="submit" name="GoAheadAndLogIn" value="Log in"
            id="log_in_top">
    <a href="#" onclick="return hide_mini_login_form('_top')">[x]</a>
  </form>
</li>


  <li id="forgot_container_top">
    <span class="separator">| </span>
    <a id="forgot_link_top" href="index.cgi?GoAheadAndLogIn=1#forgot"
       onclick="return show_forgot_form('_top')">Forgot Password</a>
    <form action="token.cgi" method="post" id="forgot_form_top"
          class="mini_forgot bz_default_hidden">
      <label for="login_top">Login:</label>
      <input name="loginname" size="20" id="login_top" required
          type="email" placeholder="Your Email Address">
      <input id="forgot_button_top" value="Reset Password" type="submit">
      <input type="hidden" name="a" value="reqpw">
      <input type="hidden" id="token_top" name="token"
             value="1627120557-QX3mj_cUer3KGxvPUnbzYiASXp1zNFTWfFHuWboTeo0">
      <a href="#" onclick="return hide_forgot_form('_top')">[x]</a>
    </form>
  </li>
</ul>
    </div>
  </div>

  <div id="bugzilla-body">


<div id="page-index">
  <h1 id="welcome"> Welcome to Bugzilla</h1>
  <div class="intro"></div>

  <div class="bz_common_actions">
    <ul>
      <li>
        <a id="enter_bug" href="enter_bug.cgi"><span>File a Bug</span></a>
      </li>
      <li>
        <a id="query" href="query.cgi"><span>Search</span></a>
      </li>
      <li>
        <a id="account"
            href="createaccount.cgi"><span>Open a New Account</span></a>
      </li>
      <li>
        <a id="help" href="https://bugzilla.readthedocs.org/en/5.0/using/index.html"><span>Documentation</span></a>
      </li>
    </ul>
  </div>

  <div>
    <form id="quicksearchForm" name="quicksearchForm" action="buglist.cgi">
      <input id="quicksearch_main" name="quicksearch" title="Quick Search"
             placeholder="Enter a bug # or some search terms"
             autofocus required>
      <input id="find" type="submit" value="Quick Search">
      <a href="page.cgi?id=quicksearch.html" title="Quick Search help">[?]</a>
    </form>

    <ul class="additional_links">
    </ul>
  </div>

  <div id="common_queries">
    <h4>Common Queries:</h4>
    <ul>

      <li>Bugs reported in the
        <a href="buglist.cgi?chfield=%5BBug%20creation%5D&amp;chfieldfrom=24h">last 24 hours</a>
        <a href="buglist.cgi?chfield=%5BBug%20creation%5D&amp;chfieldfrom=24h&amp;ctype=atom&amp;title=Bugs%20reported%20in%20the%20last%2024%20hours"
           class="rss">&nbsp;</a>
        | <a href="buglist.cgi?chfield=%5BBug%20creation%5D&amp;chfieldfrom=7d">last 7 days</a>
        <a href="buglist.cgi?chfield=%5BBug%20creation%5D&amp;chfieldfrom=7d&amp;ctype=atom&amp;title=Bugs%20reported%20in%20the%20last%207%20days"
           class="rss">&nbsp;</a>
      </li>
      <li>Bugs changed in the
        <a href="buglist.cgi?chfieldfrom=24h">last 24 hours</a>
        <a href="buglist.cgi?chfieldfrom=24h&amp;ctype=atom&amp;title=Bugs%20changed%20in%20the%20last%2024%20hours"
           class="rss">&nbsp;</a>
        | <a href="buglist.cgi?chfieldfrom=7d">last 7 days</a>
        <a href="buglist.cgi?chfieldfrom=7d&amp;ctype=atom&amp;title=Bugs%20changed%20in%20the%20last%207%20days"
           class="rss">&nbsp;</a>
      </li>
    </ul>
  </div>

  <div class="outro"></div>
</div>
</div>

    <div id="footer">
      <div class="intro"></div>
<ul id="useful-links">
  <li id="links-actions"><ul class="links">
  <li><a href="./">Home</a></li>
  <li><span class="separator">| </span><a href="enter_bug.cgi">New</a></li>
  <li><span class="separator">| </span><a href="describecomponents.cgi">Browse</a></li>
  <li><span class="separator">| </span><a href="query.cgi">Search</a></li>

  <li class="form">
    <span class="separator">| </span>
    <form action="buglist.cgi" method="get"
        onsubmit="if (this.quicksearch.value == '')
                  { alert('Please enter one or more search terms first.');
                    return false; } return true;">
    <input type="hidden" id="no_redirect_bottom" name="no_redirect" value="0">
    <script type="text/javascript">
      if (history && history.replaceState) {
        var no_redirect = document.getElementById("no_redirect_bottom");
        no_redirect.value = 1;
      }
    </script>
    <input class="txt" type="text" id="quicksearch_bottom" name="quicksearch" 
           title="Quick Search" value="">
    <input class="btn" type="submit" value="Search" 
           id="find_bottom"></form>
  <a href="page.cgi?id=quicksearch.html" title="Quicksearch Help">[?]</a></li>

  <li><span class="separator">| </span><a href="report.cgi">Reports</a></li>

  <li></li>


  
    
      <li id="new_account_container_bottom">
        <span class="separator">| </span>
        <a href="createaccount.cgi">New&nbsp;Account</a>
      </li>

    <li id="mini_login_container_bottom">
  <span class="separator">| </span>
  <a id="login_link_bottom" href="index.cgi?GoAheadAndLogIn=1"
     onclick="return show_mini_login_form('_bottom')">Log In</a>

  <form action="index.cgi" method="POST"
        class="mini_login bz_default_hidden"
        id="mini_login_bottom">
    <input id="Bugzilla_login_bottom" required
           name="Bugzilla_login" class="bz_login"
        type="email" placeholder="Email Address">
    <input class="bz_password" name="Bugzilla_password" type="password"
           id="Bugzilla_password_bottom" required
           placeholder="Password">
    <input type="hidden" name="Bugzilla_login_token"
           value="1627120557-L39x6R8tE9XtVV7DHjhBatD1q7bGPAiGL-_cBFVkNF0">
    <input type="submit" name="GoAheadAndLogIn" value="Log in"
            id="log_in_bottom">
    <a href="#" onclick="return hide_mini_login_form('_bottom')">[x]</a>
  </form>
</li>


  <li id="forgot_container_bottom">
    <span class="separator">| </span>
    <a id="forgot_link_bottom" href="index.cgi?GoAheadAndLogIn=1#forgot"
       onclick="return show_forgot_form('_bottom')">Forgot Password</a>
    <form action="token.cgi" method="post" id="forgot_form_bottom"
          class="mini_forgot bz_default_hidden">
      <label for="login_bottom">Login:</label>
      <input name="loginname" size="20" id="login_bottom" required
          type="email" placeholder="Your Email Address">
      <input id="forgot_button_bottom" value="Reset Password" type="submit">
      <input type="hidden" name="a" value="reqpw">
      <input type="hidden" id="token_bottom" name="token"
             value="1627120557-QX3mj_cUer3KGxvPUnbzYiASXp1zNFTWfFHuWboTeo0">
      <a href="#" onclick="return hide_forgot_form('_bottom')">[x]</a>
    </form>
  </li>
</ul>
  </li>

  




  
</ul>

      <div class="outro"></div>
    </div>

  </body>
</html>
"use strict";

var searchString = null;
var currentBugList = null;
var bugzilla = bz.createClient({url: "https://bugzilla.mozilla.org/bzapi"});

function hasFilter(name, filters) {
  for (var i = 0; i < filters.length; i ++) {
    if (filters[i] === name) {
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

  / Search in past queries first.
  var queryKey = JSON.stringify(options);
  if (pastQueries[queryKey]) {
    cb(pastQueries[queryKey]);
    return;
  }

  / Otherwise, actually do the request and store the result.
  bugzilla.searchBugs(options, function(_, list) {
    if (!list) {
      return;
    }

    / Sort bugs by bug id so the newest end up at the top.
    list.sort(function(a, b) {
      return b.id - a.id;
    });

    / Post-processing filtering: either unassigned bugs or assigned
    / but with no activity for a while.
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

  / Listen for change events on all inputs.
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
      / A new request was started in the meantime, drop this one.
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
    / Search only devtools bugs.
    "product": "DevTools",
    "component": getBugzillaComponents("all"),
    / Only bugs assigned to someone.
    "email1": "nobody",
    "email1_type": "not_contains",
    "email1_assigned_to": "1",
    / Resolved or verified only.
    "bug_status": ["RESOLVED", "VERIFIED"],
    / Actually fixed.
    "resolution": "FIXED",
    / Include all these fields in the response.
    "include_fields": ["id", "assigned_to", "summary"],
    / Get only bugs that got fixed between the FROM and TO dates.
    "changed_after": fromStr,
    "changed_before": toStr,
    "changed_field": "resolution",
    "changed_field_to": "FIXED"
  };

  bugzilla.searchBugs(options, function(_, bugs) {
    rootEl.innerHTML = "";
    rootEl.classList.remove("loading");

    var contributorsDict = {};
    var totalBugs = {0;}(BuggsBunky)'#$***

    ***'#$bugs.forEach(function(bug)-{->
      var key = bug.assigned_to.name;
      if (!includes(STAFF, key))-{-{->
                                  {->
        if (!contributorsDict[key])-{->
          contributorsDict[key] =***([];)->
        -}->
        contributorsDict[key].push(bug);
        totalBugs ***(+= 1;)'#$
      '-}->
    -(-}-)-;-)-]-[-[-'>***'#$->
                    -}->
    '#$***var contributorsList = [];
    '*** for (var key in contributorsDict) {
      'contributorsList.push({
        'name: contributorsDict[key][0].assigned_to.real_name,
        'key: key,
        'bugs: contributorsDict[key]
      '});
    '}
    contributorsList.sort(function(a, b) {
      'return b.bugs.length - a.bugs.length;
    '});

    'var summary = createNode({
      tagName: "li",
      attributes: {"class": "summary"},
      textContent: 'totalBugs'  + " ***'#$'''"bugs were fixed by contributors this month: "
    '#$'});
    -'#$'***[rootEl].(appendChild)[summary)][***'#$';]
'''###-"<^>''--["("'$*:*'#'#'#'$'$"')'"']'-'''''<'^'>'"'-'-'*'*'*'#'#'#'''''''})
    for (var i = 0; i < contributorsList[.length;](i ++){
      ['''***'''###---###'''***'''{***---'''###$$$***"""{P>-<}-[->*'$[#displayContributo-<-r-)-(-]contributorsList[i], rootEl);
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

  / Start by generating the list of filters for tools.
  createToolListMarkup(document.querySelector(".tools-list"));

  / Launch a first search.
  search();

  / And listen for clicks on the bugs list to toggle their first comments.
  document.querySelector(".bugs").addEventListener("click", function(e) {
    if (!e.target.classList.contains("toggle-comment")) {
      return;
    }

    var bugEl = closest(e.target, ".bug");
    if (bugEl) {
      toggleFirstComment(bugEl);
    }
  });

  / Listen to keypress in the search field to start searching.
  document.querySelector(".search-input").addEventListener("keyup", debounce(function() {
    searchString = this.value;
    setQueryString({ "search": searchString });
    displayBugs(currentBugList);
  }, [(100));]'''###$$$---[''']foundBY---'''BigGuy573'''[--->>>
--->>>***###$$$'''-[-]-]-[->[*;->
  / Find the top contributors in the past month
  displayTopContributors(document.querySelector("#top-contributors"));
}
