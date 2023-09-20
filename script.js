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
    // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the `#main-title` ID element. Remember there are a couple of ways to query **id**. Change the **text** of the title to something shorter.
    const title = document.querySelector('#main-title')
    // console.log(title)
    title.textContent = 'DOM Toretto'

  // Part 2
    //Select the `body` and change the background-color to a new color of your choice.
    const body = document.querySelector('body')
    body.style.backgroundColor = '#483285'

  // Part 3
    //Select **DOM's Favorite Things** list and remove the last list item.
    const lastItem = document.querySelector('li:last-child')
    lastItem.parentElement.removeChild(lastItem)

  // Part 4
    //Select all `.special-title` class elements and change their `font-size` to `2rem`. Remember you might have to iterate through the list of elements
    const special = document.querySelectorAll('.special-title')
    // console.log(special)
    special.forEach((element) => {
      element.style.fontSize = '2rem'
    })

  // Part 5
    // Turns out DOM never raced in **Chicago**. Access the **Past Races** list and remove **Chicago**.
    const races = document.querySelector('#past-races')
    const chicago = races.querySelector('li:nth-child(4)')
    races.removeChild(chicago)
    // console.log(races)

  // Part 6
    //Let's add to DOM's **Past Races** list. Create a new `<li>` element, change the new `<li>` text to the name of a city, and append it to the **Past Races** list.
    const li = document.createElement('li')
    li.textContent = 'Marrakech'
    races.appendChild(li)
    // console.log(races)

  // Part 7
    //Create a new `.blog-post` corresponding to the new city added in **Part 6**. You will have to create a new `<div>` with class of `.blog-post`, a new `<h2>` with text, and a new `<p>` with some text. Think about what order you want to create the elements, and what order you want to append them in.
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
    //Query select the `#quote-title` ID element and add a **click** event handler. That event handler should use the function `randomQuote` whenever `#quote-title` is clicked.
    const quote = document.querySelector('#quote-title')
    quote.addEventListener('click', randomQuote)

  // Part 9
    //Select all `.blog-post` class elements. Iterate through the list of `.blog-post` class elements and apply two event handlers to each node. The first event handler should be listening for `mouseout` events while the second handler should be listening for `mouseenter` events.
      // - The `mouseout` handler should toggle the class `.purple`
      // - The `mouseenter` handler should toggle the class `.red`
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
