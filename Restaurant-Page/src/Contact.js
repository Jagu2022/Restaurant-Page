function Contact() {
  let conDiv = document.createElement('div')
  conDiv.classList.add('conDiv');
  conDiv.appendChild(contact(
    'cheff', 'Mama Bear', '555-555-5554'
    ))
  conDiv.appendChild(contact(
    'Manager', 'papa Bear', '555-555-5555'
    ))
  conDiv.appendChild(contact(
    'waiter', 'baby Bear', '555-555-5556'
    ))
  conDiv.appendChild(contact(
    'security', 'uncle Bear', '555-555-5559'
    ))
    return conDiv
}

const contact = (occ, name, cont) => {
  const heading = document.createElement('div')
  heading.classList.add('heading')
  
  const details = document.createElement('div')
  details.classList.add('details')
  const occupation = document.createElement('h3');
  occupation.classList.add('occupation');
  occupation.textContent = occ
  
  const id = document.createElement('p');
  id.classList.add('id');
  id.textContent = name
  
  const con = document.createElement('p');
  con.classList.add('cont');
  con.textContent = cont
  
  details.appendChild(occupation)
  details.appendChild(id)
  details.appendChild(con)
  return  details
}


export default function LoadCon() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(Contact())
}
console.log('contact')