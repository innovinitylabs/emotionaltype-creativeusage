// Animate font-variation-settings on hover for all .emotional elements

document.querySelectorAll('.emotional').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.fontVariationSettings = "'wght' 1000";
  });
  el.addEventListener('mouseleave', () => {
    el.style.fontVariationSettings = "'wght' -1000";
  });
}); 