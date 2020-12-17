function calculateTotal(cart) {
  let total = 0;
  cart.forEach((item) => {
    total += item.dish.price * item.quantity;
  });
  return total;
}

function getLocalAuth() {
  let isAuth = localStorage.getItem('isAuth');
  return isAuth ? isAuth : false;
}

function setLocalAuth(isAuth) {
  localStorage.setItem('isAuth', isAuth);
}

export { calculateTotal, getLocalAuth, setLocalAuth };
