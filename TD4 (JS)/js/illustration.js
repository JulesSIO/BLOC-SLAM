document.addEventListener('DOMContentLoaded', function(){
    const gras=document.getElementById('gras');
    const italique=document.getElementById('italique');
    const souligne=document.getElementById('souligne');
    const barre=document.getElementById('barre');
    const color=document.getElementById('color');
    const size=document.getElementById('size');
    var police=document.getElementById('police');
    const grand=document.getElementById('grand');
    const petit=document.getElementById('petit');
    const result=document.getElementById('result');

    gras.addEventListener('click', function(){
        if(gras.checked){
            result.style.fontWeight="bold";
        }else{
            result.style.fontWeight="normal";
        }
    });

    italique.addEventListener('click', function(){
        if(italique.checked){
            result.style.fontStyle="italic";
        }else{
            result.style.fontStyle="normal";
        }
    });

    souligne.addEventListener('click', function(){
        if(souligne.checked){
            result.style.textDecoration="underline";
        }else{
            result.style.textDecoration="none";
        }
    });

    barre.addEventListener('click', function(){
        if(barre.checked){
            result.style.textDecorationLine="line-through";
        }else{
            result.style.textDecorationLine="none";
        }
    });

    color.addEventListener('change', function(){
        result.style.color=color.value;
    });

    size.addEventListener('input', function(){
        result.style.fontSize=size.value + "px";
    });

    police.addEventListener('change', function(){
        if(police="1"){
            result.style.fontFamily='fantasy';
        }else{
            result.style.fontFamily="Arial";
        }

        if(police="2"){
            result.style.fontFamily="sans-serif";
        }else{
            result.style.fontFamily="none";
        }

        if(police="3"){
            result.style.fontFamily="serif";
        }else{
            result.style.fontFamily="none";
        }
    });

    grand.addEventListener('click', function(){
        let style = window.getComputedStyle(result, null).getPropertyValue('font-size');
        let currentsize= parseFloat(style);
        result.style.fontSize = (currentsize + 10) + "px";
    });

    petit.addEventListener('click', function(){
        let style= window.getComputedStyle(result, null).getPropertyValue('font-size');
        let currentsize= parseFloat(style);
        result.style.fontSize= (currentsize - 10) + "px";
    });
   
});