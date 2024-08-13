// Load the Voiceflow chatbot widget
(function(document, scriptTag) {
    const voiceflowScript = document.createElement(scriptTag);
    const firstScriptTag = document.getElementsByTagName(scriptTag)[0];

    voiceflowScript.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '66bb01bfe0206cda3c190909' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
        });
    };

    voiceflowScript.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    voiceflowScript.type = "text/javascript";
    firstScriptTag.parentNode.insertBefore(voiceflowScript, firstScriptTag);
})(document, 'script');

// Display the chat container after a delay
document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chatContainer');

    setTimeout(function() {
        chatContainer.classList.add('show');
    }, 2000);
});

// Close the chat container when the close icon is clicked
document.addEventListener('click', function(event) {
    if (event.target.id === 'closeIcon') {
        const chatContainer = document.getElementById('chatContainer');
        chatContainer.classList.remove('show');
        localStorage.setItem('chatContainerClosed', 'true');
    }
});

// Prevent the chat container from showing again after it's been closed
const chatContainerClosed = localStorage.getItem('chatContainerClosed');
if (chatContainerClosed) {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = 'none';
}