function Afficher(){
    const liste=document.getElementById('liste');
    const button=document.getElementById('button');

    if (button.checked){
        liste.style.display="block";
    }else{
        liste.style.display="none";
    }
};