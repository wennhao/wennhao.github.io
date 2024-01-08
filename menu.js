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
      });
  }
  