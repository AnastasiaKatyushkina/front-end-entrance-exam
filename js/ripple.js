export function initRipples() {
  document.body.addEventListener('click', function (e) {
    const container = e.target.closest('.ripple');
    if (!container) return;

    const editableAncestor = e.target.closest('[contenteditable="true"]');
    if (editableAncestor && editableAncestor !== container) return;

    const circle = document.createElement('span');
    circle.classList.add('ripple-effect');

    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;

    container.appendChild(circle);

    circle.addEventListener('animationend', () => circle.remove());
  });
}