document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    // Display user's message
    displayMessage(userInput, 'user-message');

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Show typing indicator
    document.getElementById('typing-indicator').style.display = 'block';

    // Generate CatGPT's response
    setTimeout(() => {
        document.getElementById('typing-indicator').style.display = 'none';
        const catResponse = generateCatResponse(userInput);
        displayMessage(catResponse, 'bot-message');
    }, 1000); // Simulate a delay for typing
}

function displayMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;

    const chatLog = document.getElementById('chat-log');
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateCatResponse(userInput) {
    const meowVariations = [
        "Meow",
        "Meooow",
        "Mrrrr",
        "Meeooow",
        "Mew",
        "Mraow",
        "Meeeoooow",
        "Mrrrrrr"
    ];

    const lengthMultiplier = Math.floor(userInput.length / 10);
    let response = '';

    for (let i = 0; i < lengthMultiplier + 1; i++) {
        const randomMeow = meowVariations[Math.floor(Math.random() * meowVariations.length)];
        response += randomMeow + ' ';
    }

    return response.trim();
}
