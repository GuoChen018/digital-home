const svgItems = document.querySelectorAll('#spaceship');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

svgItems.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    const tooltipContent = e.target.dataset.tooltipContent;
    tooltip.innerHTML = tooltipContent;
    document.body.appendChild(tooltip);

    const itemRect = e.target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    const x = itemRect.left + itemRect.width / 2 - tooltipRect.width / 2;
    const y = itemRect.top - tooltipRect.height - 10;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add('show');
  });

  item.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
    tooltip.remove();
  });
});