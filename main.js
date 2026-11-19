// Tanzeem.xyz — Metropolis Cyber-Paddock & Hardware Lab
// Interactive Engine with Audio Synthesis, Telemetry & Simulators

let audioEnabled = false;
let audioCtx = null;

// Sound Synthesizer using Web Audio API (zero audio file dependencies)
function playSound(type) {
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
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'beep') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'drs') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.25);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'error') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.setValueAtTime(110, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch (e) {
    console.warn('Audio synthesis disabled', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAudioToggle();
  initDrsTelemetry();
  initToshibaSimulator();
  initQuotesJukebox();
  initInteractiveProjects();
  initHardwareRack();
  initTerminal();
  initLiveClock();
});

// Audio Toggle
function initAudioToggle() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      playSound('success');
      toggleBtn.innerHTML = '🔊 SFX ON';
      toggleBtn.classList.remove('bg-zinc-800', 'text-zinc-400');
      toggleBtn.classList.add('bg-customGreen/20', 'text-customGreen', 'border-customGreen');
      showHUDToast('Synthesizer Audio Enabled');
    } else {
      toggleBtn.innerHTML = '🔇 SFX MUTED';
      toggleBtn.classList.remove('bg-customGreen/20', 'text-customGreen', 'border-customGreen');
      toggleBtn.classList.add('bg-zinc-800', 'text-zinc-400');
      showHUDToast('Audio Muted');
    }
  });
}

// DRS & Telemetry
function initDrsTelemetry() {
  const drsBtn = document.getElementById('drs-trigger');
  const speedEl = document.getElementById('telemetry-speed');
  const gearEl = document.getElementById('telemetry-gear');
  const rpmLeds = document.querySelectorAll('.rpm-led');
  const drsBadge = document.getElementById('drs-status-badge');

  if (!drsBtn) return;

  drsBtn.addEventListener('click', () => {
    playSound('drs');
    drsBtn.classList.add('ring-4', 'ring-customYellow');
    if (drsBadge) {
      drsBadge.textContent = 'DRS ACTIVE [FLAP OPEN]';
      drsBadge.className = 'px-2 py-0.5 rounded bg-customYellow text-black font-black animate-pulse';
    }

    // Rev up to gear 8 and 352 km/h
    let currentSpeed = 318;
    const interval = setInterval(() => {
      currentSpeed += 4;
      if (speedEl) speedEl.textContent = `${currentSpeed} KM/H`;
      if (gearEl) gearEl.textContent = '8';

      // Flash RPM LEDs
      rpmLeds.forEach((led, i) => {
        led.style.opacity = i > 4 ? '1' : '0.4';
      });

      if (currentSpeed >= 354) {
        clearInterval(interval);
        showHUDToast('🏎 SPEED TRAP RECORD: 354 KM/H — PIT RADIO: "Simply lovely, Max!"');
        setTimeout(() => {
          if (speedEl) speedEl.textContent = '338 KM/H';
          if (gearEl) gearEl.textContent = '7';
          if (drsBadge) {
            drsBadge.textContent = 'DRS AVAILABLE';
            drsBadge.className = 'px-2 py-0.5 rounded bg-customGreen/20 text-customGreen font-bold border border-customGreen/40';
          }
          drsBtn.classList.remove('ring-4', 'ring-customYellow');
        }, 3000);
      }
    }, 40);
  });
}

