import _ from 'lodash';

  function navBar(){
    let content = document.getElementById('content');
  
    let header = document.createElement('header');
    header.classList.add('l-header');
    let navMenu = document.createElement('nav');
    navMenu.classList.add('nav__menu');
    let ulList = document.createElement('ul');
    ulList.classList.add('nav__list');
    let liList = document.createElement('li');
    liList.classList.add('nav__item');
    
    liList.innerHTML = '<a href="#" class="nav__logo">My Restaurant</a>' + 
    '<li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>' +
    '<li class="nav__item"><a href="#about" class="nav__link">About</a></li>' +
    '<li class="nav__item"><a href="#services" class="nav__link">Services</a></li>' +
    '<li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>' +
    '<li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>';
    return liList;
    
  }  
  document.body.appendChild(navBar());
    
  function home(){
    let content = document.getElementById('content');
  
    let section = document.createElement('section');
    section.classList.add('home');
    let div1 = document.createElement('div');
    div1.classList.add('home__container bd-container bd-grid');
    let div2 = document.createElement('div');
    div2.classList.add('home__data');
    let h1 = document.createElement('h1');
    h1.classList.add('home__title');
    h1.innerHTML = 'Tasty food';
    let h2 = document.createElement('h2');
    h2.classList.add('home__subtitle');
    h2.innerHTML = 'Try the best food of <br> the week.';
    div2.innerHTML = '<img src="./Assets/img/home.png" alt="" class="home__img">'
    
    return;
  }    
  document.body.appendChild(home());

  function about(){
    let content = document.getElementById('content');
  
    let section = document.createElement('section');
    section.classList.add('about section bd-container');
    let div = document.createElement('div');
    div.classList.add('about__data');
    let span = document.createElement('span');
    span.classList.add('section-subtitle about__initial');
    span.innerHTML = 'About us';
    let h2 = document.createElement('h1');
    h2.classList.add('section-title about__initial');
    h2.innerHTML = 'We cook the best <br> tasty food';
    let p = document.createElement('p');
    p.classList.add('about__description');
    p.innerHTML = 'We cook the best food in the entire city with excellent customer service the best meals and at the best price visit us.';
    div.innerHTML = '<img src="./Assets/img/home.png" alt="" class="home__img">'
    
    return;
  }    
  document.body.appendChild(about());