const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const button = document.querySelector('button');
const closeIcon = document.querySelector('.close-icon');

popupContainer.classList.add(localStorage.getItem('class')) !== undefined && popupContainer.classList.add(localStorage.getItem('class'));

if(popupContainer.getAttribute('class') === 'popup-container popup-open'){
    button.style.display = 'none'
}

button.addEventListener('click', ()=> {
    localStorage.setItem('class','popup-open')
    popupContainer.classList.add(localStorage.getItem('class'))
    // popupContainer.classList.add('popup-open')
    button.style.display = 'none';
})

closeIcon.addEventListener('click', ()=> {
    // popupContainer.classList.remove('popup-open');
    popupContainer.classList.remove(localStorage.getItem('class'));
    localStorage.removeItem('class')
    button.style.display = 'block';
})

popupContainer.addEventListener('click', ()=> {
    // popupContainer.classList.remove('popup-open');
    popupContainer.classList.remove(localStorage.getItem('class'));
    localStorage.removeItem('class')

    button.style.display = 'block';
})

popup.addEventListener('click', (e)=> {
    e.stopPropagation();
})