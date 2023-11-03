const $=(selector)=>document.querySelector(selector);

const addEvt=(selector, type,callback)=>{
    $(selector).addEventListener(type, callback);
};