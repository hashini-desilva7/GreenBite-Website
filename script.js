//hamburger menue//
        // Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Mobile dropdown toggle
  const dropdownToggles = document.querySelectorAll('.nav-link > a');

  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.nextElementSibling;
    if (dropdown && dropdown.classList.contains('dropdown')) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
});

// script.js (corrected)
document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     Daily tips (home)
     ----------------------------- */
  const tips = [
    "1. Drink at least 8 glasses of water daily to stay hydrated.Water is essential for nearly every function in your body. Staying hydrated helps regulate body temperature, supports digestion, flushes out toxins, and keeps your skin glowing. Carry a reusable water bottle with you to remind yourself to sip water throughout the day.",
    "2. Start your day with a balanced breakfast to fuel your body.A healthy breakfast kickstarts your metabolism and provides energy for the day. Include complex carbs (like oats or whole-grain bread), protein (such as eggs or yogurt), and some fruit for vitamins. This balance prevents energy crashes and improves concentration.",
    "3. Take short breaks during study or work to stretch and relax.Sitting for long periods can cause stiffness and reduce focus. Every 45–60 minutes, stand up, stretch your muscles, or walk around. These mini-breaks help improve blood circulation, refresh your mind, and boost productivity.",
    "4. Aim for at least 30 minutes of physical activity each day.Exercise doesn’t always mean going to the gym. Walking, cycling, dancing, or even home workouts count too. Daily activity strengthens your heart, builds muscle, improves flexibility, and releases endorphins that lift your mood.",
    "5. Practice mindful breathing to reduce stress and stay focused.When you feel stressed, take a few minutes to focus on slow, deep breaths. Inhale through your nose, hold for a few seconds, and exhale slowly through your mouth. This calms your nervous system, lowers anxiety, and improves mental clarity.",
    "6. Eat more fruits and vegetables for essential vitamins and minerals.Colorful fruits and veggies provide antioxidants, fiber, and nutrients your body needs. Try to fill half your plate with them at each meal. A variety of colors ensures you’re getting a wide range of health benefits.",
    "7. Get 7–8 hours of sleep every night for better health.Quality sleep allows your body to repair itself, strengthens immunity, and boosts memory and focus. Create a relaxing bedtime routine, avoid screens before sleep, and aim for consistency by sleeping at the same time each night."
  ];

  const dailyTipEl = document.getElementById("dailyTip");
  if (dailyTipEl) {
    const today = new Date().getDate();
    dailyTipEl.textContent = tips[today % tips.length];
  }

  // Newsletter subscription (guarded)
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("emailInput");
      const msg = document.getElementById("subscriptionMsg");
      if (!emailInput || !msg) return;
      const email = emailInput.value.trim();
      if (email === "") {
        msg.textContent = "⚠ Please enter a valid email!";
        msg.style.color = "red";
        return;
      }

      let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("subscribers", JSON.stringify(subscribers));
        msg.textContent = "Thank you for subscribing!";
        msg.style.color = "#8ec837";
      } else {
        msg.textContent = "ℹ You are already subscribed!";
        msg.style.color = "orange";
      }
      emailInput.value = "";
    });
  }
  


  /* -----------------------------
     Quotes rotator (home hero)
     ----------------------------- */
  const quotes = [
    "Eat better, feel better, live longer.",
    "Your health is your greatest wealth.",
    "Small changes create lasting results.",
    "Stay hydrated, stay energized.",
    "Healthy outside starts from the inside.",
    "Invest in your body — it’s the only place you have to live."
  ];

  const quoteElement = document.getElementById("quote");
  if (quoteElement) {
    let qIndex = 0;
    function showQuote() {
    
      quoteElement.classList.remove("fade");
      void quoteElement.offsetWidth;
      quoteElement.classList.add("fade");
      quoteElement.textContent = quotes[qIndex];
      qIndex = (qIndex + 1) % quotes.length;
    }
    showQuote();
    const quoteTimer = setInterval(showQuote, 4000);
    
  }

  /* -----------------------------
     Calculator (make global if called inline)
     ----------------------------- */
  window.calculate = function () {
    const ageEl = document.getElementById("age");
    const genderEl = document.getElementById("gender");
    const heightEl = document.getElementById("height");
    const weightEl = document.getElementById("weight");
    const activityEl = document.getElementById("activity");

    if (!ageEl || !genderEl || !heightEl || !weightEl || !activityEl) {
      alert("Calculator elements missing on this page.");
      return;
    }

    const age = parseInt(ageEl.value, 10);
    const gender = genderEl.value;
    const height = parseFloat(heightEl.value);
    const weight = parseFloat(weightEl.value);
    const activity = parseFloat(activityEl.value);

    if (Number.isNaN(age) || Number.isNaN(height) || Number.isNaN(weight)) {
      alert("Please fill valid numbers for age, height, and weight.");
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activity;
    const carbs = (tdee * 0.5) / 4;
    const protein = (tdee * 0.2) / 4;
    const fat = (tdee * 0.3) / 9;

    const bmrEl = document.getElementById("bmr");
    const tdeeEl = document.getElementById("tdee");
    const carbsEl = document.getElementById("carbs");
    const proteinEl = document.getElementById("protein");
    const fatEl = document.getElementById("fat");
    const resultsEl = document.getElementById("results");
    const carbsBar = document.getElementById("carbsBar");
    const proteinBar = document.getElementById("proteinBar");
    const fatBar = document.getElementById("fatBar");
    

    if (bmrEl) bmrEl.innerText = bmr.toFixed(2);
    if (tdeeEl) tdeeEl.innerText = tdee.toFixed(2);
    if (carbsEl) carbsEl.innerText = Math.round(carbs);
    if (proteinEl) proteinEl.innerText = Math.round(protein);
    if (fatEl) fatEl.innerText = Math.round(fat);
    if (resultsEl) resultsEl.style.display = "block";

    if (carbsBar) carbsBar.style.width = "50%";
    if (proteinBar) proteinBar.style.width = "20%";
    if (fatBar) fatBar.style.width = "30%";
    
  };


  /* -----------------------------
     Contact/Feedback (guarded)
     ----------------------------- */
  const feedbackForm = document.getElementById("feedback-form") || document.getElementById("feedbackForm");
  const confirmationEl = document.getElementById("confirmation");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameEl = document.getElementById("name");
      const emailEl = document.getElementById("email");
      const messageEl = document.getElementById("message");
      if (!nameEl || !emailEl || !messageEl) return;

      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const message = messageEl.value.trim();

      if (name && email && message) {
        const feedbacks = JSON.parse(localStorage.getItem("greenbiteFeedbacks")) || [];
        feedbacks.push({ name, email, message, timestamp: new Date().toISOString() });
        localStorage.setItem("greenbiteFeedbacks", JSON.stringify(feedbacks));
        if (confirmationEl) {
          confirmationEl.textContent = "✅ Thank you for your feedback!";
          confirmationEl.style.color = "green";
        }
        this.reset();
      } else {
        if (confirmationEl) {
          confirmationEl.textContent = "❌ Please fill out all fields.";
          confirmationEl.style.color = "red";
        }
      }
    });
  }

  // FAQ accordion (guarded)
  const questions = document.querySelectorAll(".faq-question");
  if (questions && questions.length) {
    questions.forEach(q => {
      q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        if (!answer) return;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
      });
    });
  }


  /* -----------------------------
     Workout / Equipment page
     ----------------------------- */
  const workouts = {
    "Arms": {
      "None": ["Push-ups", "Tricep Dips"],
      "Dumbbells": ["Bicep Curls", "Overhead Press"]
    },
    "Legs": {
      "None": ["Squats", "Lunges"],
      "Dumbbells": ["Weighted Squats", "Deadlifts"]
    },
    "Full Body": {
      "None": ["Burpees", "Plank"],
      "Dumbbells": ["Thrusters", "Renegade Rows"]
    }
  };

  const selectedBodyPart = localStorage.getItem("selectedBodyPart") || "Arms";
  const planDiv = document.getElementById("workout-plan");
  const timerDiv = document.getElementById("timer");
  const exerciseName = document.getElementById("exercise-name");
  const countdownEl = document.getElementById("countdown");
  const beepSound = document.getElementById("beepSound");
  let workoutTimer = null;

  const equipForm = document.getElementById("equipForm");
  if (equipForm) {
    equipForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const equipmentEl = document.getElementById("equipment");
      if (!equipmentEl) return;
      const equipment = equipmentEl.value;
      const chosenList = workouts[selectedBodyPart] && workouts[selectedBodyPart][equipment];
      if (!chosenList || chosenList.length === 0) {
        if (planDiv) planDiv.innerHTML = "<p>No exercises found for that combination.</p>";
        return;
      }
      const chosenExercise = chosenList[Math.floor(Math.random() * chosenList.length)];
      if (planDiv) planDiv.innerHTML = `<h2>Your Workout:</h2><p>${chosenExercise} (30 sec)</p>`;
      startWorkoutTimer(chosenExercise, 30);
    });
  }


