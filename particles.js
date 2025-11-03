// [Dán code particle từ phiên bản trước]
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.width = `${Math.random() * 15 + 5}px`;
    p.style.height = p.style.width;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    particlesContainer.appendChild(p);
}
