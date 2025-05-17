// Virginia Algonquian Language Learning Interface JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("Virginia Algonquian Language App script loaded");
  init();
});

// Global variables
let vocabularyData = [];
let learnedWords = new Set();
let currentCategory = "all";
let currentIndex = 0;
let filteredVocabulary = [];
let isFlipped = false;
let audioPlayer = new Audio();

// Main initialization function
function init() {
  console.log("Initializing Virginia Algonquian Language App...");
  
  // Load learned words from localStorage if available
  const savedLearned = localStorage.getItem('learnedVirginiaAlgonquianWords');
  if (savedLearned) {
    try {
      learnedWords = new Set(JSON.parse(savedLearned));
      console.log(`Loaded ${learnedWords.size} learned words from localStorage`);
    } catch (e) {
      console.error("Error loading learned words from localStorage:", e);
      learnedWords = new Set();
    }
  }
  
  // Load vocabulary data
  loadVocabularyData();
  
  // Set up event listeners
  setupEventListeners();
}

// Load vocabulary data
function loadVocabularyData() {
  fetch('./vocabulary-data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      vocabularyData = data;
      filteredVocabulary = [...vocabularyData];
      shuffleArray(filteredVocabulary);
      updateStats();
      displayWord();
      console.log(`Loaded ${vocabularyData.length} vocabulary words`);
    })
    .catch(error => {
      console.error("Error loading vocabulary data:", error);
      // If loading fails, use sample data
      if (typeof sampleVocabularyData !== 'undefined' && sampleVocabularyData.length > 0) {
        vocabularyData = sampleVocabularyData;
        filteredVocabulary = [...vocabularyData];
        shuffleArray(filteredVocabulary);
        updateStats();
        displayWord();
        console.log(`Loaded ${vocabularyData.length} sample vocabulary words`);
      }
    });
}

// Set up all event listeners
function setupEventListeners() {
  // Card flip event
  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.addEventListener('click', function(e) {
      // Don't toggle if clicking on a button inside the card
      if (!e.target.closest('button')) {
        toggleCardFlip();
        e.stopPropagation();
      }
    });
  }
  
  // Flip button
  const flipBtn = document.getElementById('flip-btn');
  if (flipBtn) {
    flipBtn.addEventListener('click', function(e) {
      toggleCardFlip();
      e.stopPropagation();
    });
  }
  
  // Next word button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      nextWord();
      e.stopPropagation();
    });
  }
  
  // Mark as learned button
  const markLearnedBtn = document.getElementById('mark-learned-btn');
  if (markLearnedBtn) {
    markLearnedBtn.addEventListener('click', function(e) {
      markAsLearned();
      e.stopPropagation();
    });
  }
  
  // Category buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Set current category
      currentCategory = this.dataset.category;
      
      // Update active button styling
      categoryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter vocabulary based on category
      if (currentCategory === 'all') {
        filteredVocabulary = [...vocabularyData];
      } else {
        filteredVocabulary = vocabularyData.filter(word => word.category === currentCategory);
      }
      
      // Shuffle and reset
      shuffleArray(filteredVocabulary);
      currentIndex = 0;
      isFlipped = false;
      updateStats();
      displayWord();
    });
  });
  
  // Play audio button
  const playAudioBtn = document.getElementById('play-audio-btn');
  if (playAudioBtn) {
    playAudioBtn.addEventListener('click', function(e) {
      playCurrentWordAudio();
      e.stopPropagation();
    });
  }
  
  // Add keyboard support
  document.addEventListener('keydown', function(e) {
    // Space or Enter to flip card
    if (e.code === 'Space' || e.code === 'Enter') {
      toggleCardFlip();
      e.preventDefault();
    }
    // Right arrow for next word
    else if (e.code === 'ArrowRight') {
      nextWord();
      e.preventDefault();
    }
    // L key to mark as learned
    else if (e.code === 'KeyL') {
      markAsLearned();
      e.preventDefault();
    }
    // A key for audio playback
    else if (e.code === 'KeyA') {
      playCurrentWordAudio();
      e.preventDefault();
    }
  });
}

