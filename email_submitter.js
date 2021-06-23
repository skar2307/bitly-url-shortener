/*
This is the JS file that is responsible for taking the input of the contact form of the website and 
using it to send an email to my personal email using SMTPJS.  
*/

__author__ = 'Shivam Karavadra'
__date__ = 'June 21st, 2021'
__projectName__ = 'ICS4U URL Shortener Web App'
__version__ = 1.1

const emailSender = document.getElementById("emailSender");
const userEmail = document.getElementById('userEmail');
const emailSubject = document.getElementById('subject');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname')
const emailBody = document.getElementById('body')
// variables declared here to make the sendEmail function a little bit easier to follow

function sendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "technokingftw@gmail.com",
    Password : "scpdoodlxcsbgtvl",
    To : 'skaravadra23@gmail.com',
    From : userEmail.value,
    Subject : emailSubject.value,
    Body : 
            `${fname.value} ${lname.value} has sent the following message:
            <br>
            <br>
            ${emailBody.value}`
}).then(
  message => alert("Thank you! The email has been sent successfully! We will get back to you as soon as possible!")
);
}
/*
This function uses the SMTPJS library to send an email to my personal email using the information from
the contact form. the SMTPJS library doesn't need to be imported to this file because there is a script
tag in contact_me.html that imports it there. A browser alert is then sent when the email has been sent. 
*/

emailSender.addEventListener("submit", (event) => {
    event.preventDefault();
    sendEmail();
    emailSender.reset();
});
/*
Event listener that prevents the page from refreshing and then invokes the sendEmail function. 
It then clears the form in case the user wants to send another message. 
*/
