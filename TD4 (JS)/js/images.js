document.addEventListener('DOMContentLoaded', afficherImage=>{
    const selectoption=document.getElementById('list-img').value;
    const image= new Image();
    image.src='../assets/images/${selectoption}.png';
    image.onload = () =>{
        document.getElementById("image").appendChild(image);
    };
    image.src='../assets/images/${selectoption}.png';
    document.getElementById("list-img").addEventListener("change", afficherImage);
});
