const nameEl = document.querySelector('#name')
const cardNoEl = document.querySelector('#number')
const monthEl = document.querySelector('#month')
const yearEl = document.querySelector('#year')
const cvcEl = document.querySelector('#cvc')
const formEl = document.querySelector('.right')
const errorMonth = document.querySelectorAll('.error')

formEl.addEventListener('submit', function(e){
    e.preventDefault()

    errorMonth.forEach(function(eachError){
        console.log(eachError);

        if(nameEl.value.length === 0){
            nameEl.style.border = 'solid 2px var(--var-red-color)'
            if(eachError.id === 'name-error'){
                eachError.classList.add('show')
            }
        }
        else if(nameEl.value.match(/^\d+$/)){
            nameEl.style.border = 'solid 2px var(--var-red-color)'
            
            if(eachError.id === 'name-error'){
                eachError.textContent = 'Input letters only'
                eachError.classList.add('show')
            }
        }
        else{
            nameEl.style.border = '2px solid var(--var-light-gray-violet)'
            eachError.classList.remove('show')
        }
        if(cardNoEl.value.length === 0){
            cardNoEl.style.border = 'solid 2px var(--var-red-color)'
            if(eachError.id === 'number-error'){
                eachError.classList.add('show')
             }
        }
        else{
            cardNoEl.style.border = '2px solid var(--var-light-gray-violet)'
            eachError.classList.remove('show')
        }
        if(monthEl.value.length === 0){
            monthEl.style.border = 'solid 2px var(--var-red-color)'
            if(eachError.id === 'month-error'){
                eachError.classList.add('show')
             }
        }
        else{
            monthEl.style.border = '2px solid var(--var-light-gray-violet)'
            eachError.classList.remove('show')
        }
        if(yearEl.value.length === 0){
            yearEl.style.border = 'solid 2px var(--var-red-color)'
            if(eachError.id === 'month-error'){
                eachError.classList.add('show')
             }
        }
        else{
            yearEl.style.border = '2px solid var(--var-light-gray-violet)'
            eachError.classList.remove('show')
        }
        if(cvcEl.value.length === 0){
            cvcEl.style.border = 'solid 2px var(--var-red-color)'
            if(eachError.id === 'cvc-error'){
                eachError.classList.add('show')
             }
        }
        else{
            cvcEl.style.border = '2px solid var(--var-light-gray-violet)'
            eachError.classList.remove('show')
        }
    })
})

nameEl.addEventListener('keydown', function(){
    setInterval(function(){
        let nameValue = nameEl.value 
        const nameCard =  document.querySelector('#card-name')   
        if(nameValue != ''){
            nameCard.textContent = nameValue
        }
        else{
            nameCard.textContent = 'Your Name Here'
        }
    },2000)
})

cardNoEl.addEventListener('keydown', function(){
    setInterval(function(){
        let cardValue = cardNoEl.value 
        const cardNo = document.querySelector('#card-no')
        const cardNoBack = document.querySelector('#card-no-back') 
        if(cardValue != ''){
            cardNo.textContent = cardValue
            cardNoBack.textContent = cardValue
        }
        else{
            cardNo.textContent = '0000 0000 0000 0000'
            cardNoBack.textContent = '0000 0000 0000 0000'
        }
    },2000)
})

monthEl.addEventListener('keydown', function(){
    setInterval(function(){
        let monthValue = monthEl.value
        const cardMonth = document.querySelector('#card-month') 
        if(monthValue != ''){
            cardMonth.textContent = monthValue
        }
        else{
            cardMonth.textContent = '00'
        }
    },2000)
})

yearEl.addEventListener('keydown', function(){
    setInterval(function(){
        let yearValue = yearEl.value
        const cardYear = document.querySelector('#card-year') 
        if(yearValue != ''){
            cardYear.textContent = yearValue
        }
        else{
            cardYear.textContent = '00'
        }
    },2000)
})

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
  };