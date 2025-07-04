const cart = [];

function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  totalPrice.textContent = `Total: ₹${total}`;
}
// Contact Form Interaction
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
    contactForm.reset(); // Clear the form
  } else {
    alert('Please fill out all fields before sending.');
  }
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(name, price);
  });
});