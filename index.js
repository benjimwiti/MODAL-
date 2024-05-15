let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
quote: 'A rose by any other name would smell as sweet.',
person: 'William Shakespeare'
    },
    {
quote: 'Ask not what your country can do for you; ask what you can do for your country.',
person: 'John Kennedy'
    },
    {
quote: 'Ask, and it shall be given you; seek, and you shall find.',
person: 'The Bible'
    },
    {
quote: 'The truth will set you free.',
person: 'The Bible'
    },
    {
quote: 'The only thing we have to fear is fear itself.',
person: 'Franklin D. Roosevelt'
    }
]

btn.addEventListener('click' , function() {
    let rnq = Math.floor(Math.random()*quotes.length)
    quote.textContent = quotes[rnq].quote
    person.textContent = quotes[rnq].person  
})
    