// 2009 Toshiba Satellite Fortnite Simulator
function initToshibaSimulator() {
  const launchBtn = document.getElementById('run-fortnite-sim');
  const consoleEl = document.getElementById('toshiba-console');
  const progressEl = document.getElementById('toshiba-progress');
  const crashBox = document.getElementById('toshiba-crash-box');
  const resetBtn = document.getElementById('toshiba-reset');

  if (!launchBtn) return;

  launchBtn.addEventListener('click', () => {
    playSound('beep');
    launchBtn.disabled = true;
    launchBtn.classList.add('opacity-50');
    crashBox.classList.add('hidden');
    progressEl.style.width = '0%';
    consoleEl.textContent = 'Initializing Fortnite_Installer_v29.exe on Toshiba Satellite L500...\n';

    const steps = [
      { text: '> Detecting CPU: Intel Core 2 Duo T6500 @ 2.10GHz... OK\n', pct: 15 },
      { text: '> Probing System RAM: Found 2048 MB DDR2 (Single Channel)...\n', pct: 30 },
      { text: '> Unreal Engine 5 requesting minimum 16,384 MB RAM...\n', pct: 45 },
      { text: '> Commencing aggressive Windows 7 Paging File swap on 5400 RPM HDD...\n', pct: 65 },
      { text: '> Warning: Fan spinning at 9,800 RPM. Temperature: 94°C 🔥\n', pct: 85 },
      { text: '> CRITICAL OUT OF MEMORY: 2GB RAM exhausted! System Halt!\n', pct: 100 }
    ];

    let stepIdx = 0;
    const runStep = () => {
      if (stepIdx < steps.length) {
        consoleEl.textContent += steps[stepIdx].text;
        progressEl.style.width = `${steps[stepIdx].pct}%`;
        playSound('beep');
        stepIdx++;
        setTimeout(runStep, 450);
      } else {
        playSound('error');
        crashBox.classList.remove('hidden');
        launchBtn.disabled = false;
        launchBtn.classList.remove('opacity-50');
      }
    };
    setTimeout(runStep, 300);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      playSound('success');
      crashBox.classList.add('hidden');
      progressEl.style.width = '100%';
      consoleEl.textContent = 'Running DQM v1.2 & AssetSlayer instead: 0.2ms latency, 100% Deterministic, 240 FPS on 2GB RAM! 🚀';
    });
  }
}

// Quotes Jukebox
function initQuotesJukebox() {
  const quoteBtns = document.querySelectorAll('[data-quote-btn]');
  const quoteBoxes = document.querySelectorAll('[data-quote-pane]');

  quoteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('beep');
      const target = btn.getAttribute('data-quote-btn');

      quoteBtns.forEach(b => {
        b.classList.remove('bg-customGreen', 'text-black', 'border-customGreen');
        b.classList.add('bg-black/50', 'text-zinc-400', 'border-white/10');
      });

      btn.classList.remove('bg-black/50', 'text-zinc-400', 'border-white/10');
      btn.classList.add('bg-customGreen', 'text-black', 'border-customGreen');

      quoteBoxes.forEach(box => {
        if (box.getAttribute('data-quote-pane') === target) {
          box.classList.remove('hidden');
        } else {
          box.classList.add('hidden');
        }
      });
    });
  });
}

// Interactive Project Testbenches
function initInteractiveProjects() {
  // AssetSlayer interactive compression slider
  const assetSlider = document.getElementById('asset-slider');
  const assetOriginal = document.getElementById('asset-original-size');
  const assetReduced = document.getElementById('asset-reduced-size');
  const assetSavings = document.getElementById('asset-savings');

  if (assetSlider) {
    assetSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      const reducedKb = Math.round(4200 * ((100 - val) / 100));
      if (assetReduced) assetReduced.textContent = `${reducedKb} KB`;
      if (assetSavings) assetSavings.textContent = `-${val}%`;
    });
  }

  // LangSlayer toggle
  const langToggle = document.getElementById('lang-toggle-btn');
  const langBefore = document.getElementById('lang-before');
  const langAfter = document.getElementById('lang-after');

  if (langToggle) {
    let simplified = false;
    langToggle.addEventListener('click', () => {
      playSound('beep');
      simplified = !simplified;
      if (simplified) {
        langBefore.classList.add('hidden');
        langAfter.classList.remove('hidden');
        langToggle.textContent = 'View Academic Jargon';
        langToggle.classList.add('bg-customGreen', 'text-black');
      } else {
        langBefore.classList.remove('hidden');
        langAfter.classList.add('hidden');
        langToggle.textContent = 'Slay Jargon with Groq ⚡';
        langToggle.classList.remove('bg-customGreen', 'text-black');
      }
    });
  }

  // DQM Brain Selector
  const brainBtns = document.querySelectorAll('[data-brain]');
  const brainOutput = document.getElementById('dqm-brain-output');

  const brainData = {
    tqm: 'DQM [tqm.brain]: Token graph parsed. Zero hallucinatory variance. Latency: 0.42ms. Output: Deterministic match found at node #8979.',
    sqm: 'DQM [sqm.brain]: Structural schema query loaded. Validated against offline SQLite DAG. 0 token leakage detected.',
    lqm: 'DQM [lqm.brain]: Logical inference branch active. Graph depth: 6 layers. Guaranteed mathematical exactness.'
  };

  brainBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('beep');
      const brainKey = btn.getAttribute('data-brain');
      brainBtns.forEach(b => b.classList.remove('bg-customOrange', 'text-black'));
      btn.classList.add('bg-customOrange', 'text-black');
      if (brainOutput) {
        brainOutput.textContent = brainData[brainKey] || 'Ready.';
      }
    });
  });
}

