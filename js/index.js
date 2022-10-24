const donateClick = document.querySelector('.donate-click'),
    aboutClick = document.querySelector('.about-click'),
    backstage = document.querySelector('.backstage'),
    slider = document.querySelector('.slider'),
    friend = document.querySelector('.friend'),
    reviews = document.querySelector('.reviews'),
    donateSection = document.querySelector('.donate');

donateClick.addEventListener('click',  show);
aboutClick.addEventListener('click', show);


function show() {
    donateSection.classList.toggle('show');
    backstage.classList.toggle('backstage');
    backstage.classList.toggle('hide');
    slider.classList.toggle('hide');
    friend.classList.toggle('hide');
    reviews.classList.toggle('hide');
}

