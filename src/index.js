document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    creatVal(e.target.new.value)
  })
});

function creatVal(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', btnDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)

console.log(li)
document.querySelector('#tasks').appendChild(li)
}

function btnDelete(e){
  e.target.parentNode.remove()
}
