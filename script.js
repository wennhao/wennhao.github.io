const galaxy = document.querySelector('.galaxy');

galaxy.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX / window.innerWidth) * 100;
    const moveY = (e.clientY / window.innerHeight) * 100;
    galaxy.style.transform = `translate(-${moveX}%, -${moveY}%)`;
});
