let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
    const title = document.querySelector('#main-title')
    // console.log(title)
    title.textContent = 'DOM Toretto'

  // Part 2
    const body = document.querySelector('body')
    body.style.backgroundColor = '#483285'

  // Part 3
    const lastItem = document.querySelector('li:last-child')
    lastItem.parentElement.removeChild(lastItem)

  // Part 4
    const special = document.querySelectorAll('.special-title')
    // console.log(special)
    special.forEach((element) => {
      element.style.fontSize = '2rem'
    })

  // Part 5
    const races = document.querySelector('#past-races')
    const chicago = races.querySelector('li:nth-child(4)')
    races.removeChild(chicago)
    // console.log(races)

  // Part 6
    const li = document.createElement('li')
    li.textContent = 'Marrakech'
    races.appendChild(li)
    // console.log(races)

  // Part 7
    const mainDiv = document.querySelector('.main')
    const div = document.createElement('div')
    div.setAttribute('class', 'blog-post')
    mainDiv.appendChild(div)

    const h1 = document.createElement('h1')
    h1.textContent = li.textContent
    div.appendChild(h1)

    const p = document.createElement('p')
    p.textContent = 'I WENT SHOPPING'
    div.appendChild(p)

  // Part 8
    const quote = document.querySelector('#quote-title')
    quote.addEventListener('click', randomQuote)

  // Part 9
    const blog = document.querySelectorAll('.blog-post')
    // console.log(blog[0])
    
    blog.forEach((element) => {
      element.addEventListener('mouseout', function(evt) {
        element.classList.toggle('purple')
      }) 
      element.addEventListener('mouseenter', function(evt) {
        element.classList.toggle('red')
      }) 
      })


});
