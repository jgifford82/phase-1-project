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

    const searchSpellsForm = document.getElementById('search-spells');
    console.log(searchSpellsForm)
    searchSpellsForm.addEventListener("submit", (event) => {
        event.preventDefault()
        // console.log("prevented this too");
    });

});