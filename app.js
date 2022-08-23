// import functions and grab DOM elements
// on form submit
// get the info from the form
// make an API request to /api/v1/users with the info

import { signUpUser } from './fetch-utils.js';

// let state
const signUpForm = document.getElementById('sign-up');

// set event listeners 
  // get user input
  // use user input to update state 
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const data = await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
        
    });
    console.log(data);
});
  // update DOM to reflect the new state

// if user is logged in -- redirect to /tasks page
// else stay here

