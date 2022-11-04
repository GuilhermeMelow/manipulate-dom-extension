chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const data = request.data || {};

    const divsList = document.querySelectorAll('div');
    divsList.forEach(header => {
        header.innerHTML = request.data;
    });

    sendResponse({ data: data, success: true });
});