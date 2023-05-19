async function loadIconImages() {

  messenger.WindowListener.registerChromeUrl([
    ["content",  "PhoenityIcons", "content/"]
  ]);

  messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messenger.xhtml", "content/scripts/loadMessenger.js");

  messenger.WindowListener.registerWindow(
    "about:3pane", "content/scripts/loadMessenger.js");

  messenger.WindowListener.registerWindow(
    "about:message", "content/scripts/loadMessenger.js");

  messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messageWindow.xhtml", "content/scripts/loadMessenger.js");

  messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messengercompose/messengercompose.xhtml", "content/scripts/loadMessenger.js");

  messenger.WindowListener.registerWindow(
    "chrome://messenger/content/customizeToolbar.xhtml", "content/scripts/loadMessenger.js");

  messenger.WindowListener.registerWindow(
    "chrome://messenger/content/SearchDialog.xhtml", "content/scripts/loadMessenger.js");

  messenger.WindowListener.startListening();

  await messenger.phoenityIconsApi.phoenityIcons();
}

loadIconImages();
