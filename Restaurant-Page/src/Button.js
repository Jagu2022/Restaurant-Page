import LoadHome from './Home'
import LoadMenu from './Menu'
import LoadCon from './Contact'

function nav() {
  let container = document.querySelector('.container')
  const nav = document.createElement('nav')
  nav.classList.add('btnAll')
  
  const btn1 = document.createElement('button')
  btn1.classList.add('btn')
  const btn2 = document.createElement('button')
  btn2.classList.add('btn')
  const btn3 = document.createElement('button')
  btn3.classList.add('btn')
  
  btn1.textContent = 'Home'
  btn2.textContent = 'Menu'
  btn3.textContent = 'Contact'
  
  nav.appendChild(btn1)
  nav.appendChild(btn2)
  nav.appendChild(btn3)
  
  
  btn1.addEventListener("click", (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(btn1)
    LoadHome()
  })
  btn2.addEventListener("click", (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(btn2)
    LoadMenu()
  })
  btn3.addEventListener("click", (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(btn3)
    LoadCon()
  })
  return nav
  
}

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    if( button != this ) {
      button.classList.remove('active')
    }
  })
  button.classList.add('active')
}

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main')
  main.setAttribute('id', 'main')
  return main
}

const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('foot')
  footer.textContent = 'copyrights © 2023 bharathkumar '
  return footer
}

export default function loading() {
  let container = document.querySelector('.container')
  container.appendChild(nav())
  container.appendChild(createMain())
  container.appendChild(footer())
  setActiveButton(document.querySelector('.btn'))
  LoadHome()
}
