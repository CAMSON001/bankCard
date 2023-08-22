//box to inner 
const newCardBtn = document.getElementById('newCard')
const  grabBox = document.querySelector('.grabeBox')
const cardNumber = document.getElementById('cardNumber')
const validDate = document.getElementById('validDate')
const names = document.getElementById('name')

//box to add Event 
const CardGrab = document.getElementById('CardGrab')
const cardDate = document.getElementById('cardDate')
const ownerName = document.getElementById('ownerName')
const ribBox = document.getElementById('ribBox')




newCardBtn.addEventListener('click', ()=>{
    grabBox.classList.add('active')
})

CardGrab.addEventListener('input', ()=>{
    cardNumber.innerText = CardGrab.value
})

cardDate.addEventListener('input', ()=>{
    const dateJ = cardDate.getDay
    const dateM = cardDate.getMonth
    validDate.innerText = `${dateJ}/${dateM}`
})

ownerName.addEventListener('input', ()=>{
    names.innerText = ownerName.value
})
