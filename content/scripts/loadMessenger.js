const fileName = "messenger.css";

function onLoad(activatedWhileWindowOpen) {
  WL.injectCSS("chrome://PhoenityIcons/content/skin/" + fileName);

  if (Services.appinfo.OS == "WINNT") {
    WL.injectCSS("chrome://PhoenityIcons/content/aero/" + fileName);
  } else if (Services.appinfo.OS == "Linux") {
    WL.injectCSS("chrome://PhoenityIcons/content/linux/" + fileName);
  } else if (Services.appinfo.OS == "Darwin") {
    WL.injectCSS("chrome://PhoenityIcons/content/darwin/" + fileName);
  }

  WL.injectCSS("chrome://PhoenityIcons/content/skin/icons.css");

  WL.injectCSS("chrome://PhoenityIcons/content/skin/primaryToolbar.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/folderPane.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/folderMenus.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/chat.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/calendar/calendar.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/messageIcons.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/quickFilterBar.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/mailWindow1.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/activity/activity.css");

  WL.injectCSS("chrome://PhoenityIcons/content/skin/messengercompose/messengercompose.css");

  WL.injectCSS("chrome://PhoenityIcons/content/skin/uBlockOrigin/uBlockOrigin.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/cardbook/cardbook.css");
  WL.injectCSS("chrome://PhoenityIcons/content/skin/mailredirect/mailredirect.css");

  window.addEventListener("MsgsLoaded", msgListener);
}

function onUnload(deactivatedWhileWindowOpen) {
  window.removeEventListener("MsgsLoaded", msgListener);
}

function msgListener () {
  let multimessage = window.document.getElementById("multimessage");
  if (multimessage) {
    let w = multimessage.contentWindow.wrappedJSObject;
    linkElement = w.document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "chrome://PhoenityIcons/content/skin/icons.css");
    //linkElement.setAttribute("href", "chrome://PhoenityIcons/content/skin/primaryToolbar.css");
    w.document.documentElement.appendChild(linkElement);
  }
}
