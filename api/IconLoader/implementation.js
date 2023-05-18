var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");

var phoenityIconsApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      phoenityIconsApi: {
        async phoenityIcons() {
          let chatButtonIcon = context.extension.rootURI.resolve("content/skin/icons/button-chat.png");
          try {
            Services.wm.getMostRecentWindow("mail:3pane").document.getElementById("button-chat").setAttribute("image", chatButtonIcon);
          }
          catch (e) {
            console.debug("button-chat not found");
          }
        },
      },
    };
  }
};
