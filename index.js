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
        const userName = document.getElementById("name").value
        p.innerText = `Greetings, ${userName}!`

        document.getElementById("name").value = ""
    })

});

// Next:Pet your familiar
// add div with id="failiar"
// Need to find a cat image and link it
// put familiar image of a cat (or gif?)
// https://images.pexels.com/photos/1931371/pexels-photo-1931371.jpeg?cs=srgb&dl=pexels-helena-lopes-1931371.jpg&fm=jpg
// set up event listener for mouse over event
// display alert "purr" on mouse over
// alert should disappear after a few seconds