// import functions and grab DOM elements
// on form submit
// get the info from the form
// make an API request to /api/v1/users with the info

import { redirectIfLoggedIn, signUpUser, signInUser } from './fetch-utils.js';

// let state
const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

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

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const data = await signInUser({
        email: formData.get('email'),
        password: formData.get('password'),
      
    });
    console.log(data);
});
  // update DOM to reflect the new state

// if user is logged in -- redirect to /tasks page
// else stay here

redirectIfLoggedIn();
