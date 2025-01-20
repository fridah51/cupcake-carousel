function searchFunction() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
      const text = product.innerText.toLowerCase();
      if (text.includes(input)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}