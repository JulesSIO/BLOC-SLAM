const $=(selector)=>document.querySelector(selector);

const addEvt=(selector, type,callback)=>{
    $(selector).addEventListener(type, callback);
};


/* add-select */

document.addEventListener('DOMContentLoaded', function(){
    addEvt('#bt-add', 'click', ()=>{
        const el=$('#el');
        const li=document.createElement('li');
        li.innerText=el.value;
        $('#ul').appendChild(li);
    });
});