
document.querySelector('.nav-resources-section a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    toggleSubOptions(); // Call the toggle function
  });
  
  document.querySelectorAll('#nav-resources-sub-options a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      toggleSubOptions(); // Call the toggle function
    });
  });
  
  function toggleSubOptions() {
    const subOptions = document.getElementById('nav-resources-sub-options');
    
    if (subOptions.style.right === '0vw') {
      subOptions.style.right = '-150vw'; // Hide it by sliding out to the right
    } else {
      subOptions.style.right = '0vw'; // Show it by sliding in from the right
    }
  }