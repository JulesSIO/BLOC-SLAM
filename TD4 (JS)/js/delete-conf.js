document.addEventListener('DOMContentLoaded', function(){
    const supprimer=document.getElementById('delete');
    const vide=document.getElementById('vide');
    
    supprimer.addEventListener('click', function(){
        const result=window.confirm("Voulez-vous vraiment supprimer cet élément ?", ["Oui","Non"]);
            if (result){
                vide.remove();
                alert("L'élément sélectionné a été supprimé avec succès !")
            }else{
                alert("Opération interrompu !")
            }


    });



});