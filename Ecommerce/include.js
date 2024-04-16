// Function to load header
function loadHeader() {
    const headerContainer = document.getElementById('headerContainer');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Function to load footer
  function loadFooter() {
    const footerContainer = document.getElementById('footerContainer');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        footerContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Call functions to load header and footer when the page loads
  window.onload = function () {
    loadHeader();
    loadFooter();
  };
  