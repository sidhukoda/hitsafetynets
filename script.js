
        // Initialize AOS Animation
        
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        // Navbar Scroll Effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
            
            // Back to Top Button
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').addClass('active');
            } else {
                $('.back-to-top').removeClass('active');
            }
        });
        
        // Smooth Scrolling
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            
            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top - 70,
                },
                500,
                'linear'
            );
        });
        
        // Counter Animation
        $('.counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        
        // Gallery Filter
        $(document).ready(function() {
            $('.filter-btn').on('click', function() {
                $('.filter-btn').removeClass('active');
                $(this).addClass('active');
                
                var filterValue = $(this).attr('data-filter');
                $('.gallery-container').isotope({ filter: filterValue });
            });
            
            // Initialize Isotope
            $('.gallery-container').isotope({
                itemSelector: '.gallery-item',
                layoutMode: 'fitRows'
            });
        });
        
        // Chatbot Toggle
        $('#chatbotIcon').click(function() {
            $('#chatbotWindow').toggleClass('active');
        });
        
        $('#chatbotClose').click(function() {
            $('#chatbotWindow').removeClass('active');
        });
        
        // Form Validation
        (function() {
    'use strict';
    
    // Get the form element
    const form = document.getElementById('contactForm');
    
    // Set reply-to email dynamically
    document.getElementById('email').addEventListener('input', function() {
        document.getElementById('replyTo').value = this.value;
    });
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        event.stopPropagation();
        
        // Validate form
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            return;
        }
        
        // Form is valid - proceed with submission
        submitForm();
    });
    
    
    function submitForm() {
        // Get submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        submitBtn.disabled = true;
        
        // Submit to Formspree
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                showConfirmation();
                
                // Reset form
                form.reset();
                form.classList.remove('was-validated');
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem submitting your form. Please try again or contact us directly at info@hitsafetynets.com');
        })
        .finally(() => {
            // Reset button state
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    }
    
    function showConfirmation() {
        // Hide form
        form.style.display = 'none';
        
        // Show confirmation message
        const confirmation = document.getElementById('confirmation');
        confirmation.style.display = 'block';
        
        // Scroll to confirmation
        confirmation.scrollIntoView({ behavior: 'smooth' });
    }
    
})();
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactContainer = document.querySelector('.floating-contact');
    
    contactBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        contactContainer.classList.toggle('active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', function() {
        contactContainer.classList.remove('active');
    });
    
    // Prevent closing when clicking inside options
    const contactOptions = document.getElementById('contactOptions');
    contactOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add any JavaScript interactions here
    const safetyNet = document.querySelector('.safety-net');
    
    // Add hover effect (optional)
    safetyNet.addEventListener('mouseover', function() {
        safetyNet.style.transform = 'scale(1.05)';
    });

    safetyNet.addEventListener('mouseout', function() {
        safetyNet.style.transform = 'scale(1)';
    });
});

        
        // Particles.js Configuration
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        
        // Simple Chatbot Functionality
        // Chatbot Class Definition
class SafetyNetChatbot {
  constructor() {
    this.chatbotMessages = [
      {
        input: ["hi", "hello", "hey", "good morning", "good afternoon"],
        response: "Hello! 👋 Welcome to Safety Net Solutions. How can I assist you today?",
        followUp: [
          { question: "Learn about our products", response: "product" },
          { question: "Get pricing information", response: "price" },
          { question: "Schedule an installation", response: "installation" }
        ]
      },
      {
        input: ["price", "cost", "how much", "pricing"],
        response: "Our pricing depends on several factors. Which type of safety net are you interested in?",
        followUp: [
          { question: "Balcony Safety Nets", response: "balcony price" },
          { question: "Construction Safety Nets", response: "construction price" },
          { question: "Sports Nets", response: "sports price" }
        ]
      },
      {
        input: ["balcony", "balcony net", "balcony safety", "balcony price"],
        response: "Balcony safety nets start at ₹35 per sq.ft. We offer:",
        details: [
          "✔ UV-resistant nylon/polyethylene materials",
          "✔ Custom colors to match your building",
          "✔ Child and pet protection",
          "✔ 5-7 year warranty"
        ],
        followUp: [
          { question: "See photos", action: "showPhotos", params: "balcony" },
          { question: "Request quote", action: "startQuote" }
        ]
      },
      {
        input: ["construction", "building site", "construction safety", "construction price"],
        response: "Construction safety nets are essential for fall protection. Key features:",
        details: [
          "✔ High-density polyethylene material",
          "✔ Meets OSHA safety standards",
          "✔ Various mesh sizes available",
          "✔ Custom sizing for any project"
        ],
        followUp: [
          { question: "View specifications", action: "showSpecs" },
          { question: "Calculate coverage needed", action: "startCalculator" }
        ]
      },
      {
        input: ["warranty", "guarantee", "durability"],
        response: "We offer comprehensive warranties:",
        details: [
          "🔹 7 years on premium balcony nets",
          "🔹 5 years on standard nets",
          "🔹 2 years on construction nets",
          "🔹 Free annual inspections included"
        ]
      },
      {
        input: ["time", "how long", "duration", "installation time"],
        response: "Installation timelines vary:",
        details: [
          "⏱ Standard residential: 4-6 hours",
          "⏱ Commercial projects: 1-3 days",
          "⏱ Emergency service: Same day available",
          "⏱ Typically schedule within 48 hours"
        ]
      },
      {
        input: ["contact", "phone", "email", "reach us"],
        response: "You can contact us through:",
        details: [
          "📞 Phone: +91 98765 43210",
          "📧 Email: info@safetynetsolutions.com",
          "🏢 Office: 123 Safety Lane, Mumbai",
          "⏰ Hours: Mon-Sat 9AM-7PM"
        ]
      },
      {
        input: ["thanks", "thank you", "appreciate"],
        response: "You're welcome! 😊 Let us know if you need anything else."
      }
    ];

    this.context = null;
    this.userHistory = [];
    this.conversationState = 'initial';
    this.initChatbot();
  }

