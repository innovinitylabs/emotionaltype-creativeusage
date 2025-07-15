// Animate font-variation-settings on hover for all .emotional elements

document.querySelectorAll('.emotional').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transition = 'font-variation-settings 0.3s cubic-bezier(.4,2,.6,1)';
    el.style.fontVariationSettings = "'wght' 1000";
  });
  el.addEventListener('mouseleave', () => {
    // Slow transition back to -1000
    let wght = 1000;
    el.style.transition = 'none';
    if (el._fadeInterval) clearInterval(el._fadeInterval);
    const step = 30; // ms
    const duration = 1800; // ms
    const steps = duration / step;
    const delta = (1000 + 1000) / steps;
    el._fadeInterval = setInterval(() => {
      wght -= delta;
      if (wght <= -1000) {
        wght = -1000;
        el.style.fontVariationSettings = "'wght' " + wght;
        clearInterval(el._fadeInterval);
        el._fadeInterval = null;
      } else {
        el.style.fontVariationSettings = "'wght' " + wght;
      }
    }, step);
  });
}); 