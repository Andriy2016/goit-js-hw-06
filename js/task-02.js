const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector(`ul#ingredients`);

const ingredientLi = ingredients.map(el=>{
const itemElement = document.createElement(`li`);
itemElement.classList.add(`item`);
itemElement.textContent = el;  
return itemElement;  })

ingredientList.append(...ingredientLi);