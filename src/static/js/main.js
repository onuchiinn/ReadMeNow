$('.top__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});

const buttonAuth = document.querySelector('#button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');

const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');

const booksInner = document.querySelector('.books__inner');

const topButton = document.querySelector('.top__button');
const topSect = document.querySelector('.top');
const booksSect = document.querySelector('.books');


buttonAuth.addEventListener('click', (event) => modalAuth.style.display = 'flex');
closeAuth.addEventListener('click', (event) => modalAuth.style.display = 'none');

topButton.addEventListener('click', (event) => {
  booksSect.style.display = 'grid';
  topSect.style.display = 'none'
});



const getData = async function (url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url},
   статус ошибкa ${response.status}!`);
  }

  return await response.json();
};

getData('./bd/books.json').then(function (data) {
  data.forEach(createBookCard);
});


createBookCard = (books) => {

  const { 
    name,
    author,
    genre,
    stars,
    image
   } = books;

  const card = `
  <div class="card">
    <img src="${image}" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-title">${name}</div>
      <div class="card-autor">${author}</div>
      <ul class="card-more">
        <li class="card-rating">${stars}</li>
        <li class="card-genre">${genre}</li>
      </ul>
      <button class="button-add-cart">Взять почитать</button>
    </div>
  </div>
  `;

  booksInner.insertAdjacentHTML('beforeend', card);
}