document.addEventListener("DOMContentLoaded", addition=>{
    document.getElementById('calcul').addEventListener('click', ()=> {
    const nombre1= document.getElementById('number1');
    const nombre2= document.getElementById('number2');
    const resultat= document.getElementById('result');

    const n1= Number(nombre1.value);
    const n2= Number(nombre2.value);

    const somme = n1 + n2;

    resultat.innerHTML = somme;

});
});
