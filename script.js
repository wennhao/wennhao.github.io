function loadMenu(menuFile) {
    const header = document.querySelector('header');

    // Remove existing scripts to avoid conflicts
    const existingScripts = header.querySelectorAll('script');
    existingScripts.forEach(script => script.remove());

    // Load the new menu using a script element
    const script = document.createElement('script');
    script.src = menuFile;
    script.type = 'text/javascript';
    header.appendChild(script);
}
