chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': "https://womanvation.wordpress.com"}, function(tab) {
    // Tab opened.
  });
});