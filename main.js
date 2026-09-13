async function loadF1Data() {
  const container = document.getElementById('f1-tracker');

  try {
    const res = await fetch('https://api.openf1.org/v1/championship_drivers?session_key=9839&driver_number=1');
    const data = await res.json();

    if (data && data.length > 0) {
      const stats = data[data.length - 1];

      container.innerHTML = `
        <p class="font-bold text-customOrange text-2xl mt-2">🏎️ #1 Max Verstappen (The G.O.A.T.)</p>
        <p class="text-white">
          Championship: <span class="font-bold text-white">P${stats.position_current}</span> | 
          Points: <span class="font-bold text-white">${stats.points_current}</span>
        </p>
      `;
    } else {
      container.textContent = 'No championship data found.';
    }
  } catch (err) {
    container.textContent = 'Unable to load telemetry right now.';
  }
}

loadF1Data();