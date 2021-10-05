const input = $('#input')
const list = $('#list')
const form = $('.form')
const button = $('#button')

input.focus()

function newItem(e) {
  e.preventDefault()
  let inputValue = input.val()
  let li = $('<li></li>')
  let deleteBtn = $('<button></button>')
  deleteBtn.append(document.createTextNode('X'))
  deleteBtn.addClass('delete-btn')

  if(inputValue === '') {
    alert('You must write something')
  } else {
    li.append(inputValue)
    li.append(deleteBtn)
    list.append(li)
  }
  
  li.on('dblclick', () => crossOut(li))
  deleteBtn.on('click', () => deleteItem(li))
  list.sortable()
  input.val('');
}

function crossOut(element) {
 element.addClass('strike')
}

function deleteItem(element) {
element.addClass('delete')
}

button.on('click', (e) => newItem(e))
form.on('submit', (e) => newItem(e))