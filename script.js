// script.js

document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function() {
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  });
  