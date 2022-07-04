document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded");
    
    const form = document.querySelector('form');
    // console.log(form)
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("prevented")
    })
});

// Next: create new element on form Submit, append to the DOM, and change text content to value of form input.
// Also clear form on submit. 