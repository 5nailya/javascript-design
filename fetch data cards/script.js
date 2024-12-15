function filterCards() {
  const searchTermTitle = document.getElementById('search-title').value.toLowerCase();
  const minPrice = parseFloat(document.getElementById('min-price').value);
  const maxPrice = parseFloat(document.getElementById('max-price').value);
  const minPriceLabel = document.getElementById('min-price-label');
  const maxPriceLabel = document.getElementById('max-price-label');
  
  minPriceLabel.textContent = `Min: $${minPrice}`;
  maxPriceLabel.textContent = `Max: $${maxPrice}`;
  
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const price = parseFloat(card.querySelector('.card-text-price').textContent.replace('$', ''));

      if (title.includes(searchTermTitle) && price >= minPrice && price <= maxPrice) {
        card.closest('.col-12').style.display = 'flex';
    } else {
        card.closest('.col-12').style.display = 'none';
    }
  });
}

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        let cards = "";
        data.products.forEach(item => {
            cards += `
                <div class="col-12 mb-4">
                    <div class="card h-100">
                        <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                            <p class="card-text card-text-price"><strong>$${item.price}</strong></p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
        });
        document.querySelector('#product-cards').innerHTML = cards;

        setTimeout(() => {
            const cardElements = document.querySelectorAll('.card');
            cardElements.forEach(card => card.classList.add('show'));
        }, 100);

        filterCards();
    });

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
