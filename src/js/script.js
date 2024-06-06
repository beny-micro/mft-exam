"use strict";


const renderFoodCards = (food) => {
  const foodContainer = document.querySelector("food-container");
  foodContainer.innerHTML = "";

  food.foreach((food) => {
    const card = document.createElement("div");
    card.className = "food-card";
    const img = document.createElement("img");
    img.setAttribute("alt", food.category);
    img.setAttribute("src", food.image);
    const h3 = document.createElement("h3");
    h3.textContent = food.name;
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = food.price;
    const ingredients = document.createElement("p");
    ingredients.className = "ingredients";
    ingredients.textContent = food.ingredients;
    const cardButtons = document.createElement("div");
    cardButtons.className = "cart-buttons";
    const minus = document.createElement("button");
    minus.className = "minus";
    minus.setAttribute("data-id");
    minus.textContent = "-";
    minus.addEventListener("click", function () {
      updateQuantity(food.id, -1);
    });
    const quantity = document.createElement("span");
    quantity.className = "quantity";
    quantity.innerText = food.quantity;
    quantity.id = `quantity-${food.id}`;
    const plus = document.createElement("button");
    plus.className = "plus";
    plus.setAttribute("data-id");
    plus.textContent = "+";
    plus.addEventListener("click", function () {
      updateQuantity(food.id, 1);
    });
    const id = document.createElement("div");
    id.className = "cart-indicator";
    id.setAttribute("data-id");
    id.textContent = "0";

    cardButtons.appendChild(minus);
    cardButtons.appendChild(quantity);
    cardButtons.appendChild(plus);

    foodContainer.appendChild(card);
  });
};

const updateQuantity = (productId, change) => {
  const food = food.find((f) => f.id == productId);
  if (food) {
    food.quantity += change;
    if (food.quantity < 0) {
      food.quantity = 0;
    }
    document.getElementById(`quantity-${productId}`).textContent = food.qty;
  }
};

const getFood = function (food) {
  fetch(`http://localhost:3131/foods/${food}`)
    .then((response) => response.json())
    .then((data) => {
      renderFoodCards(data)
      const [border] = data[0].borders
    })
};

getFood("Cheeseburger")
