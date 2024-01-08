function loadPage(page) {
    // Prevent default behavior of anchor tag
    event.preventDefault();
  
    // Load content of the selected page into the 'content' div
    fetch(page)
      .then(response => response.text())
      .then(data => {
        // Extract content from loaded page (excluding head and script tags)
        var contentStart = data.indexOf('<body>') + 6;
        var contentEnd = data.indexOf('</body>');
        var content = data.substring(contentStart, contentEnd);
  
        // Clear existing content
        document.getElementById('content').innerHTML = '';
  
        // Add new content
        document.getElementById('content').innerHTML = content;
      });
  }
  