// Function to display the current word
function displayWord() {
  // Check if we have words available
  if (filteredVocabulary.length === 0) {
    document.getElementById('english-word').textContent = "No words available in this category";
    
    // Clear emoji hints
    const emojiFrontElement = document.getElementById('emoji-hint-front');
    const emojiBackElement = document.getElementById('emoji-hint-back');
    if (emojiFrontElement) emojiFrontElement.textContent = "";
    if (emojiBackElement) emojiBackElement.textContent = "";
    
    return;
  }
  
  // Get the current word
  const word = filteredVocabulary[currentIndex];
  
  // Reset card to front side if it was flipped
  if (isFlipped) {
    document.getElementById('flashcard').classList.remove('flipped');
    isFlipped = false;
  }
  
  // Update content
  document.getElementById('english-word').textContent = word.english;
  document.getElementById('algonquian-word').textContent = word.algonquian;
  document.getElementById('pronunciation').textContent = word.pronunciation || '';
  document.getElementById('source').textContent = `Source: ${word.source}`;
  document.getElementById('notes').textContent = word.notes || '';
  
  // Update emoji hints on both sides of the card
  const emojiFrontElement = document.getElementById('emoji-hint-front');
  const emojiBackElement = document.getElementById('emoji-hint-back');
  
  if (emojiFrontElement && emojiBackElement) {
    // Use emoji hint if available, otherwise use a default
    if (word.emojiHint) {
      emojiFrontElement.textContent = word.emojiHint;
      emojiBackElement.textContent = word.emojiHint;
    } else {
      emojiFrontElement.textContent = "❓";
      emojiBackElement.textContent = "❓";
    }
  }
  
  // Reset audio player
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  
  // Update mark learned button
  const markLearnedBtn = document.getElementById('mark-learned-btn');
  if (markLearnedBtn) {
    if (learnedWords.has(word.english)) {
      markLearnedBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
        </svg>
        Already Learned
      `;
      markLearnedBtn.disabled = true;
      markLearnedBtn.classList.add('learned');
    } else {
      markLearnedBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Mark as Learned
      `;
      markLearnedBtn.disabled = false;
      markLearnedBtn.classList.remove('learned');
    }
  }
}

// Function to play audio for current word
function playCurrentWordAudio() {
  if (filteredVocabulary.length === 0) return;
  
  const word = filteredVocabulary[currentIndex];
  
  // Check if word has audio path
  if (word.audio && word.audio.trim() !== '') {
    // Play audio
    audioPlayer.src = word.audio;
    audioPlayer.play().catch(err => {
      console.error("Error playing audio:", err);
    });
  } else {
    console.log("No audio available for this word");
  }
}

// Toggle card flip state
function toggleCardFlip() {
  const flashcard = document.getElementById('flashcard');
  if (!flashcard) return;
  
  isFlipped = !isFlipped;
  
  if (isFlipped) {
    flashcard.classList.add('flipped');
  } else {
    flashcard.classList.remove('flipped');
  }
}

// Function to go to the next word
function nextWord() {
  if (filteredVocabulary.length === 0) return;
  
  // Move to next word (with wrap-around)
  currentIndex = (currentIndex + 1) % filteredVocabulary.length;
  
  // Reset flip state
  isFlipped = false;
  
  // Update display
  displayWord();
}

// Function to mark a word as learned
function markAsLearned() {
  if (filteredVocabulary.length === 0) return;
  
  const word = filteredVocabulary[currentIndex];
  learnedWords.add(word.english);
  
  // Save to localStorage
  try {
    localStorage.setItem('learnedVirginiaAlgonquianWords', JSON.stringify([...learnedWords]));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
  
  // Update stats and button
  updateStats();
  const markLearnedBtn = document.getElementById('mark-learned-btn');
  if (!markLearnedBtn) return;
  
  markLearnedBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 11l3 3L22 4"></path>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
    </svg>
    Learned!
  `;
  markLearnedBtn.disabled = true;
  markLearnedBtn.classList.add('learned');
  
  // Go to next word after a short delay
  setTimeout(function() {
    nextWord();
  }, 1000);
}

// Function to update stats
function updateStats() {
  const learnedCount = document.getElementById('learned-count');
  const totalCount = document.getElementById('total-count');
  const progressBar = document.getElementById('progress-bar');
  
  if (!learnedCount || !totalCount || !progressBar) return;
  
  // Count learned words in current category
  let learnedInCategory = 0;
  let totalInCategory = 0;
  
  if (currentCategory === 'all') {
    learnedInCategory = learnedWords.size;
    totalInCategory = vocabularyData.length;
  } else {
    const categoryWords = vocabularyData.filter(word => word.category === currentCategory);
    learnedInCategory = categoryWords.filter(word => learnedWords.has(word.english)).length;
    totalInCategory = categoryWords.length;
  }
  
  // Update display
  learnedCount.textContent = learnedInCategory;
  totalCount.textContent = totalInCategory;
  
  // Update progress bar
  const percentage = totalInCategory > 0 ? (learnedInCategory / totalInCategory) * 100 : 0;
  progressBar.style.width = `${percentage}%`;
}

// Utility function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Fallback vocabulary data (if external file fails to load)
const sampleVocabularyData = [
  {
    english: "fire",
    algonquian: "pohkhan",
    pronunciation: "poh-khan",
    source: "Strachey",
    notes: "Element, used ritually",
    category: "basic",
    audio: "audio/pohkhan.mp3",
    emojiHint: "🔥"
  },
  {
    english: "water",
    algonquian: "sucquehanna",
    pronunciation: "suh-kweh-han-na",
    source: "Smith",
    notes: "Liquid for drinking",
    category: "basic",
    audio: "audio/sucquehanna.mp3",
    emojiHint: "💧"
  },
  {
    english: "earth",
    algonquian: "ohke",
    pronunciation: "oh-ke",
    source: "Strachey",
    notes: "Ground, soil, world",
    category: "nature",
    audio: "audio/ohke.mp3",
    emojiHint: "🌎"
  }
];