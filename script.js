//have current day displayed at top of page -->

 //var newDate = moment('2020-09-02');
 //var b = newDate.clone().add(1, 'week');
 //newDate.format("2020-09-02T00:00:00-06:00");
 

 //moment('2020-09-02 13:00:00').add(1, 'day').format('LLL')
//"September 02, 2020 1:00 PM"
//var newDate = new Date(2018, 11, 24, 10, 33, 30);

//var saveButton = document.querySelector("Save");


//var newDate = new Date(2020, 08, 02, 04, 50, 30);


/*
        On load
          Needs to display current date
            Get current date
              Google get current date in JS
            Display current date
              getElementbyID.innerHTML
              */
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();

console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016


document.getElementById("Today's Date").innerHTML = (today.toLocaleDateString("en-US", options));

/*
Need hour colors to change as time passes
            Identify current hour
            Google current hour
            */
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var currentHour = today.getHours();


console.log(today.getHours());

//On load: Use addEventListener on click to function as a button


 //If it's before current hour, have this color. If it's after current hour, have this color. If it is this hour, have this color. 
//Use getElementbyID and background-color, with an IF statement to determine the color of the row


if (9 < currentHour) {
  document.getElementById("9").style.backgroundColor = "grey";
}
if (10 < currentHour) {
  document.getElementById("10").style.backgroundColor = "grey";
}
if (11 < currentHour) {
  document.getElementById("11").style.backgroundColor = "grey";
}
if (12 < currentHour) {
  document.getElementById("12").style.backgroundColor = "grey";
}
if (13 < currentHour) {
  document.getElementById("13").style.backgroundColor = "grey";
}
if (14 < currentHour) {
  document.getElementById("14").style.backgroundColor = "grey";
}
if (15 < currentHour) {
  document.getElementById("15").style.backgroundColor = "grey";
}
if (16 < currentHour) {
  document.getElementById("16").style.backgroundColor = "grey";
}
if (17 < currentHour) {
  document.getElementById("17").style.backgroundColor = "grey";
}
if (9 > currentHour) {
  document.getElementById("9").style.backgroundColor = "lavender";
}
if (10 > currentHour) {
  document.getElementById("10").style.backgroundColor = "lavender";
}
if (11 > currentHour) {
  document.getElementById("11").style.backgroundColor = "lavender";
}
if (12 > currentHour) {
  document.getElementById("12").style.backgroundColor = "lavender";
}
if (13 > currentHour) {
  document.getElementById("13").style.backgroundColor = "lavender";
}
if (14 > currentHour) {
  document.getElementById("14").style.backgroundColor = "lavender";
}
if (15 > currentHour) {
  document.getElementById("15").style.backgroundColor = "lavender";
}
if (16 > currentHour) {
  document.getElementById("16").style.backgroundColor = "lavender";
}
if (17 > currentHour) {
  document.getElementById("17").style.backgroundColor = "lavender";
}
if (currentHour > 8 && currentHour < 18 ) {
  document.getElementById(currentHour).style.backgroundColor = "lightgreen";
}
// get all the all the elements in the html where name="textarea", this will be an array

// in index.html I each text area is <textarea name="textarea">
var textAreas = document.getElementsByName("textarea");


// initalizes an empty array for us to use later
const fieldValues = [];

//the save button onclick event
var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {


  alert("Would you like to save changes?");
  

  //loop through all the text areas we found at the at the top of this script
  for (var i = 0; i < textAreas.length; i++) {
    // initalize an object with a text property and a metaData property and assign them the value from the textbox in that point of the array
    var fieldValue = {
      text: textAreas[i].value,
      metaData: textAreas[i].id,
    };

    // add the object we just made with the values we assigned to into the array we initilized earlier
    fieldValues.push(fieldValue);
  }

  // take the array and make it a json string
  var jsonString = JSON.stringify(fieldValues);

  // save the json string to local storage
  saveAs(jsonString);
});



function saveAs(json) {
  // clears local storage.
  localStorage.clear();

  // sets an item we're going to call content to the json string
  localStorage.setItem("content", json);
}

//this is the event for loading content from local storage and assigning each text area a value
window.addEventListener("load", (event) => {
  // retrieve the value of the item content from local storage
  var content = localStorage.getItem("content");

  // convert the json string back into an object array
  var localStorageValues = JSON.parse(content);

  // loop through the object array
  for (var i = 0; i < localStorageValues.length; i++) {
    //find the right text area by its id, and assign its corresponding value
    document.getElementById(localStorageValues[i].metaData).value =
      localStorageValues[i].text;
  }
});

//get text 
//Show text 
  
 //User functionality
          //Need to be able to add text to hour
            //insert a text box
          //Need save button to save edits in local storage
            
            //function to save changes in text to local storage
            //function has to read text in box
              //getElementbyID, innerHTML/innerTEXT
            //save text to file in local storage

   
        
          
           
   
        
       