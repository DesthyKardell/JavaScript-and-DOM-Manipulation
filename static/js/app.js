// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Use d3 to append one table row `tr` for each Sightings Report object
// Each row will be blank
// data.forEach(function(sightingsReport) {
//     console.log(sightingsReport);
//     var row = tbody.append("tr");
  
//     Object.entries(sightingsReport).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//     });
//   });

// Populating the table by looping through the data using the arrow Function
tableData.forEach((sightingsReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the "Filter Table" Button
var button = d3.select("#filter-btn");

// Capturing the Click on the button Event by whoever visits the page
button.on("click", function() {
    
    // After the button is licked,
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element using # because it is id
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Clearing the sightings data from the table
    tbody.html(""); 

    // Use the InputValue to filter the table
    var filteredData = tableData.filter(datasightings => datasightings.datetime === inputValue);

    // Update the table to only display relevant sightings based on inputValue
    filteredData.forEach((sightingsReport) => {
        var row = tbody.append("tr");
        Object.entries(sightingsReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  });
  