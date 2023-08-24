//box to inner 
const newCardBtn = document.getElementById('newCard')
const  grabBox = document.querySelector('.grabeBox')
const cardNumber = document.getElementById('cardNumber')
const validDate = document.getElementById('validDate')
const names = document.getElementById('name')
const ribPlace = document.querySelector('.ribPlace')

//box to add Event 
const CardGrab = document.getElementById('CardGrab')
const cardDate = document.getElementById('cardDate')
const ownerName = document.getElementById('ownerName')




//flip effect 

const forVerso = document.querySelector('.forVerso')
const title = document.querySelector('.card .title')
const imgPuce = document.querySelector('.card .imgRecto')
const date = document.querySelector('.card .date')
const ribBox = document.getElementById('ribBox')
const card = document.querySelector('.card')


CardGrab.addEventListener('focus', ()=>{
    title.classList.remove('active')
    imgPuce.classList.remove('active')
    date.classList.remove('active')
    forVerso.classList.remove('active')
    card.classList.remove('active')
    names.classList.remove('active')
    validDate.classList.remove('active')
    cardNumber.classList.remove('active')

})

ownerName.addEventListener('focus', ()=>{
    title.classList.remove('active')
    imgPuce.classList.remove('active')
    date.classList.remove('active')
    forVerso.classList.remove('active')
    card.classList.remove('active')
    names.classList.remove('active')
    validDate.classList.remove('active')
    cardNumber.classList.remove('active')

})

cardDate.addEventListener('focus', ()=>{
    title.classList.remove('active')
    imgPuce.classList.remove('active')
    date.classList.remove('active')
    forVerso.classList.remove('active')
    card.classList.remove('active')
    names.classList.remove('active')
    validDate.classList.remove('active')
    cardNumber.classList.remove('active')

})


ribBox.addEventListener('focus', ()=>{
    title.classList.add('active')
    imgPuce.classList.add('active')
    date.classList.add('active')
    forVerso.classList.add('active')
    card.classList.add('active')
    names.classList.add('active')
    validDate.classList.add('active')
    cardNumber.classList.add('active')

})

ribBox.addEventListener('input', ()=>{
    ribPlace.innerText = ribBox.value
})




newCardBtn.addEventListener('click', ()=>{
    grabBox.classList.add('active')
})

CardGrab.addEventListener('input', ()=>{
    const chaine =  CardGrab.value 
    const part1 = chaine.slice(0, 4);
    const part2 = chaine.slice(4, 8);
    const part3 = chaine.slice(8, 12);
    const part4 = chaine.slice(12, 16);
    cardNumber.innerText = part1 + " " + part2 + " " + part3 + " " + part4 

})

cardDate.addEventListener('input', ()=>{
    const dateInput = cardDate.value;
    const selectedDate = new Date(dateInput);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;

    validDate.innerText = `${day}/${month}`;

})

ownerName.addEventListener('input', ()=>{
    names.innerText = ownerName.value
})
