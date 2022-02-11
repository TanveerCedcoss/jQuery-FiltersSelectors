var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];


//displaying array in tabular form
var table =
  "<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th><th>Remove</th></tr>";
for (i = 0; i < products.length; i++) {
  table +=
    "<tr><td>" +
    products[i].id +
    "</td><td>" +
    products[i].name +
    "</td><td>" +
    products[i].brand +
    "</td><td>" +
    products[i].os +
    "</td><td class=x>X</td></tr>";
}
table += "</table>";

//printing table
$("#content").html(table);

//hiding selected row
$(".x").click(function () {
  $(this).parent().hide();
});

$("#brand").click(function () {
  var brandd = $("#brand").val();
  console.log(brandd);
  if(brandd=='All')
    {
      $("#content").html(table);
    }
    else{
      updateTable(brandd);
    }
  
});

$("#os").click(function () {
  var oss = $("#os").val();
  console.log(oss);
  if(oss=='All')
    {
      $("#content").html(table);
    }
    else{
      updateTable(oss);
    }
});

function updateTable(brandd,oss) {
  newTable=[];
  for (var i = 0; i < products.length; i++) 
  {
    if (brandd == products[i].brand && oss==0) {
      newTable.push(products[i]);
    }
    if (oss == products[i].os && brandd==0) {
      newTable.push(products[i]);
    }
    else{
      if(brandd == products[i].brand && oss == products[i].os)
      {
        newTable.push(products[i]);
      }
    }
  }
  console.log(newTable);
  displayTable(newTable);
}

/*
function updateTable2(oss)
{
  newTable=[];
  for (var i = 0; i < products.length; i++) 
  {
    if (oss == products[i].os) {
      newTable.push(products[i]);
    }
    
  }
  console.log(newTable);
  displayTable(newTable);
}

*/




function displayTable(newTable) {
  var newTableD =
    "<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th><th>Remove</th></tr>";
  console.log(newTableD);

  
  for(i=0;i<newTable.length;i++)
  {
	newTableD +=
    "<tr><td>" +
    newTable[i].id +
    "</td><td>" +
    newTable[i].name +
    "</td><td>" +
    newTable[i].brand +
    "</td><td>" +
    newTable[i].os +
    "</td><td class='x'>X</td></tr>";
  }
  newTableD += "</table>";
  console.log(newTableD);
  $("#content").html(newTableD);
}
