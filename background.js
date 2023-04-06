let isBlindfold = false;

function updateUI(id) {
  browser.pageAction.setIcon({
    path: isBlindfold ? {
      48: "icons/invisible_small.png",
      96: "icons/invisible_large.png"
    } : {
      48: "icons/visible_small.png",
      96: "icons/visible_large.png"
    },
    tabId: id
  });
  browser.pageAction.setTitle({
    title: isBlindfold ? 'Remove blindfold' : 'Enable blindfold',
    tabId: id
  });
}

function toggleBlindfold() {
  browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
    if (tabs[0]) {
      let id = tabs[0].id;
      isBlindfold = !isBlindfold;
      browser.tabs.sendMessage(id, {isBlindfold: isBlindfold});
      updateUI(id);
    }
  });
}

browser.pageAction.onClicked.addListener(toggleBlindfold);
