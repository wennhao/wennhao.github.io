document.addEventListener('DOMContentLoaded', function () {
    // Laad de startpagina in als standaardinhoud
    loadPage('home.html');

    // Voeg klikgebeurtenissen toe aan menu-items
    var menuItems = document.querySelectorAll('#topbar a');
    
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Voorkom standaardgedrag van de link
            var pageUrl = item.getAttribute('href');
            loadPage(pageUrl);
        });
    });

    // Functie om pagina-inhoud dynamisch te laden
    function loadPage(url) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }
});
