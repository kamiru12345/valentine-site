// -----------------------------
// MESSAGE TO TYPE
// -----------------------------
const message = "Hello darling… 💕 or should I call you Toto? 😌 Or maybe Fab? ✨ Honestly, every name feels right when it belongs to you 💖. You have this gentle aura about you 🌸—the kind that makes everything feel calm, warm, and beautiful ✨💫. Like I told you earlier, we are in the month of love 💘, and I truly must give you your flowers 🌹🌷. You deserve them for being such a good girl 🥰, for always being there 🤍, and for loving so effortlessly and genuinely 💞.\n\nEvery time you’re around 😍, my heart feels lighter 💓. You make me smile without even trying 😊, and somehow you turn dull days into bright, happy moments ☀️✨. Your presence alone changes the mood 🌙, and your energy is something I never take for granted 🌈.\n\nGaddemit 😌 karibu niongee kizungu, panda bike 🚲 ukuje uikalie 💑.";

// -----------------------------
// GRAB ELEMENTS
// -----------------------------
const typedText = document.getElementById("typedText");
const bgMusic = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");
const content = document.getElementById("content");
const photoScroll = document.getElementById("photoScroll");

let index = 0;
let photoScrollDirection = 1; // 1 = down, -1 = up
let photoScrollSpeed = 0.5;   // smaller = slower

// -----------------------------
// TYPING FUNCTION
// -----------------------------
function typeMessage() {
  if (index < message.length) {
    const char = message.charAt(index);

    // Handle new lines
    if (char === "\n") {
      typedText.innerHTML += "<br>";
    } else {
      typedText.innerHTML += char;
    }

    index++;

    // Scroll left-side message automatically
    const textSide = document.querySelector(".text-side");
    textSide.scrollTop = textSide.scrollHeight;

    // Scroll images slowly up/down
    if (photoScroll.scrollTop + photoScroll.clientHeight >= photoScroll.scrollHeight) {
      photoScrollDirection = -1; // reached bottom → scroll up
    } else if (photoScroll.scrollTop <= 0) {
      photoScrollDirection = 1;  // reached top → scroll down
    }
    photoScroll.scrollTop += photoScrollDirection * photoScrollSpeed;

    setTimeout(typeMessage, 80); // typing speed
  } else {
    // Show Valentine question after typing finishes
    document.getElementById("valentineBox").style.display = "block";
  }
}

// -----------------------------
// START EVERYTHING ON BUTTON CLICK
// -----------------------------
surpriseBtn.addEventListener("click", function () {
  content.style.display = "block";
  surpriseBtn.style.display = "none";

  typedText.innerHTML = "";
  photoScroll.scrollTop = 0;
  index = 0;

  typeMessage();

  bgMusic.play().catch(() => {
    console.log("User interaction required to play music");
  });
});


