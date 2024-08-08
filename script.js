document.addEventListener('DOMContentLoaded', () => {
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");

    if (link1) {
        link1.addEventListener('click', () => {
            scrollToElement('#Home');
        });
    }

    if (link2) {
        link2.addEventListener('click', () => {
            scrollToElement('#Skills');
        });
    }

    if (link3) {
        link3.addEventListener('click', () => {
            scrollToElement('#My Projects');
        });
    }
});

function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão de navegação

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

