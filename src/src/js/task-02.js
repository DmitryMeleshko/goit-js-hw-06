const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach ( (ingredient) => {
let item = document.createElement("li");
item.textContent = ingredient;
item.setAttribute("class","item");
list.append(item);
});

