document.addEventListener('DOMContentLoaded', function(){
function clock(){
    var now = new Date();
    var time = now.toLocaleString();
    document.getElementById('horloge').innerHTML = time;
};

setInterval(clock, 1000);

});