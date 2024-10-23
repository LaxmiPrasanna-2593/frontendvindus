import React, { useState, useEffect, useRef } from 'react';
import '../styles/chatbox.css';
import { FaComments, FaTimes } from 'react-icons/fa'; 

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to Vindus Environment Pvt. Ltd.! How can we assist you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatBodyRef = useRef(null); 

  useEffect(() => {
    scrollToBottom(); 
  }, [messages]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight; 
    }
  };

  const toggleChat = () => {
    if (isOpen) {
      window.speechSynthesis.cancel(); // Stop speech when closing the chatbox
    }
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { from: 'user', text: inputMessage }]);
      setInputMessage('');
  
      handleBotResponse(inputMessage);
      window.speechSynthesis.cancel(); // Stop speech from the previous message before responding
    }
  };
  

  const handleOptionClick = (option) => {
    setMessages([...messages, { from: 'user', text: option }]);
    handleBotResponse(option);
  };

  const handleBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = '';

    if (lowerCaseMessage.includes('product') || lowerCaseMessage.includes('information')) {
      botResponse = 'Our products offer innovative software solutions, including cloud computing, AI, and automation tools for environmental monitoring.';
    } else if (lowerCaseMessage.includes('support')) {
      botResponse = 'Our support team is available 24/7. You can reach us at info.vindus@gmail.com or call 9133718103.';
    } else if (lowerCaseMessage.includes('pricing')) {
      botResponse = 'For detailed pricing information, please visit our "Contact" page and send us a message. Our sales team will promptly respond with a customized pricing solution tailored to your needs.';
    } else if (lowerCaseMessage.includes('services')) {
      botResponse = 'We offer a comprehensive range of services including digital marketing, SEO, web application development, and more. For further details, visit our "Services" page.';
    } else if (lowerCaseMessage.includes('ceo')) {
      botResponse = 'Our CEO is Vinay Kalwala, a leading expert in environmental technology with 2+ years of experience.';
    } else if (lowerCaseMessage.includes('careers') || lowerCaseMessage.includes('job') || lowerCaseMessage.includes('join')) {
      botResponse = 'We are always looking for talented individuals. Visit our "Careers" page for current job openings and explore opportunities to join our team.';
    } else if (lowerCaseMessage.includes('location')) {
      botResponse = 'Vindus Environment Pvt. Ltd. is headquartered in Shanthi Nagar, behind Sanjay Steel Bazar,Lalitha Nagar, Dilsukhnagar,Hyderabad, Telangana 500060.';
    } else if (lowerCaseMessage.includes('hours') || lowerCaseMessage.includes('business')) {
      botResponse = 'Our business hours are Monday to Saturday, 9 AM to 6 PM. Support is available 24/7.';
    } else if (lowerCaseMessage.includes('contact')) {
      botResponse = 'You can contact us via email at info.vindus@gmail.com or call us at 9133718103.';
    } else if (lowerCaseMessage.includes('history')) {
      botResponse = 'Vindus Environment Pvt. Ltd. started with a simple vision: harnessing technology for a greener planet. From small beginnings, we now lead in AI environmental solutions.';
    } else if (lowerCaseMessage.includes('coffee') || lowerCaseMessage.includes('tea')) {
      botResponse = 'I may not drink coffee, but I can provide you with some excellent software solutions to help you with your work, no caffeine required!';
    } else if (lowerCaseMessage.includes('joke')) {
      botResponse = 'Why did the developer go broke? Because they used up all their cache!';
    } else if (lowerCaseMessage.includes('weather')) {
      botResponse = "I can't check the weather for you, but I'd suggest always being prepared for sunshine, rain, or the occasional bug in your code!";
    } else if (lowerCaseMessage.includes('robots')) {
      botResponse = "I'm a bot, not a robot! But if you ask nicely, I might be able to recommend a few robots for the job!";
    } else if (lowerCaseMessage.includes('mission')) {
      botResponse = 'Our mission at Vindus is to innovate in the field of environmental tech and contribute to a greener, more sustainable future for generations to come.';
    } else if (lowerCaseMessage.includes('values')) {
      botResponse = 'Our core values are innovation, sustainability, and excellence in providing environmentally focused solutions.';
    } else if (lowerCaseMessage.includes('fun fact')) {
      botResponse = 'Fun fact: The name "Vindus" is inspired by the winds that move across the globe, symbolizing the spread of our innovative solutions worldwide!';
    } else if (lowerCaseMessage.includes('secret')) {
      botResponse = 'The secret to our success? A lot of hard work, innovation, and, well, maybe a bit of magic!';
    } else if (lowerCaseMessage.includes('cookies')) {
      botResponse = 'We do use cookies on our site! But don’t worry, these cookies won’t add any calories.';
    } else if (lowerCaseMessage.includes('tech stack')) {
      botResponse = 'We use a modern tech stack: React, Node.js, Python, and AI models to power our cutting-edge environmental solutions!';
    } else if (lowerCaseMessage.includes('vacation')) {
      botResponse = "As a bot, I don't take vacations. But if I did, I'd probably visit the cloud! Literally.";
    } else if (lowerCaseMessage.includes('motivation')) {
      botResponse = "Remember, even bugs can be fixed with the right code. Keep pushing forward, and don't let debugging bug you!";
    } else if (lowerCaseMessage.includes('party')) {
      botResponse = 'Our parties are all about green energy, clean solutions, and of course, AI talks! Want to join us?';
    } else if (lowerCaseMessage.includes('music')) {
      botResponse = 'I may not have ears, but I do enjoy the sound of clean, efficient code!';
    } else if (lowerCaseMessage.includes('books')) {
      botResponse = "I haven't read any books, but I can recommend some great AI research papers!";
    } else if (lowerCaseMessage.includes('favorite')) {
      botResponse = 'My favorite thing? Helping you, of course!';
     } else if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
      } else if (lowerCaseMessage.includes('namaste') || lowerCaseMessage.includes('namasthe')) {
        botResponse = 'Namaste! How can I help you today?';
      } else if (lowerCaseMessage.includes('how are you')) {
        botResponse = 'I’m just a bot, but I’m functioning perfectly! How about you?';
      } else if (lowerCaseMessage.includes('good morning')) {
        botResponse = 'Good morning! Hope you have a fantastic day ahead!';
      } else if (lowerCaseMessage.includes('good evening')) {
        botResponse = 'Good evening! How can I make your evening better?';
      } else if (lowerCaseMessage.includes('good night')) {
        botResponse = 'Good night! Feel free to chat with me anytime!';
      } else if (lowerCaseMessage.includes('what’s up')) {
        botResponse = 'Not much, just here to help! What’s up with you?';
      } else if (lowerCaseMessage.includes('how’s it going')) {
        botResponse = 'It’s going great! How about you?';
      } else if (lowerCaseMessage.includes('have you eaten') || lowerCaseMessage.includes('did you eat'))  {
        botResponse = "I don't eat, but I hope you're enjoying your meal!";
      } else if (lowerCaseMessage.includes('thank you')) {
        botResponse = 'You’re welcome! I’m here to help!';
      } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('ok'))  {
        botResponse = 'Ok! Come back anytime you need assistance!';
    
      } else if (lowerCaseMessage.includes('about')) {
      botResponse = 'Vindus Environment Pvt. Ltd. is a leading software company focused on providing AI-driven environmental solutions.';
      }
      else if (lowerCaseMessage.includes('developers') || lowerCaseMessage.includes('team')) {
        botResponse = 'Our talented developers include Laxmiprasanna, Durga Prakash, and Ravi Jain, who have contributed greatly to the development of our cutting-edge solutions.';
      } else {
      botResponse = "I'm sorry, I don't have an answer for that right now. Can I help with something else?";
     }



    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: 'bot', text: botResponse }
      ]);

      // Use speech synthesis to read the bot's response
      readAloud(botResponse);
    }, 1000);
  };

  // Function to read aloud the text using Web Speech API
const readAloud = (text) => {
  window.speechSynthesis.cancel(); // Stop any ongoing speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; 
  window.speechSynthesis.speak(utterance);
};

  return (
    <div className="chat-container">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaComments />} 
      </button>

      <div className={`chatbox ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h4>Vindus Support</h4>
          <button className="close-chat" onClick={toggleChat}>X</button>
        </div>
        
        <div className="chat-options">
          <button onClick={() => handleOptionClick('Services')}>Services</button>
          <button onClick={() => handleOptionClick('Support')}>Support</button>
          <button onClick={() => handleOptionClick('Pricing')}>Pricing</button>
          <button onClick={() => handleOptionClick('Business Hours')}>Business Hours</button>
          <button onClick={() => handleOptionClick('Careers')}>Careers</button>
          <button onClick={() => handleOptionClick('Company Location')}>Company Location</button>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.from}`}>
              {message.text}
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}  
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