function startWorkoutTimer(exercise, duration) {
  
  clearInterval(workoutTimer);

  // Show chosen exercise
  if (exerciseName) exerciseName.textContent = exercise;

  // Reset to new duration for button-controlled timer
  currentTime = duration;
  updateDisplay();

  // Show timer section
  if (timerDiv) timerDiv.classList.remove("hidden");


}


  // -----------------------------
// Timer controls (Start / Pause / Reset)
// -----------------------------
let timerInterval = null;
let totalTime = 30; // default 30 seconds
let currentTime = totalTime;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startTimer");
const pauseBtn = document.getElementById("pauseTimer");
const resetBtn = document.getElementById("resetTimer");

function updateDisplay() {
  if (timerDisplay) {
    const minutes = String(Math.floor(currentTime / 60)).padStart(2, "0");
    const seconds = String(currentTime % 60).padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }
}

// Start Timer
if (startBtn) {
  startBtn.addEventListener("click", () => {
    if (timerInterval) return; 
    timerInterval = setInterval(() => {
      if (currentTime > 0) {
        currentTime--;
        updateDisplay();

        // Play beep
        if (beepSound) {
          beepSound.currentTime = 0;
          beepSound.play().catch(() => {});
        }
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        timerDisplay.textContent = "Done!";
      }
    }, 1000);
  });
}

