function copyEmail() {
    const email = 'tanzeemrockz@cyberslayercorpz.dev';
    const input = document.createElement('textarea');
    input.value = email;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    
    try {
      document.execCommand('copy');
      const badge = document.getElementById('copy-badge');
      if (badge) {
        badge.textContent = 'Copied to clipboard!';
        badge.classList.remove('text-zinc-400');
        badge.classList.add('text-customGreen');
        setTimeout(() => {
          badge.textContent = 'Click to copy';
          badge.classList.remove('text-customGreen');
          badge.classList.add('text-zinc-400');
        }, 2000);
      }
    } catch (e) {
      console.error('Copy failed', e);
    } finally {
      document.body.removeChild(input);
    }
  }