function onPageLoad() {
    console.log('Page loaded');
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('focus', () => console.log(`${img.alt} focused`));
        img.addEventListener('blur', () => console.log(`${img.alt} lost focus`));
    });
}
document.addEventListener('mousemove', (event) => {
    console.log(`Mouse moved at (${event.clientX}, ${event.clientY})`);
});
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

window.addEventListener('load', onPageLoad);

function addTabFocus() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', index);
    });
}

window.addEventListener('load', addTabFocus);
