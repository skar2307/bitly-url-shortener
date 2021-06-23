/*
This is the JS file that is responsible for tracking the links that the user creates and presenting
it in an easy-to-read table. 
*/

__author__ = 'Shivam Karavadra'
__date__ = 'June 21st, 2021'
__projectName__ = 'ICS4U URL Shortener Web App'
__version__ = 1.1

mainTable = document.getElementById("dataTable");
/* 
declaring the table element in track_links.html as a variable here makes it easier to handle 
later in the code.
*/

function newRow(longLink, shortLink, date) {
    var row = mainTable.insertRow();

    var longLinkCell = row.insertCell(0);
    var shortLinkCell = row.insertCell(1);
    var currentDateCell = row.insertCell(2);

    longLinkCell.innerHTML = `<a href=${longLink}>${longLink}</a>`;
    shortLinkCell.innerHTML = `<a href=${shortLink}>${shortLink}</a>`
    currentDateCell.innerHTML = date;           
}
/* 
Even though the function was only called once, declaring it here makes creating the loop below easier.
It creates a new row in the table with three cells and then adds the links and the current date that's 
passed in.
*/

for (var i = 0; i < localStorage.length; i++) {
    var storageKey = localStorage.key(i);
    var storageValueArray = JSON.parse(localStorage.getItem(storageKey));
    newRow(storageKey, storageValueArray[0], storageValueArray[1]);
}
/*
 it was very confusing trying to implement updating the table in real-time since the JS doesn't
 run unless the HTML page is open. Therefore, I had to implement a loop to create the table every single
 time the page loaded. It updates every time the user refreshes the page, pulling the data from 
 the browser's localStorage. The array associated with the keys are in JSON string form, hence why 
 JSON.parse is used to convert them back into a standard array, we can then get the short url and the 
 link creation date, which are index 0 and 1 of the array, respectively. 
*/