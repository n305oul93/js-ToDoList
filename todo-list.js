var userInput = document.getElementById('user-input');

var submitToDo = document.getElementById('submitToDo');

var list = document.getElementById('list')

//var chkbx = document.querySelectorAll('input[type=checkbox]')

submitToDo.addEventListener('click', function(event){
	//event.preventDefault();
	//console.log(this);
	//console.log(event);
	var newToDoElement = document.createElement("li");
	newToDoElement.innerHTML = `<label id="todoItem"><input type='checkbox'/>${userInput.value}</label>`;
	list.appendChild(newToDoElement);
    userInput.value = '';
    userInput.focus();
});

list.addEventListener('click', function (event) {
    var chkbx = document.querySelectorAll('input[type=checkbox]');
    var chkbxArray = Array.from(chkbx);
    chkbxArray.forEach(function (item, index){
        var parent = item.parentElement;
    	if(item.checked) {
          parent.style.textDecoration = "line-through";
          setTimeout(function(){
          	item.parentElement.parentElement.remove()
		  }, 2000)
        }else{
          parent.style.textDecoration = ""
		}
	})
});

/*list.addEventListener('click', function (event) {
    //console.log(event.currentTarget)
    var chkbx = document.querySelectorAll('input[type=checkbox]')
    console.log(Array.from(chkbx))
    var chkbxArray = Array.from(chkbx);
    chkbxArray.forEach(function (item, index) {
        // console.log(item.parentElement.innerText)
        // item.parentElement.innerText.style.textDecoration = "line-through"
        // console.log(item.checked)
		todoItem = document.querySelectorAll('#todoItem');
		if(item.checked) {
            // console.log('ToDo item has been checked')
            todoItem.style.textDecoration = "line-through"
        }else {
            // console.log('ToDo item has been unchecked')
            todoItem.style.textDecoration = ""
        }
    });
});*/
