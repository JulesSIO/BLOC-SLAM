document.addEventListener('DOMContentLoaded', function(){
    var ecran=document.getElementById('ecran');
    var pave=document.getElementById('pave');
    var resultat=document.getElementById('resultat');
   
    var mult=document.getElementById('mult');
    var plus=document.getElementById('plus');
    var moins=document.getElementById('moins');
    var divis=document.getElementById('divis');
    var egal=document.getElementById('egal');
    var virgule=document.getElementById('virgule');

    var button1=document.getElementById('button1');
    var button2=document.getElementById('button2');
    var button3=document.getElementById('button3');
    var button4=document.getElementById('button4');
    var button5=document.getElementById('button5');
    var button6=document.getElementById('button6');
    var button7=document.getElementById('button7');
    var button8=document.getElementById('button8');
    var button9=document.getElementById('button9');
    var button0=document.getElementById('button0');

    let current=ecran.innerHTML;

    button0.addEventListener('click', function(){
        button0.value="0";
        ecran.innerHTML=current + button0.value;
        current= ecran.innerHTML;
    });

    button1.addEventListener('click', function(){
        button1.value="1";
        ecran.innerHTML= current + button1.value;
        current= ecran.innerHTML;
    });

    button2.addEventListener('click', function(){
        button2.value="2";
        ecran.innerHTML= current + button2.value;
        current = ecran.innerHTML;
    });

    button3.addEventListener('click', function(){
        button3.value="3";
        ecran.innerHTML= current + button3.value;
        current = ecran.innerHTML;
    });

    button4.addEventListener('click', function(){
        button4.value="4";
        ecran.innerHTML= current + button4.value;
        current = ecran.innerHTML;
    });

    button5.addEventListener('click', function(){
        button5.value="5";
        ecran.innerHTML= current + button5.value;
        current = ecran.innerHTML;
    });

    button6.addEventListener('click', function(){
        button6.value="6";
        ecran.innerHTML= current + button6.value;
        current = ecran.innerHTML;
    });

    button7.addEventListener('click', function(){
        button7.value="7";
        ecran.innerHTML= current + button7.value;
        current = ecran.innerHTML;
    });

    button8.addEventListener('click', function(){
        button8.value="8";
        ecran.innerHTML= current + button8.value;
        current = ecran.innerHTML;
    });

    button9.addEventListener('click', function(){
        button9.value="9";
        ecran.innerHTML= current + button9.value;
        current = ecran.innerHTML;
    });

    mult.addEventListener('click', function(){
        mult.value="*";
        ecran.innerHTML= current + mult.value;
        current = ecran.innerHTML;
    });

    plus.addEventListener('click', function(){
        plus.value="+";
        ecran.innerHTML= current + plus.value;
        current = ecran.innerHTML;
    });

    moins.addEventListener('click',function(){
        moins.value="-";
        ecran.innerHTML= current + moins.value;
        current = ecran.innerHTML;
    });

    divis.addEventListener('click', function(){
        divis.value="/";
        ecran.innerHTML=current + divis.value;
        current = ecran.innerHTML;
    });

    virgule.addEventListener('click', function(){
        virgule.value=",";
        ecran.innerHTML= current + virgule.value;
        current = ecran.innerHTML;
    });

    egal.addEventListener('click', function(){
        let result= eval(ecran.innerHTML);
        resultat.innerHTML=result;
        egal.value="=";
        ecran.innerHTML= current + egal.value;
    });
});