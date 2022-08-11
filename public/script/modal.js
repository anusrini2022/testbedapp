  // Get the modal
  var newmodal=document.getElementById("newmodal");
    

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    newmodal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
   newmodal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target ==newmodal) {
      newmodal.style.display = "none";
    }
  }