// Hardware Rack Inspector
function initHardwareRack() {
  const rackUnits = document.querySelectorAll('[data-rack-unit]');
  const rackTitle = document.getElementById('rack-inspect-title');
  const rackSpecs = document.getElementById('rack-inspect-specs');
  const rackStory = document.getElementById('rack-inspect-story');

  const rackInfo = {
    lenovo: {
      title: 'Lenovo IdeaPad Slim 3i [Daily Workhorse]',
      specs: 'Intel Core i7 13620H (10 Cores, 16 Threads) • 16GB DDR4 • NVMe SSD',
      story: "Mum's laptop officially, my main engineering command center in reality. Used for DQM compilation, AI prompt benchmarking, and web architecture builds."
    },
    hp: {
      title: 'HP Envy 13 ah0029tu [Headless Server]',
      specs: 'Intel Core i5 8250U • 8GB DDR3 RAM • Broken Display & Degraded Battery',
      story: "The display doesn't turn on and the battery is gone, but the motherboard works! Runs headless via SSH for local background jobs and automation."
    },
    dell: {
      title: 'Dell Vostro 3491 [Standby Workstation]',
      specs: 'Intel Core i3 1005G1 • 8GB DDR4 RAM • 100% Operational',
      story: "Everything works™ on this machine. Reliable backup standby unit for travel and field testing."
    },
    toshiba: {
      title: 'Toshiba Satellite L500 [Vintage Silicon 2009]',
      specs: 'Intel Core 2 Duo T6500 • 2GB DDR2 RAM • Windows 7 / Tiny10 / CachyOS',
      story: 'The legendary testbed where Fortnite was attempted on 2GB RAM! The gold standard for low-spec optimization: if software runs fast here, it runs fast for everyone on the planet.'
    }
  };

  rackUnits.forEach(unit => {
    unit.addEventListener('click', () => {
      playSound('beep');
      const unitKey = unit.getAttribute('data-rack-unit');
      rackUnits.forEach(u => u.classList.remove('border-customGreen', 'bg-customGreen/10'));
      unit.classList.add('border-customGreen', 'bg-customGreen/10');

      const info = rackInfo[unitKey];
      if (info) {
        if (rackTitle) rackTitle.textContent = info.title;
        if (rackSpecs) rackSpecs.textContent = info.specs;
        if (rackStory) rackStory.textContent = info.story;
      }
    });
  });
}

