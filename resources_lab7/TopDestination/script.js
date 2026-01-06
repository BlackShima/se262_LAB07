// 3.2.1 Destination Data [1 point]
const destinations = [
    {
        name: "Bangkok",
        description: "The bustling capital city of Thailand."
    },
    {
        name: "Chiang Mai",
        description: "A cultural and historic hub in the north."
    },
    {
        name: "Phuket",
        description: "Famous for its stunning beaches and vibrant nightlife."
    },
    {
        name: "Krabi",
        description: "Known for its stunning limestone cliffs and clear waters."
    },
    {

        name: "Pattaya",
        description: "A popular coastal city with exciting attractions."
    }
];

// Select the container div
const container = document.querySelector("#destination-container");


// 3.2.2 Create the table elements such the table headers [1 point]
const table = document.createElement("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
// 3.2.4 To style the table applying class "styled-table" [1 point]

table.classList.add("styled-table");

// 3.2.2 Add header text elements to header columns [2 points]
const headers = ["No.", "Destination", "Description"];

headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);


// 3.2.3 Create the table body [4 points]
    // Create table body elements and row elements [1 point]
    const tbody = document.createElement("tbody");

    // Create the index cell [1 point]
    destinations.forEach((destination, index) => {
    const row = document.createElement("tr");

    const indexCell = document.createElement("td");
    indexCell.textContent = index + 1;
    row.appendChild(indexCell);

    // Create the destination name cell [1 point]
    const nameCell = document.createElement("td");
    nameCell.textContent = destination.name;
    row.appendChild(nameCell);

    // Create the description cell [1 point]
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = destination.description;
    row.appendChild(descriptionCell);
    

   tbody.appendChild(row);
});
table.appendChild(tbody);

// Append the table to the container
container.appendChild(table);
