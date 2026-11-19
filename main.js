// tanzeem.xyz — CyberSlayerCorpz Personal Portfolio & Interactive Lab

let audioEnabled = false;
let audioCtx = null;

function playAudioBeep(freq = 600, duration = 0.06, type = 'sine') {
  if (!audioEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context not allowed without interaction
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSparkleTrail();
  initCrtTvChannels();
  initEmailCopy();
  initAudioToggle();
  initQuotes();
});

// Sparkle Trail (adapted tastefully from reshi-the-coolram)
function initSparkleTrail() {
  const colors = ['#8ecbff', '#ff8739', '#27F5BB', '#ffffff'];
  let lastX = 0, lastY = 0;

  window.addEventListener('mousemove', (e) => {
    // Only spawn if cursor moved at least 25px
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist < 25) return;
    lastX = e.clientX;
    lastY = e.clientY;

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-dot';
    const size = Math.floor(Math.random() * 4 + 3);
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.setProperty('--dx', `${(Math.random() - 0.5) * 40}px`);
    sparkle.style.setProperty('--dy', `${(Math.random() - 0.5) * 40}px`);
    sparkle.style.boxShadow = `0 0 8px ${sparkle.style.backgroundColor}`;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 750);
  });
}

// Interactive CRT TV Widget (inspired by siddharthan-pradeep07 TV)
function initCrtTvChannels() {
  const channelBtns = document.querySelectorAll('[data-tv-channel]');
  const screens = document.querySelectorAll('[data-tv-screen]');
  const channelLabel = document.getElementById('crt-channel-name');

  const channelNames = {
    '1': 'CH 01 • F1 PADDOCK & TELEMETRY',
    '2': 'CH 02 • 2009 TOSHIBA STRESSBENCH',
    '3': 'CH 03 • DQM DETERMINISTIC COGNITION',
    '4': 'CH 04 • ASSETSLAYER COMPRESSION'
  };

  channelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playAudioBeep(750, 0.05);
      const ch = btn.getAttribute('data-tv-channel');

      channelBtns.forEach(b => {
        b.classList.remove('bg-white/20', 'text-white', 'border-white/30');
        b.classList.add('bg-white/5', 'text-white/60', 'border-white/10');
      });

      btn.classList.remove('bg-white/5', 'text-white/60', 'border-white/10');
      btn.classList.add('bg-white/20', 'text-white', 'border-white/30');

      if (channelLabel) {
        channelLabel.textContent = channelNames[ch] || `CHANNEL ${ch}`;
      }

      screens.forEach(s => {
        if (s.getAttribute('data-tv-screen') === ch) {
          s.classList.remove('hidden');
        } else {
          s.classList.add('hidden');
        }
      });
    });
  });

  // Fortnite 2009 simulator button
  const simTrigger = document.getElementById('tv-sim-fortnite');
  const simLog = document.getElementById('tv-sim-log');

  if (simTrigger && simLog) {
    simTrigger.addEventListener('click', () => {
      playAudioBeep(450, 0.08, 'square');
      simLog.textContent = '> Probing Toshiba Satellite (2009)...\n> Detected: Intel Core 2 Duo • 2048 MB DDR2 RAM\n> Initializing Fortnite.exe...\n> ERROR: System requires 16,384 MB RAM! Out of memory!\n> Running DQM & AssetSlayer instead: 100% stable at 240 FPS! 🚀';
    });
  }
}

// Copy Email with CyberSlayerCorpz Toast
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('[data-copy-email]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'tanzeemrockz@cyberslayercorpz.dev';
      navigator.clipboard.writeText(email).then(() => {
        playAudioBeep(880, 0.1);
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(email);
      });
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById('studio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'studio-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#0e0e12]/95 border border-white/20 text-white px-4 py-2.5 rounded-full text-xs font-medium shadow-2xl backdrop-blur-xl transition-all duration-300 pointer-events-none translate-y-16 opacity-0 flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="size-1.5 rounded-full bg-emerald-400"></span><span>${msg}</span>`;
  toast.classList.remove('translate-y-16', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-16', 'opacity-0');
  }, 2600);
}

// Audio Toggle
function initAudioToggle() {
  const btn = document.getElementById('studio-audio-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      playAudioBeep(800, 0.08);
      btn.textContent = '🔊 Sound On';
      btn.classList.add('text-white', 'border-white/30');
      showToast('Sound Effects Enabled');
    } else {
      btn.textContent = '🔇 Muted';
      btn.classList.remove('text-white', 'border-white/30');
      showToast('Muted');
    }
  });
}

// Quotes Tabs
function initQuotes() {
  const quoteBtns = document.querySelectorAll('[data-quote-trigger]');
  const quoteCards = document.querySelectorAll('[data-quote-box]');

  quoteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playAudioBeep(650, 0.05);
      const idx = btn.getAttribute('data-quote-trigger');

      quoteBtns.forEach(b => {
        b.classList.remove('bg-white/15', 'text-white');
        b.classList.add('bg-transparent', 'text-white/60');
      });

      btn.classList.remove('bg-transparent', 'text-white/60');
      btn.classList.add('bg-white/15', 'text-white');

      quoteCards.forEach(c => {
        if (c.getAttribute('data-quote-box') === idx) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    });
  });
}
