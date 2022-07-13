document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
    
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

    // This fetches data from the url based on the Search Spells input value and logs it in the console.
    function fetchSpells() {
        return fetch(`https://www.dnd5eapi.co/api/spells/?name=${document.getElementById("search-spells-form").value}`, {
            method: 'GET'
            })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    // When submit button is clicked in the Search Spells section, this is preventing the default page refresh, calls the fetchSpells function, and clears the form. 
    const searchSpellsForm = document.getElementById('search-spells');
    // console.log(searchSpellsForm)
    searchSpellsForm.addEventListener("submit", (event) => {
        event.preventDefault()
        // console.log("prevented this too");
        fetchSpells();
        document.getElementById("search-spells-form").value = "";
    });

});