const sendMessage = (message) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { data: message }, (response) => {
            console.log(response);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('#text');

    document.querySelector('#button-sender').onclick = () => sendMessage(textElement.value);
});