function loadPage(page) {
    // Load content of the selected page into the 'content' div
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      });
  }
  