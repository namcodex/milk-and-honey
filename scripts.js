// Chatbot Logic
const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chat-box');
const chatLog = document.getElementById('chat-log');

chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
});

function respond(type) {
    const responses = {
        nail: "You can book via Fresha or WhatsApp at +971 2 562 9902.",
        hours: "We are open daily from 8 AM – 10 PM.",
        location: "We are located at Building 68, Al Hamra St, Al Hosn, Abu Dhabi."
    };
    
    // Add user question
    chatLog.innerHTML += `<p class="text-right text-gray-500"><em>Requested: ${type}</em></p>`;
    
    // Add AI response
    chatLog.innerHTML += `<p class="bg-[#FDFBF7] p-2 rounded text-[#D4A373]"><strong>Honey:</strong> ${responses[type]}</p>`;
    
    // Auto-scroll to bottom
    chatLog.scrollTop = chatLog.scrollHeight;
}