// Pause Timer
if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });
}

// Reset Timer
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    currentTime = totalTime;
    updateDisplay();
  });
}

// Initialize display
updateDisplay();


  // body selection form (redirect to equipment page)
  const bodyForm = document.getElementById("bodyForm");
  if (bodyForm) {
    bodyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const bodypartEl = document.getElementById("bodypart");
      if (!bodypartEl) return;
      const chosen = bodypartEl.value;
      localStorage.setItem("selectedBodyPart", chosen);
      // redirect only if equipment page exists
      window.location.href = "Equipment.html";
    });
  }

}); // end DOMContentLoaded


/* -----------------------------
---------------------------------
     contact page
-------------------------------
-------------------------------- */
  
// FAQ Accordion Toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach(faq => {
    const question = faq.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close other open FAQs
      faqs.forEach(item => {
        if (item !== faq) {
          item.classList.remove("active");
        }
      });

      // Toggle the clicked one
      faq.classList.toggle("active");
    });
  });
});

//mindfulness page

 
    // Breathing text
    document.addEventListener("DOMContentLoaded", () => {
  const breathText = document.getElementById("breath-text");
  if (breathText) {
    let inhale = true;
    setInterval(() => {
      breathText.textContent = inhale ? "Exhale..." : "Inhale...";
      inhale = !inhale;
    }, 4000);
  }
});

    // Timer
    let timerInterval;
    let seconds = 0;
    function startTimer() {
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          seconds++;
          document.getElementById("timer-display").textContent =
            new Date(seconds * 1000).toISOString().substr(14, 5);
        }, 1000);
      }
    }
    function pauseTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    function resetTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
      seconds = 0;
      document.getElementById("timer-display").textContent = "00:00";
    }

    // Sound selector
    
    const soundPlayer = document.getElementById("sound-player");
const soundButtons = document.querySelectorAll(".sound-btn");

soundButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Change audio source
    const soundFile = button.getAttribute("data-sound");
    soundPlayer.src = soundFile;
    soundPlayer.play();

    // Update active button style
    soundButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


    // Log session
    document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === "Reset") {
          const log = document.getElementById("log-list");
          const li = document.createElement("li");
          li.textContent = `Completed session: ${new Date().toLocaleTimeString()}`;
          log.appendChild(li);
        }
      });
    });
  
    if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('Service Worker registered:', reg);
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });
  });
}

