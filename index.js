// First event listener is DOMContentLoaded. This allows fast HTML rendering and asynchronous JavaScript. All code is built within the DOM content loaded event listener to ensure everything happens after the DOM content is loaded.
document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM fully loaded");
    
    const form = document.querySelector('form');
    // console.log(form)
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("prevented");

        const p = document.createElement("p");
        // console.log(p);
        document.getElementById("form").append(p);
        // console.log(document.getElementById("name").value)
        const userName = document.getElementById("name").value;
        p.innerText = `Greetings, ${userName}!`;

        document.getElementById("name").value = "";
    });

    const img = document.querySelector('img');
    // console.log(img)
    img.addEventListener("mouseover", () => {
        alert("Purrrr");
    });

    const fireBtn = document.getElementById('fire');
    const fireImg = document.getElementById('fire-image')
    // console.log(fire);
    // console.log(fireImg);
    fireBtn.addEventListener('click', () => {
        // console.log('fired');
        fireImg.removeAttribute("hidden");
        setTimeout( () => {
            fireImg.setAttribute("hidden", true);
        }, 2000)
    });

    // // This console logs an array for each fetch result within the nested array data.results.
    function fetchSpells() {
        return fetch(`https://www.dnd5eapi.co/api/spells/?name=${document.getElementById("search-spells-form").value}`)
          .then(response => response.json())
          .then(data => data.results.forEach((element) => {
            console.log(element)
            let obj = element

            const spellsDiv = document.getElementById('spells-container')
            // console.log(spellsDiv)

            const ul = document.getElementById('spell-name')
            // console.log(ul)
            
            const h3 = document.createElement('h3')
            h3.innerHTML = obj.name

            const p = document.createElement('p')

            const a = document.createElement('a')
            // a.innerHTML = `https://www.dnd5eapi.co${obj.url}`
            a.href = `https://www.dnd5eapi.co${obj.url}`

            spellsDiv.append(ul)
            ul.append(h3)
            ul.append(a)
            ul.append(p)
            a.append(h3)  

            fetch(`https://www.dnd5eapi.co${obj.url}`)
            .then(response => response.json())
            // .then(data => console.log("more data", data.desc, data.material))
            .then(data => {
                console.log(element)
                p.innerHTML = data.desc
            })
        }))
        .catch((error) => {
            console.error('Could not retrieve spells', error);
        });
      }

    // When submit button is clicked in the Search Spells section, this is preventing the default page refresh, calls the fetchSpells function, and clears the form. 
    const searchSpellsForm = document.getElementById('search-spells');
    // console.log(searchSpellsForm)
    searchSpellsForm.addEventListener("submit", (event) => {
        event.preventDefault()
        // console.log("prevented this too");
        
        fetchSpells();

        document.getElementById("search-spells-form").value = "";
        
        const ul = document.getElementById('spell-name');
        ul.innerHTML = "";
    });

});