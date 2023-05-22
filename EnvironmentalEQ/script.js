document.getElementById("scroll-button").addEventListener("click", function(event){
    event.preventDefault();
  
    var elmnt = document.getElementById("secondary-title");
    elmnt.scrollIntoView({ behavior: "smooth" });
  });
  