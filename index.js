document.addEventListener('DOMContentLoaded', (event) => {
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
    img.addEventListener("mouseover", (event) => {
        alert("Purrrr");
    });

});

// Next:Pet your familiar
// alert should disappear after a few seconds
// add caption or p element that says "Pet your familiar"