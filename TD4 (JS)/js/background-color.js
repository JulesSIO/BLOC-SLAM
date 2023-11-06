const $=(selector)=>document.querySelector(selector);

const addEvt=(selector, type,callback)=>{
    $(selector).addEventListener(type, callback);
};

/* Change Background */

document.addEventListener('DOMContentLoaded', function(){
  addEvt('#bt-change', 'click', ()=>{
    const color=$('#color');
    document.body.style.background = color.value;
    });
});

