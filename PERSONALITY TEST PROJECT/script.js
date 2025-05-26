const questions = [
  {
    text: [
      "Hello there, welcome to Guild Explorer!",
      "We will reveal your path through the many choices, intentions, and instincts you will share.",
      "Let’s see who you really are in the world of the web."
    ],
    choices: [
      { text: "Sure! I'm excited", type: "start" }
    ]
  },
  {
    text: "Let’s say you're in a new place, I’m curious as to what catches your attention first?",
    choices: [
      { text: "The vibe of the place, how it looks and feels for me.", type: "UI Designer" },
      { text: "How people move around and interact with things in the space.", type: "Frontend Developer" },
      { text: "The structure of the place, what makes it function.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "Now imagine you're helping someone build their first big project. Chaos ensues, designs aren't aligned, visuals are broken, and nothing feels cohesive…",
      "How will you approach and help them?"
    ],
    choices: [
      { text: "I will ask what mood or feeling they want people to experience.", type: "UI Designer" },
      { text: "I’d jump into the interactive parts that people will use.", type: "Frontend Developer" },
      { text: "I will check how the structure and systems are set up.", type: "Backend Developer" }
    ]
  },
  {
    text: "What about beauty? What does the word mean to you when you're creating something new?",
    choices: [
      { text: "Emotion, balance, and simplicity.", type: "UI Designer" },
      { text: "Seamless, usable functionality.", type: "Frontend Developer" },
      { text: "Sleek, well-structured logic.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "How about when you’re trying to learn?", "Be it a learning a new skill, or anything in general, what do you see yourself doing first?"
    ],
    choices: [
      { text: "Absorb inspirtation and following whatever sparks curiosity.", type: "UI Designer" },
      { text: "Following a single thread as far as it takes me.", type: "Frontend Developer" },
      { text: "Examine the core concepts and how things are built before trying them.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "Alright, time to put in some pressure!", "If something breaks in a project you helped with, what's your first reaction?"
    ],
    choices: [
      { text: "Ask how the people are affected, then act based on that info.", type: "UI Designer" },
      { text: "Test it out immediately and adjust on the fly.", type: "Frontend Developer" },
      { text: "Analyze what went wrong one by one.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "Let’s say some experts in your field recognized your work.",
       "What do you think it is that they saw and appreciated in you?"
    ],
    choices: [
      { text: "My creative eye and attention to detail.", type: "UI Designer" },
      { text: "My flexibility and fast problem-solving.", type: "Frontend Developer" },
      { text: "My dependable structure and clean logic.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "You’re doing great so far!", "But I wonder, when things go wrong or feel overwhelming... what do you usually do to get back on track?"
    ],
    choices: [
      { text: "Take a breather, focus, and re-align the objectives.", type: "UI Designer" },
      { text: "Keep trying different things until something clicks.", type: "Frontend Developer" },
      { text: "Go back to the beginning, fix the foundation.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "How about entertainment?", "When you come across content that resonates with you, perhaps? What kind of stories, inspiration, or ideas tend to stick with you?"
    ],
    choices: [
      { text: "Content that explores emotion, design, and beauty.", type: "UI Designer" },
      { text: "Content that is filled with the personality of the characters.", type: "Frontend Developer" },
      { text: "Content that contains deep lore or a well-built storyline.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "You discover a new tool, it seems intriguing and looks useful, but unfamiliar to you.", "What do you do with it?"
    ],
    choices: [
      { text: "Following your curiosity, you explore and get hold of it.", type: "UI Designer" },
      { text: "Start using right away and figure it out as you go.", type: "Frontend Developer" },
      { text: "Read any text first to understand how it works.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "Hmm, when you encounter something flawed...", "Knowing your skills, how can you contribute to the system and improve it?"
    ],
    choices: [
      { text: "Make it more enjoyable, both visually appealing and legible.", type: "UI Designer" },
      { text: "Fix the parts where people interact the most.", type: "Frontend Developer" },
      { text: "Going back to the source, rebuild it from the ground up.", type: "Backend Developer" }
    ]
  },
  {
    text: "Say in your perspective, what would a great success look like?",
    choices: [
      { text: "Creating something people emotionally connect with.", type: "UI Designer" },
      { text: "Delivering something people enjoy using daily.", type: "Frontend Developer" },
      { text: "Building something reliable that scales and lasts for a long time.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "Final question! How do you typically deal with unpredictability in projects?", "Things breaking, directions changing, plans falling apart, how do you handle setbacks?"
    ],
    choices: [
      { text: "I adjust creatively to keep things feeling thoughtful and cohesive.", type: "UI Designer" },
      { text: "I instantly adapt and troubleshoot the occurring problems.", type: "Frontend Developer" },
      { text: "I take a pause, stabilize the problem’s logic and structure.", type: "Backend Developer" }
    ]
  },
  {
    text: [
      "Sike! Okay, I swear this is the final final question FR!",
      "At the end of a digital project, no matter how it went, what makes it feel worth it to you?"
    ],
    choices: [
      { text: "Watching someone smile as they interact with what I designed.", type: "UI Designer" },
      { text: "Knowing I made someone’s day better through what I built.", type: "Frontend Developer" },
      { text: "Building something steady and lasting. That’s my pride.", type: "Backend Developer" }
    ]
  }
];
 

  let currentQuestion = 0;
  let score = { "UI Designer": 0, "Frontend Developer": 0, "Backend Developer": 0, "start":0};
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const choicesList = document.getElementById('choices-list');
  const resultContainer = document.getElementById('result');
  const personaResult = document.getElementById('persona-result');
  
  function showTyping(callback) {
    const typingEl = document.getElementById('typing-indicator');
    const questionTextEl = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
  
    typingEl.classList.remove('hidden');
    questionTextEl.classList.add('hidden'); 
    choicesList.innerHTML = ''; 
  
    setTimeout(() => {
      typingEl.classList.add('hidden');
      questionTextEl.classList.remove('hidden'); 
      callback(); 
    }, 1000); 
  }
  
  function loadQuestion() {
    showTyping(() => {
      const question = questions[currentQuestion];
      
      // Clear previous question
      questionText.innerHTML = '';
      choicesList.innerHTML = '';
  
      if (Array.isArray(question.text)) {
        question.text.forEach(line => {
          const bubble = document.createElement('div');
          bubble.className = 'chat-bubble';
          bubble.textContent = line;
          questionText.appendChild(bubble);
        });
      } else {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.textContent = question.text;
        questionText.appendChild(bubble);
      }
  
      // Show choices after a delay
      setTimeout(() => {
        question.choices.forEach((choice, index) => {
          const li = document.createElement('li');
          li.className = 'choice';
          li.textContent = choice.text;
          li.onclick = () => handleChoice(choice.type);
          choicesList.appendChild(li);
  
          setTimeout(() => li.classList.add('visible'), index * 150);
        });
      }, 600);
    });
  }
  
  
  
  function handleChoice(type) {
    if (type !== "start") {
      score[type]++;
    }
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showConfirmation();
    }
  }
  
  
  function showConfirmation() {
    // Clear previous content
    questionText.innerHTML = '';
    choicesList.innerHTML = '';
  
    // Create and append the chat bubble
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = "I apologize if that took a lot of time nyehe, but after a long journey, we can finally make out what you are meant to be with all this data that I have gathered!";
    
    questionText.appendChild(bubble);
  
    // Create the "Yes!" choice button
    const yesButton = document.createElement('li');
    yesButton.className = 'choice';
    yesButton.textContent = "Yes! Show me!";
    yesButton.onclick = () => redirectToResult();
    choicesList.appendChild(yesButton);
  
    // Optional: animate choice appearance like in loadQuestion
    setTimeout(() => yesButton.classList.add('visible'), 150);
  }
  
  
  function redirectToResult() {
    let maxScore = 0;
    let persona = '';
  
    for (const key in score) {
      if (score[key] > maxScore) {
        maxScore = score[key];
        persona = key;
      }
    }
  
    if (
      score["Frontend Developer"] === score["Backend Developer"] &&
      score["Frontend Developer"] > score["UI Designer"]
    ) {
      persona = "Full Stack Developer";
    }
  
    localStorage.setItem('persona', persona); // Store result
    window.location.href = 'result.html';     // Redirect to result page
  }
  
  
  // Start quiz
  loadQuestion();
  