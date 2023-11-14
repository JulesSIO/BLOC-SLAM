document.addEventListener('DOMContentLoaded', function(){
    var taskadd=document.getElementById('task-add');
    var nametask=document.getElementById('name-task');
    var buttonadd=document.getElementById('button-add');

    var listtaskdiv=document.getElementById('list-task');
    var listtask=document.getElementById('list-task-ul');
    var buttondeleteall=document.getElementById('button-deleteall');
    
    var savetask=document.getElementById('save-task');
    var namesave=document.getElementById('name-save');
    var buttonsave=document.getElementById('button-save');
    
    var listsave=document.getElementById('list-save');
    var listsavetask=document.getElementById('list-save-task');
    var buttonload=document.getElementById('button-load');

    buttonadd.addEventListener('click', function(){
        let list=document.createElement('li');
        let task=document.createElement('input');
        let comment=document.createElement('span');
        task.type='checkbox';
        task.classList.add('task');
        comment.innerHTML= nametask.value;
        comment.classList.add('comment');
        listtask.appendChild(list);
        list.appendChild(task);
        list.appendChild(comment);

        let buttondelete=document.createElement('button');
        buttondelete.type='button';
        buttondelete.classList.add('buttondelete');
        buttondelete.innerHTML='X';
        list.appendChild(buttondelete);

        buttondelete.addEventListener('click', function(){
            list.remove(task);
            list.remove(comment);
        });

        task.addEventListener('click', function(){
            if(task.checked){
                comment.style.textDecorationLine="line-through";
            }else{
                comment.style.textDecorationLine="none";
            }
        });

        buttondeleteall.addEventListener('click', function(){
            if(task.checked){
                listtask.removeChild(list);
            };
        });

        buttonsave.addEventListener('click', function(){
            let option=document.createElement('option');
            option.innerHTML=namesave.value;
            listsavetask.appendChild(option);
        });

});

});