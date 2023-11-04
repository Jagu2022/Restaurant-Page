function Menu() {
  const menuDiv = document.createElement('div')
  menuDiv.classList.add('menu-div')
  menuDiv.appendChild(
    beverages(
    'honey',
    'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!',"$2"
    ))
  menuDiv.appendChild(
    beverages(
    'Beary Tea',
    'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.','$3'
    ))
  menuDiv.appendChild(
    beverages(
    'Toast and Jam',
    'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.','$1'
    ))
  menuDiv.appendChild(
    beverages(
    'Fresh Fruit',
    'A small bowl of fresh fruit, whatever we find at the market for the day.','$3'
    ))
  menuDiv.appendChild(
    beverages(
    'Pancakes',
    'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.','$4'
    ))
  return menuDiv
}

const beverages = (text, discription, price) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item')
  
  const foodName = document.createElement('h3');
  foodName.classList.add('foodName')
  foodName.textContent = text
  
  const foodDis = document.createElement('em');
  foodDis.classList.add('foodDis')
  foodDis.textContent = discription
  
  const foodPrice = document.createElement('h3');
  foodPrice.classList.add('foodPrice')
  foodPrice.textContent = price
  
  
  menuItem.appendChild(foodName)
  menuItem.appendChild(foodDis)
  menuItem.appendChild(foodPrice)
  return menuItem
}


export default function LoadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(Menu())
}
console.log('menu')