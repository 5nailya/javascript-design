// Первый набор классов
// Первый класс с 3 функциями
class ProductFetcher {
  constructor(apiUrls) {
    this.apiUrls = apiUrls;
  }

  async fetchData() {
    try {
      const responses = await Promise.all(this.apiUrls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      return data.flatMap(item => item);
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
      return [];
    }
  }

  renderProducts(products) {
    const productContainer = document.getElementById('product-cards');
    productContainer.innerHTML = products
      .map(product => `
        <div class="card">
          <img src="${product.image}" class="card-img-top mt-3" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text text-primary"><strong>$${product.price}</strong></p>
            <p class="card-text">Рейтинг: ⭐${product.rating}</p>
          </div>
          <div class="card-info mb-3">
            <p><strong>Категория:</strong> ${product.category}</p>
            <p><strong>Бренд:</strong> ${product.brand}</p>
          </div>
        </div>
      `).join('');
    
    this.addAnimations();
  }

  addAnimations() {
    const cards = document.querySelectorAll('#product-cards .card');
    cards.forEach((card, index) => {
      card.style.animation = 'fadeIn 1s ease forwards';
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }
}

// Второй класс в наборе
class ProductFilter extends ProductFetcher {
  constructor(apiUrls) {
    super(apiUrls);
  }

  updateMatchingCount(count) {
    const countElement = document.getElementById('matching-count');
    countElement.textContent = `найдено ${count} продукт${count !== 1 ? 'ов' : ''}`;
  }

  filterByCategory(products, categoryItem) {
    const category = categoryItem.getAttribute('data-category');
    const filteredProducts = products.filter(product => product.category === category);
    this.renderProducts(filteredProducts);
    this.updateMatchingCount(filteredProducts.length);
  }
}

// Третий класс в наборе
class ProductDisplay extends ProductFilter {
  constructor(apiUrls) {
    super(apiUrls);
  }

  filterProducts(products) {
    const searchTitle = document.getElementById('search-title').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    const category = document.getElementById('category-select').value;

    const filteredProducts = products.filter(product => {
      const matchesTitle = product.name.toLowerCase().includes(searchTitle);
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      const matchesCategory = !category || product.category === category;

      return matchesTitle && matchesPrice && matchesCategory;
    });

    this.renderProducts(filteredProducts);
    this.updateMatchingCount(filteredProducts.length);
  }
}



// Второй набор классов

// Первый класс второго набора
class ProductSearcher {
  constructor(apiUrls) {
    this.apiUrls = apiUrls;
  }

  async fetchData() {
    try {
      const responses = await Promise.all(this.apiUrls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      return data.flatMap(item => item);
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', error);
      return [];
    }
  }

  renderProducts(products) {
    const productContainer = document.getElementById('product-cards');
    productContainer.innerHTML = products
      .map(product => `
        <div class="card">
          <img src="${product.image}" class="card-img-top mt-3" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text text-primary"><strong>$${product.price}</strong></p>
            <p class="card-text">Рейтинг: ⭐${product.rating}</p>
          </div>
          <div class="card-info mb-3">
            <p><strong>Категория:</strong> ${product.category}</p>
            <p><strong>Бренд:</strong> ${product.brand}</p>
          </div>
        </div>
      `).join('');
    
    this.addAnimations();
  }

  addAnimations() {
    const cards = document.querySelectorAll('#product-cards .card');
    cards.forEach((card, index) => {
      card.style.animation = 'fadeIn 1s ease forwards';
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }
}

// Второй класс второго набора
class ProductCategorizer extends ProductSearcher {
  constructor(apiUrls) {
    super(apiUrls);
  }

  updateMatchingCount(count) {
    const countElement = document.getElementById('matching-count');
    countElement.textContent = `найдено ${count} продукт${count !== 1 ? 'ов' : ''}`;
  }

  filterByCategory(products, categoryItem) {
    const category = categoryItem.getAttribute('data-category');
    const filteredProducts = products.filter(product => product.category === category);
    this.renderProducts(filteredProducts);
    this.updateMatchingCount(filteredProducts.length);
  }
}

// apiUrls класс аддресов api
const apiUrls = [
  "https://mocki.io/v1/265adb61-6059-4e3c-9be6-0b406732a467", // Rings
  "https://mocki.io/v1/bee692d8-c995-4404-9d7d-830f5eb0fc66", // Bracelets
  "https://mocki.io/v1/e0d14087-8e86-41b0-8246-b3b59f2b2a44", // Necklaces
  "https://mocki.io/v1/d6388689-9011-4000-b79d-f59704bab726"  // Other Accessories
];

const productFetcher = new ProductDisplay(apiUrls);
const productCategorizer = new ProductCategorizer(apiUrls);

// Переключение темы
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Загрузка продуктов
async function loadProducts() {
  const products = await productFetcher.fetchData();
  productFetcher.renderProducts(products);
  productFetcher.updateMatchingCount(products.length);

  // фильтрации
  document.getElementById('apply-filter').addEventListener('click', () => productFetcher.filterProducts(products));

  //  фильтрация по категории в навигации
  document.querySelectorAll('.nav-link[data-category]').forEach(item => {
    item.addEventListener('click', () => productFetcher.filterByCategory(products, item));
  });
}

loadProducts();
