const svgItems = document.querySelectorAll('#spaceship, #laptop, #ping-pong, #microphone, #cup, #pencil, #cat, #pencil, #art-palette, #taipei-101, #totoro, #pen-tool');
const tooltip = document.createElement('div');

tooltip.classList.add('tooltip');

svgItems.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    const tooltipContent = e.target.dataset.tooltipContent;
    tooltip.innerHTML = tooltipContent;
    document.body.appendChild(tooltip);
    

    // STILL NEED TO CHANGE THIS!
    // Set position of tooltip 2rem above the top of the SVG item
    const rect = item.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
    const y = rect.top - tooltip.offsetHeight - parseFloat(getComputedStyle(tooltip).fontSize) * 1.5;
    
    
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.style.position = 'fixed';
    tooltip.classList.add('show');

  });

  item.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
    tooltip.remove();

  });
});
