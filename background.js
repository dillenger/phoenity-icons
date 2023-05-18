messenger.WindowListener.registerChromeUrl([
    ["content",  "PhoenityIcons", "content/"]
]);

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messengercompose/messengercompose.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messenger.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messageWindow.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/customizeToolbar.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/SearchDialog.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/about3Pane.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/aboutMessage.xhtml",
    "chrome://PhoenityIcons/content/scripts/loadMessenger.js");

messenger.WindowListener.startListening();

async function loadIconImages() {
  await messenger.phoenityIconsApi.phoenityIcons();
}

loadIconImages();
