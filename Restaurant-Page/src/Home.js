function Home() {
  const homeDiv = document.createElement('div')
  homeDiv.classList.add('homeDiv')
  homeDiv.setAttribute('id', 'homeDiv')
  homeDiv.textContent = 'hi'
  const home = document.createElement('div');
  home.classList.add('title')
  home.innerHTML = `
  <h1>Beary's</h1>
  <h1>Breakfast</h1>
  <h1>Bar</h1>
  `
  homeDiv.appendChild(home)
  homeDiv.appendChild(peraOne())
  homeDiv.appendChild(peraTwo())
  homeDiv.appendChild(peraThree())
  return homeDiv
  return home
}

const peraOne = () => {
  const pOne = document.createElement('div');
  pOne.classList.add('pera');
  pOne.innerHTML = `<p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.<br/><p id ='pera-two'>Goldilocks</p></p>`
  
  return pOne
}
  
  
  const peraTwo = () => {
    const pTwo = document.createElement('div');
    pTwo.classList.add('ul');
    pTwo.innerHTML = `<p id= 'pera-one'>Hours</p>
    <br/><ul>
    <li>Sunday: 8am - 8pm</li>
    <li>Monday: 6am - 6pm</li>
    <li>Tuesday: 6am - 6pm</li>
    <li>Wednesday: 6am - 6pm</li>
    <li>Thursday: 6am - 10pm</li>
    <li>Friday: 6am - 10pm</li>
    <li>Saturday: 8am - 10pm</li>
    </ul>
    `
    return pTwo
  }
  
  const peraThree = () => {
    const pThree = document.createElement('p');
    pThree.classList.add('pera')
    pThree.innerHTML = `<p id='pera-one'>Location</p> <br/>
    <p>123 Forest Drive, Forestville, Maine</p>
    `
    return pThree
  }


export default function LoadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(Home())
}

console.log('home')