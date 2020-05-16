'use strict'

$('.top__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});


const buttonAuth = document.querySelector('#button-auth');
const buttonOut = document.querySelector('#button-out');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const booksInner = document.querySelector('.books__inner');
const topButton = document.querySelector('.top__button');
const topSect = document.querySelector('.top');
const booksSect = document.querySelector('.books');
const profileName = document.querySelector('#profile-name');
const loginName = document.querySelector('#login');
const password = document.querySelector('#password');
const goodBooks = document.querySelector('#good-books');

let login = localStorage.getItem('books');

const showBooks = () => {
  booksSect.style.display = 'grid';
  topSect.style.display = 'none'
}

const checkAuth = () => {
  if (login) {
    autorized();
    console.log('ok2');
  } else {
    notAutorized();
  }
};

const autorized = () => {
  console.log('авторизован');
  profileName.textContent = login;
  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'flex';
  const logOut = (event) => {
    login = null;
    localStorage.removeItem('books');
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    profileName.textContent = login;
    logInForm.reset();
    checkAuth();
  }

  buttonOut.addEventListener('click', logOut);
}

const notAutorized = () => {
  console.log('Не авторизован');

  const logIn = (event) => {
    event.preventDefault();
    if (loginName.value == '' || password.value == '') {
      loginName.placeholder = "Введите логин!";
      password.placeholder = "Введите пароль!"
    }
    else {
      login = loginName.value;
      localStorage.setItem('books', login);
      modalAuth.style.display = 'none';
      buttonAuth.style.display = 'none';
      buttonOut.style.display = 'flex';
      logInForm.reset();
      checkAuth();
      console.log('ok1');
    }
  }

  logInForm.addEventListener('submit', logIn)
}

const getData = async function (url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url},
   статус ошибкa ${response.status}!`);
  }
  return await response.json();
};

const createBookCard = (books) => {

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
};


buttonAuth.addEventListener('click', (event) => modalAuth.style.display = 'flex');
closeAuth.addEventListener('click', (event) => modalAuth.style.display = 'none');

topButton.addEventListener('click', (event) => showBooks());
goodBooks.addEventListener('click', (event) => showBooks());


getData('./bd/books.json').then(function (data) {
  data.forEach(createBookCard);
});

checkAuth();