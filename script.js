const image = document.querySelector('.icon-star')
const img = document.querySelector('.img')
const selected = document.querySelector('.hidden')
const thank = document.querySelector('#thanks')
const message = document.querySelector('.message')
const section = document.getElementById('section')
const rating = document.querySelectorAll('#rating li')
const rates = document.getElementById('rating')
const btn = document.querySelector('.btn')

rating.forEach(rate => {
    rate.addEventListener('click', () => {
        for(i = 0; i < rating.length; i++){
            if(rating[i].classList.contains('active')){
                rating[i].classList.remove('active') 
            }
        }
        rate.classList.add('active')
        selected.innerHTML = `You selected ${rate.textContent} out of 5`
        selected.classList.add('hid')
        return rate;
        
    })
})

const popUp = (rate) => {
    selected.classList.remove('hid')
    image.src = 'images/illustration-thank-you.svg'
    selected.style.padding = '10px'
    selected.style.textAlign = 'center'
    selected.style.color = 'hsl(25, 97%, 53%)'
    selected.style.marginTop = '7rem'
    selected.style.borderRadius = '30px'
    selected.style.backgroundColor = 'hsl(220, 11%, 22%)'
    thank.innerHTML = 'Thank you!'
    section.style.textAlign = 'center'
    message.innerHTML = "We appreciate you taking the time to give a rating, if you ever need more support, don't hestitate to get in touch"
    btn.classList.add('hid')
    rates.style.display = 'none'
}

btn.addEventListener('click', () =>{
    if(rating.textContent = `${i}`){
        popUp()
    }
})
