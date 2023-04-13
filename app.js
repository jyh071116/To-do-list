let count = 0;

function deleteInput(num){
    document.getElementById(`${num}`).remove();
}

document.querySelector('form').addEventListener('submit', function(e){
    let userTodo = document.querySelector('#userList').value;
    let userTodoAdd = document.querySelector('.userTodoList');

    if (userTodo == ''){
        e.preventDefault();
    }
    else {
        userTodoAdd.innerHTML = `<div id="${count}">
        ${count+1}. ${userTodo}
        <button class="buttonX" onclick="deleteInput(${count})">
        <img src="닫기.png">
        </button>
        </div>${userTodoAdd.innerHTML}`; 

        document.querySelector('#userList').value = '';
        e.preventDefault();
        count++;
    }
});