  initChatbot() {
    // Create chatbot container
    this.createChatbotContainer();
    // Add basic styles
    this.addStyles();
    // Setup event listeners
    this.setupEventListeners();
  }

  createChatbotContainer() {
    this.chatContainer = document.createElement('div');
    this.chatContainer.className = 'safety-net-chatbot';
    this.chatContainer.innerHTML = `
      <div class="chatbot-header">
        <h3>Safety Net Assistant</h3>
        <button class="chatbot-close-btn">×</button>
      </div>
      <div class="chatbot-messages"></div>
      <div class="chatbot-quick-replies"></div>
      <div class="chatbot-input-area">
        <input type="text" class="chatbot-input" placeholder="Type your message...">
        <button class="chatbot-send-btn">Send</button>
      </div>
    `;
    document.body.appendChild(this.chatContainer);
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .safety-net-chatbot {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        height: 500px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        font-family: Arial, sans-serif;
        z-index: 1000;
      }
      
      .chatbot-header {
        background: #2c3e50;
        color: white;
        padding: 15px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .chatbot-header h3 {
        margin: 0;
        font-size: 16px;
      }
      
      .chatbot-close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
      }
      
      .chatbot-messages {
        flex: 1;
        padding: 15px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      
      .message {
        max-width: 80%;
        padding: 10px 15px;
        border-radius: 18px;
        line-height: 1.4;
      }
      
      .user-message {
        align-self: flex-end;
        background: #3498db;
        color: white;
        border-bottom-right-radius: 5px;
      }
      
      .bot-message {
        align-self: flex-start;
        background: #f1f1f1;
        color: #333;
        border-bottom-left-radius: 5px;
      }
      
      .chatbot-quick-replies {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        border-top: 1px solid #eee;
      }
      
      .quick-reply {
        background: #e0e0e0;
        border: none;
        border-radius: 15px;
        padding: 8px 12px;
        font-size: 12px;
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .quick-reply:hover {
        background: #d0d0d0;
      }
      
      .chatbot-input-area {
        display: flex;
        padding: 10px;
        border-top: 1px solid #eee;
      }
      
      .chatbot-input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 20px;
        outline: none;
      }
      
      .chatbot-send-btn {
        margin-left: 10px;
        padding: 10px 15px;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
      }
      
      .chatbot-send-btn:hover {
        background: #1a252f;
      }
      
      .chatbot-launcher {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 999;
      }
    `;
    document.head.appendChild(style);
  }

  setupEventListeners() {
    const sendBtn = this.chatContainer.querySelector('.chatbot-send-btn');
    const inputField = this.chatContainer.querySelector('.chatbot-input');
    const closeBtn = this.chatContainer.querySelector('.chatbot-close-btn');

    sendBtn.addEventListener('click', () => this.processUserInput());
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.processUserInput();
    });
    closeBtn.addEventListener('click', () => this.toggleChatbot());
  }

  processUserInput() {
    const inputField = this.chatContainer.querySelector('.chatbot-input');
    const message = inputField.value.trim();
    
    if (!message) return;

    this.addMessage(message, 'user');
    inputField.value = '';
    this.userHistory.push(message);
    
    setTimeout(() => {
      this.generateResponse(message);
    }, 500);
  }

  addMessage(content, sender) {
    const messagesContainer = this.chatContainer.querySelector('.chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = content;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  addQuickReplies(replies) {
    const quickRepliesContainer = this.chatContainer.querySelector('.chatbot-quick-replies');
    quickRepliesContainer.innerHTML = '';
    
    if (!replies || replies.length === 0) return;

    replies.forEach(reply => {
      const button = document.createElement('button');
      button.className = 'quick-reply';
      button.textContent = reply.question;
      button.addEventListener('click', () => {
        this.addMessage(reply.question, 'user');
        if (reply.action) {
          setTimeout(() => {
            this[reply.action](reply.params);
          }, 500);
        } else {
          setTimeout(() => {
            this.generateResponse(reply.response || reply.question);
          }, 500);
        }
      });
      quickRepliesContainer.appendChild(button);
    });
  }

  generateResponse(userInput) {
    let response = this.getStandardResponse(userInput);
    
    if (response.details) {
      this.addMessage(response.response, 'bot');
      response.details.forEach(detail => {
        setTimeout(() => {
          this.addMessage(detail, 'bot');
        }, 300);
      });
    } else {
      this.addMessage(response.response, 'bot');
    }

    if (response.followUp) {
      setTimeout(() => {
        this.addQuickReplies(response.followUp);
      }, 500);
    } else {
      this.addQuickReplies([]);
    }
  }

  getStandardResponse(input) {
    input = input.toLowerCase();
    let defaultResponse = {
      response: "I'm not sure I understand. Could you rephrase or ask about our products, pricing, or services?"
    };

    for (const messageSet of this.chatbotMessages) {
      for (const keyword of messageSet.input) {
        if (input.includes(keyword)) {
          return messageSet;
        }
      }
    }

    // Contextual matching based on conversation history
    if (this.userHistory.length > 0) {
      const lastQuestion = this.userHistory[this.userHistory.length - 1].toLowerCase();
      
      if (lastQuestion.includes("price") && input.includes("balcony")) {
        return this.chatbotMessages.find(m => m.input.includes("balcony"));
      }
      
      if (lastQuestion.includes("price") && input.includes("construction")) {
        return this.chatbotMessages.find(m => m.input.includes("construction"));
      }
    }

    return defaultResponse;
  }

  showPhotos(type) {
    const photoMessages = {
      balcony: [
        "Here are some examples of our balcony safety nets:",
        "🖼️ Modern balcony with transparent safety net",
        "🖼️ Color-matched net for traditional buildings",
        "🖼️ Heavy-duty net for high-rise apartments"
      ],
      construction: [
        "Our construction safety nets in action:",
        "🖼️ High-rise building with perimeter safety",
        "🖼️ Scaffolding with full net coverage",
        "🖼️ Bridge construction with fall protection"
      ]
    };

    photoMessages[type].forEach((msg, index) => {
      setTimeout(() => {
        this.addMessage(msg, 'bot');
      }, index * 300);
    });
  }

  startQuote() {
    this.addMessage("Great! Let's get you a quote. First, what is the approximate area size in square feet?", 'bot');
    this.conversationState = 'gettingQuote';
    this.addQuickReplies([
      { question: "Under 100 sq.ft", response: "quote under 100" },
      { question: "100-500 sq.ft", response: "quote 100-500" },
      { question: "Over 500 sq.ft", response: "quote over 500" }
    ]);
  }

  toggleChatbot() {
    this.chatContainer.style.display = this.chatContainer.style.display === 'none' ? 'flex' : 'none';
  }
}

// Initialize the chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const chatbot = new SafetyNetChatbot();
  
  // Add launcher button
  const chatButton = document.createElement('button');
  chatButton.className = 'chatbot-launcher';
  chatButton.textContent = 'Need Help? Chat with us!';
  chatButton.addEventListener('click', () => chatbot.toggleChatbot());
  document.body.appendChild(chatButton);
});
        // JavaScript for interactive behavior

document.addEventListener('DOMContentLoaded', function() {
  const phoneSticker = document.querySelector('.phone-sticker');
  
  // Auto-show on page load after delay
  setTimeout(() => {
    phoneSticker.style.transform = 'translateX(0)';
  }, 1500);
  
  // Click to call functionality
  phoneSticker.addEventListener('click', function() {
    console.log('Call initiated to +91 720 720 6181');
    // Optional: Add analytics tracking here
  });
  
  // Auto-hide/show on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      // Scrolling down
      phoneSticker.style.transform = 'translateX(120px)';
    } else {
      // Scrolling up
      phoneSticker.style.transform = 'translateX(0)';
    }
    lastScroll = currentScroll;
  });
  
  // Mobile touch behavior
  phoneSticker.addEventListener('touchstart', function() {
    this.style.transform = 'translateX(0)';
  });
});

    