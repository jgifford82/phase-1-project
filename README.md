# Magic Portal

## What is it?
- **Magical and fun!**
- Users can use this application to search for spells using a submit form. The returned data will be a list of spell names and descriptions. The spell names are also clickable links that which lead to more spell details.

- Users can submit their name in a form, which will display a personalized greeting.

- Users can hover their mouse over a cat image to "pet their familiar." An alert will pop up saying "Purrrr."

- Users can click a button to cast a fire spell, which will summon an image of fire for 2 seconds.


## Free API used: https://www.dnd5eapi.co/api/spells/
- When users search for a spell, a fetch request pulls data from the API, then displays spell names, descriptions, and spell names are also clickable links that which lead to more spell details. 

## Project requirements met:
1. Uses a free API, no key necessary
2. Runs on a single page
3. At least 3 unique event listeners: 
    - **DOMContentLoaded:** All code is built within the DOM content loaded event listener to ensure everything happens after DOM content is loaded.
    - **submit:** There are 2 submit forms; one for users to submit their name, which displays a personalized greeting, and another one where they can search for spells, which returns spell names and descriptions.
    - **mouseover:** An alert pops up on cat image mouseover. 
    - **click:** When the "fire" button is clicked, an image of fire displays for 2 seconds.
4. Array iteration to manipulate API data: 
    - forEach is used to display the fetched data on the webpage by creating, appending, and adding innerHTML to elements.
5. DRY code; no repetitive or redundant code.

## Image Resource (free): https://www.pexels.com/
- Cat image by [Helena Lopes](https://www.pexels.com/photo/close-up-photography-of-black-cat-1931371/) 
- Fire image by [Pixabay](https://www.pexels.com/photo/fire-wallpaper-207353/)
- Galaxy background image by [Frank Cone](https://www.pexels.com/photo/blue-and-white-milky-way-3214110/)