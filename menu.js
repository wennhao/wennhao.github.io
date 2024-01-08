let menuAdded = false;

function loadPage(page) {
  // Prevent default behavior of anchor tag
  event.preventDefault();

  // Load content of the selected page into the 'content' div
  fetch(page)
    .then(response => response.text())
    .then(data => {
      // Clear existing content
      document.getElementById('content').innerHTML = '';

      // Add new content
      document.getElementById('content').innerHTML = data;

      // Add the menu if it hasn't been added yet
      if (!menuAdded) {
        addMenu();
        menuAdded = true;
      }
    });
}

function addMenu() {
  // Add your menu code here (copied from the index.html file)
  const menuHTML = `
    <nav id="menu">
      <ul>
        <li><a href="#" onclick="loadPage('index.html', event)">Home</a></li>
        <li><a href="#" onclick="loadPage('opdracht1.html', event)">Page 1</a></li>
        <li><a href="#" onclick="loadPage('opdracht2.html', event)">Page 2</a></li>
      </ul>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', menuHTML);
}
