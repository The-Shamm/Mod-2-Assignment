//Defined JSON Payload

var companiesData = {
  companies: [
    {
      name: "Amazon",
      rank: 1,
      industry: "Technology",
      revenue: "$514 billion",
      market_cap: "1.87 trillion",
      employees: 1608000,
    },
    {
      name: "microsoft",
      rank: 2,
      industry: "Technology",
      revenue: "$227 billion",
      market_cap: "3.02 trillion",
      employees: 221000,
    },
    {
      name: "Oracle",
      rank: 3,
      industry: "Technology",
      revenue: "$52 billion",
      market_cap: "322.15 billion",
      employees: 164000,
    },
  ],
};

// let jsonString = JSON.stringify(companiesData);
// console.log(jsonString);


const table = document.getElementById("companyTable")


// loop through all of the items in the JSON and extrtact the data and put it into an html table


// Loop the companies array
for (let i = 0; i < companiesData.companies.length; i++) {
    const row = document.createElement("tr");

// Create and append cells for each property
    const cell1 = document.createElement("td");
    cell1.textContent = companiesData.companies[i].rank;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.textContent = companiesData.companies[i].name;
    row.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.textContent = companiesData.companies[i].industry;
    row.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.textContent = companiesData.companies[i].revenue;
    row.appendChild(cell4);

    const cell5 = document.createElement("td");
    cell5.textContent = "$" + companiesData.companies[i].market_cap;
    row.appendChild(cell5);

    const cell6 = document.createElement("td");
    cell6.textContent = companiesData.companies[i].employees;
    row.appendChild(cell6);

// Append the row to the table body
    const table = document.getElementById("companyTable");
    table.querySelector("tbody").appendChild(row);

  
}





