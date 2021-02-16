document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  let itemElem = document.createElement('li')
  itemElem.className = 'list-group-item'
  itemElem.textContent = document.getElementById('text').value
  document.getElementById('items').append(itemElem)

  document.getElementById('text').value = ''
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('list-group-item')) {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active')
    } else {
      event.target.classList.add('active')
    }
  }
})