// Mohamed Tanzeem I — Metropolis / tanzeem.xyz Client Script

document.addEventListener('DOMContentLoaded', () => {
  initEmailCopy();
  initQuoteSwitcher();
  initStackFilter();
  initTelemetryEasterEgg();
  initKeyboardShortcuts();
});

// Copy Email with smooth toast feedback
function initEmailCopy() {
  const emailButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  emailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'tanzeemrockz@cyberslayercorpz.dev';

      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
        btn.classList.add('ring-2', 'ring-customGreen');
        setTimeout(() => btn.classList.remove('ring-2', 'ring-customGreen'), 1200);
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast(`Copied ${email} to clipboard!`);
        } catch (err) {
          showToast('Failed to copy. Please write down: ' + email);
        }
        document.body.removeChild(textarea);
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  if (!toast) return;

  toastMessage.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 2800);
}

// Quote Switcher
function initQuoteSwitcher() {
  const tabs = document.querySelectorAll('[data-quote-tab]');
  const quotes = document.querySelectorAll('[data-quote-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetIndex = tab.getAttribute('data-quote-tab');

      tabs.forEach(t => {
        t.classList.remove('bg-customGreen', 'text-black', 'border-customGreen');
        t.classList.add('bg-white/5', 'text-zinc-400', 'border-white/10');
      });

      tab.classList.remove('bg-white/5', 'text-zinc-400', 'border-white/10');
      tab.classList.add('bg-customGreen', 'text-black', 'border-customGreen');

      quotes.forEach(q => {
        if (q.getAttribute('data-quote-content') === targetIndex) {
          q.classList.remove('hidden');
          q.classList.add('fade-in');
        } else {
          q.classList.add('hidden');
        }
      });
    });
  });
}

// Tech Stack Filter
function initStackFilter() {
  const filterBtns = document.querySelectorAll('[data-stack-filter]');
  const stackItems = document.querySelectorAll('[data-stack-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-stack-filter');

      filterBtns.forEach(b => {
        b.classList.remove('bg-white/20', 'text-customGreen', 'border-customGreen/40');
        b.classList.add('bg-white/5', 'text-zinc-400', 'border-white/10');
      });

      btn.classList.remove('bg-white/5', 'text-zinc-400', 'border-white/10');
      btn.classList.add('bg-white/20', 'text-customGreen', 'border-customGreen/40');

      stackItems.forEach(item => {
        const itemCat = item.getAttribute('data-stack-category');
        if (category === 'all' || itemCat.includes(category)) {
          item.style.display = 'inline-flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// F1 Telemetry Mini Easter Egg
function initTelemetryEasterEgg() {
  const rpmTrigger = document.getElementById('f1-throttle-btn');
  const rpmMeter = document.getElementById('f1-rpm-meter');
  const gearDisplay = document.getElementById('f1-gear-display');
  const speedDisplay = document.getElementById('f1-speed-display');

  if (!rpmTrigger) return;

  let currentGear = 7;
  let currentSpeed = 338;
  const gears = [5, 6, 7, 8];

  rpmTrigger.addEventListener('click', () => {
    currentGear = gears[Math.floor(Math.random() * gears.length)];
    currentSpeed = Math.floor(310 + Math.random() * 42);

    if (gearDisplay) gearDisplay.textContent = currentGear;
    if (speedDisplay) speedDisplay.textContent = `${currentSpeed} KM/H`;

    if (rpmMeter) {
      rpmMeter.classList.add('w-full', 'bg-red-500');
      setTimeout(() => {
        rpmMeter.classList.remove('w-full', 'bg-red-500');
      }, 500);
    }

    showToast(`🏎 DRS Enabled! Max speed: ${currentSpeed} km/h`);
  });
}

// Quick Keyboard Shortcuts
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ignore if typing in input/textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'c' || e.key === 'C') {
      const emailBtn = document.querySelector('[data-copy-email]');
      if (emailBtn) emailBtn.click();
    } else if (e.key === 'u' || e.key === 'U') {
      window.location.href = '/uses/index.html';
    } else if (e.key === 'Escape') {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      }
    }
  });
}
