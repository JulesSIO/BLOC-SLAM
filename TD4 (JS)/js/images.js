
function loadImage(imageName) {

    var image = new Image();
    image.src = imageName;
  

    document.getElementById("show").src = image.src;
  };
  
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("select").addEventListener("change", function() {

    var selectedValue = document.getElementById("select").value;

    loadImage(selectedValue);
  });
});