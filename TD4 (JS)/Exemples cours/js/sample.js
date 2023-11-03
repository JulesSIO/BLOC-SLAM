        const $=(selector)=>document.querySelector(selector);
        const addEvt=(selector, type,callback)=>{
            $(selector).addEventListener(type, callback);
        };
       
       const keyPressFunction=function(event){
        $('#saisie').innerHTML=event.target.value;
     }; 
         document.addEventListener('DOMContentLoaded', function(){
        addEvt('#nom','keyup', keyPressFunction);
    });

   document.addEventListener('DOMContentLoaded',function(){
   addEvt('#bt-creer', 'click', ()=>{
    const elm=$('#elm');
    const color=$('#color');
    const li=document.createElement('li');
    li.innerText=elm.value;
    li.style.color=color.value;
    $('#ul-elements').appendChild(li);
   });
});

