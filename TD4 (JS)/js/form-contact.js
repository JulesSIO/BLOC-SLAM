document.addEventListener("DOMContentLoaded", function(){
    const name=document.getElementById('name');
    const email=document.getElementById('email');
    const msg=document.getElementById('msg');
    const container=document.getElementById('container_input');
    const button=document.getElementById('send');

    send.addEventListener('click', function(){
        console.log(name.value,email.value,msg.value);

    });
});