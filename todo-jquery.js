$(document).ready(function () {
  var list = $('#list')
  var addTodo = $('#addTodo')

  $('#submit').on('click', function () {
    var newChkbx = $('<input type="checkbox">')
    var newEl = $('<li>').text(addTodo.val())
    newChkbx.prependTo(newEl)
    newEl.appendTo(list)
    addTodo.val('').focus()
  })

  $('ul').on('click', function () {
    var chkbx = $('input:checkbox')
    var chkbxArray = Array.from(chkbx)
    chkbxArray.forEach(function (item) {
      parent = $(item).parent()
      if (item.checked) {
        parent.css('textDecoration', 'line-through')
        setTimeout(function () {
          console.log(parent)
          parent.remove()
        }, 2000)
      } else {
        parent.css('textDecoration', 'none')
      }
    })
  })
})
