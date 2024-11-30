// Вычисление лет работы компании
const startYear = 2005;
const currentYear = new Date().getFullYear();
document.getElementById("years-in-business").textContent = currentYear - startYear;

// Корзина
const cart = [];
const cartItemsList = document.getElementById("cart-items");
const totalElement = document.querySelector(".cart .total");

function addToCart(button) {
  const product = button.closest(".product");
  const name = product.querySelector("h3").textContent;
  const price = parseInt(product.querySelector("p").textContent.replace(/\D/g, ""));

  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price} ₽
      <button onclick="removeFromCart(${index})">Удалить</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = `Общая стоимость: ${total} ₽`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}


function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  