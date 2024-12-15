//  первый набор классов
// класс "Book" с тремя функциями
class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    getTitle() {
        return `Название книги: ${this.title}`;
    }

    getAuthor() {
        return `Автор книги: ${this.author}`;
    }

    getGenre() {
        return `Жанр книги: ${this.genre}`;
    }
}

// Класс "Author" наследует "Book"
class Author extends Book {
    constructor(title, author, genre, biography, birthYear) {
        super(title, author, genre);
        this.biography = biography;
        this.birthYear = birthYear;
    }

    getBiography() {
        return `Биография автора: ${this.biography}`;
    }

    getBirthYear() {
        return `Год рождения автора: ${this.birthYear}`;
    }
}

// Класс "Genre" наследует "Author"
class Genre extends Author {
    constructor(title, author, genre, biography, birthYear, description) {
        super(title, author, genre, biography, birthYear);
        this.description = description;
    }

    getDescription() {
        return `Перечисление жанров: ${this.description}`;
    }
}

const book = new Genre(
    "Война и мир",
    "Лев Толстой",
    "Роман",
    "Лев Николаевич Толстой (1828–1910) – один из наиболее известных русских писателей и мыслителей, один из величайших писателей-романистов мира. Просветитель, публицист, религиозный мыслитель.",
    1828,
    "Автор писал в следующих жанрах: Роман, повесть, рассказ, философская проза."
);

console.log(book.getTitle());
console.log(book.getAuthor());
console.log(book.getGenre());
console.log(book.getBiography());
console.log(book.getBirthYear());
console.log(book.getDescription());


// второй набор классов
// Базовый класс "Product" с тремя функциями
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getName() {
        return `Название продукта: ${this.name}`;
    }

    getPrice() {
        return `Цена продукта: ${this.price} руб.`;
    }

    getCategory() {
        return `Категория продукта: ${this.category}`;
    }
}

// Класс "Electronics" наследует "Product"
class Electronics extends Product {
    constructor(name, price, category, brand, model) {
        super(name, price, category);
        this.brand = brand;
        this.model = model;
    }

    getBrand() {
        return `Бренд: ${this.brand}`;
    }

    getModel() {
        return `Модель: ${this.model}`;
    }
}

const product = new Electronics(
    "Смартфон",
    50000,
    "Электроника",
    "Samsung",
    "Galaxy S21"
);

console.log(product.getName());
console.log(product.getPrice());
console.log(product.getCategory());
console.log(product.getBrand());
console.log(product.getModel());
