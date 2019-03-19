// Wait for window to load
document.addEventListener("DOMContentLoaded", function(event) { 
  
  // Get reference to header object
  let myHeader = document.getElementById("header-id")
  
  // Wait 3 seconds, then display the header
  setTimeout(() => {
    myHeader.classList.remove("hidden");    
  }, 3000)
});
