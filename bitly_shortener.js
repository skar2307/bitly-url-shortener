/*
This is the JS file that is responsible for actually shortening the link and presenting it back to the 
user.  
*/

__author__ = 'Shivam Karavadra'
__date__ = 'June 21st, 2021'
__projectName__ = 'ICS4U URL Shortener Web App'
__version__ = 1.1

const endpoint = 'https://api-ssl.bitly.com/v4/shorten';

const userInput = document.getElementById('inputUrl');
const submitForm = document.getElementById("submitter");
const output = document.getElementById('output');
/*
endpoint, user input field and submit form declared here to make dealing with them in the program
easier
*/

const shortenLink = async () => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer 636dad3710fbfed9cce415e2fbb2a68ba4b0988c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'long_url': userInput.value
      })
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      output.innerHTML = `Your shortened link is <a href=${jsonResponse.link}>${jsonResponse.link}</a>`;
      localStorage.setItem(userInput.value, JSON.stringify([jsonResponse.link, new Date().toISOString().slice(0, 10)]));
    }
  }
  catch(error){
    console.log(error);
    output.innerHTML = "An error has occurred. Please try again later."
  }
  submitForm.reset();
  if (output.style.opacity = 1) {
    output.style.opacity = 0;
  }
  output.style.opacity = 1;
}
/* 
Fairly standard async/await HTTP request. A POST request is made to the endpoint, passing in the long
user inputted URL, the API token and the content type. The body has to be converted to a JSON string
in order for the API to properly read it. If the ok property of response is equal to true, the function
will then output the link to the HTML document and save it in localStorage to be used by track_links.js. 
Since it uses a try statement, it is also able to catch errors. The website displays an error message 
but the actual error message is displayed in the browser's console. The input field is then reset.
*/

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    shortenLink();
});
/* 
Using an onClick HTML button listener was causing problems since the script has to be declared after 
the rest of the form in order for it to run correctly. Therefore, an event listener is needed. It waits
for the user to submit the form (click the submit button) in order to run the shortenLink function. The
event.preventDefault() is there in order to prevent the page from being refreshed.
*/