// Interactive Terminal CLI
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  if (!terminalInput || !terminalOutput) return;

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = terminalInput.value.trim();
      const cmd = rawCmd.toLowerCase();
      terminalInput.value = '';

      if (!cmd) return;
      playSound('beep');

      const userLine = document.createElement('div');
      userLine.className = 'text-customGreen font-mono text-xs';
      userLine.textContent = `tanzeem@paddock:~$ ${rawCmd}`;
      terminalOutput.appendChild(userLine);

      const respLine = document.createElement('div');
      respLine.className = 'text-zinc-300 font-mono text-xs mb-2 leading-relaxed';

      switch (cmd) {
        case 'help':
          respLine.innerHTML = `Available commands:
• <span class="text-customGreen font-bold">about</span>: Founder bio & CyberSlayerCorpz
• <span class="text-customGreen font-bold">f1</span>: Max Verstappen & Mercedes Silver Arrows stats
• <span class="text-customGreen font-bold">projects</span>: AssetSlayer, LangSlayer, DQM
• <span class="text-customGreen font-bold">fortnite</span>: Run 2GB DDR2 installer test
• <span class="text-customGreen font-bold">uses</span>: Hardware rigs & developer setups
• <span class="text-customGreen font-bold">contact</span>: Direct email, WhatsApp, Linklee
• <span class="text-customGreen font-bold">drs</span>: Trigger DRS rear wing flap
• <span class="text-customGreen font-bold">clear</span>: Clear terminal console`;
          break;
        case 'about':
          respLine.textContent = 'Mohamed Tanzeem I: Systems builder, FOSS hacker, CyberSlayerCorpz founder. Passionate about AI architectures, Formula 1, and vintage hardware optimization.';
          break;
        case 'f1':
          respLine.innerHTML = '🏎 <span class="text-customYellow font-bold">Max Verstappen (#1, Red Bull Racing)</span> • Favourite Team: <span class="text-customGreen font-bold">Mercedes-AMG Petronas F1 Team ("The Silver Arrows")</span>. Race weekends are strictly non-negotiable!';
          break;
        case 'projects':
          respLine.innerHTML = '1. <strong class="text-customGreen">AssetSlayer</strong> (tanzeemrockz.github.io/assetslayer)<br>2. <strong class="text-customGreen">LangSlayer</strong> (tanzeemrockz.github.io/LangSlayer)<br>3. <strong class="text-customOrange">DQM v1.2</strong> (Deterministic Query Model Python Core)';
          break;
        case 'fortnite':
          respLine.innerHTML = '⚠️ <span class="text-customOrange">Toshiba Satellite 2009:</span> 2GB DDR2 RAM is too small for Fortnite, but runs DQM at lightspeed!';
          const simBtn = document.getElementById('run-fortnite-sim');
          if (simBtn) simBtn.click();
          break;
        case 'uses':
          respLine.innerHTML = 'Navigating to uses inventory... or check the interactive Rack above!';
          break;
        case 'contact':
          respLine.innerHTML = '📧 tanzeemrockz@cyberslayercorpz.dev | WhatsApp: +91 7667271516 | Linklee: tanzeemrockz.linklee.in';
          break;
        case 'drs':
          const drsBtn = document.getElementById('drs-trigger');
          if (drsBtn) drsBtn.click();
          respLine.textContent = 'DRS Flap activated! Speedometer boosted!';
          break;
        case 'clear':
          terminalOutput.innerHTML = '';
          return;
        default:
          respLine.innerHTML = `<span class="text-red-400">Command not recognized: "${rawCmd}". Type <strong class="text-customGreen">help</strong> for a list of commands.</span>`;
      }

      terminalOutput.appendChild(respLine);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
}

// Live Paddock Clock (IST)
function initLiveClock() {
  const clockEl = document.getElementById('live-ist-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format in IST (UTC+5:30)
    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    clockEl.textContent = `${now.toLocaleTimeString('en-US', options)} IST`;
  }
  update();
  setInterval(update, 1000);
}

// Global HUD Toast
function showHUDToast(msg) {
  let toast = document.getElementById('hud-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'hud-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-black/90 border border-customGreen text-customGreen px-4 py-2.5 rounded-lg text-xs font-mono font-bold shadow-2xl transition-all duration-300 pointer-events-none translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }

  toast.textContent = `[PADDOCK]: ${msg}`;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2800);
}
