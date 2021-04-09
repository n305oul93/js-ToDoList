var userInput = document.getElementById('user-input')

var submitToDo = document.getElementById('submitToDo')

var list = document.getElementById('list')

submitToDo.addEventListener('click', function (event) {
  var newToDoElement = document.createElement('li')
  newToDoElement.innerHTML = `<label id="todoItem"><input type='checkbox'/>${userInput.value}</label>`
  list.appendChild(newToDoElement)
  userInput.value = ''
  userInput.focus()
})

list.addEventListener('click', function (event) {
  var chkbx = document.querySelectorAll('input[type=checkbox]')
  var chkbxArray = Array.from(chkbx)
  chkbxArray.forEach(function (item, index) {
    var parent = item.parentElement
    if (item.checked) {
      parent.style.textDecoration = 'line-through'
      setTimeout(function () {
        item.parentElement.parentElement.remove()
      }, 2000)
    } else {
      parent.style.textDecoration = ''
    }
  })
})
