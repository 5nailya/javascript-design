document.addEventListener('DOMContentLoaded', function() {
    // Top navigation dropdowns
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        this.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
  });
