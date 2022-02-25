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


var brandd=0;
var oss=0;

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
    "</td><td class='x'>X</td></tr>";
}
table += "</table>";

//printing table
$("#content").html(table);

//hiding selected row
$(".x").click(function () {
  $(this).parent().hide();
});


console.log(oss);
$("#brand").click(function () {
  console.log(brandd);
  console.log(typeof(brandd));
  console.log(oss);
  if( $("#brand").val()=='All')
  {
   
    brandd=0;
  }
  else{
    brandd = $("#brand").val();
  }
  console.log(brandd);
  console.log(typeof(brandd));
  updateTable(brandd);
  
});



console.log(oss);
$("#os").click(function () {
  console.log(oss);
  if($("#os").val()!='All')
  {
    oss= $("#os").val();
  }
  else{
    oss=0;
  }

  console.log(oss);
  console.log(brandd);
  updateTable(oss);
  
});



function updateTable() {
  newTable=[];
  console.log(oss,brandd);
  console.log(oss);
  for (var i = 0; i < products.length; i++) 
  {
    console.log(typeof(products[i].brand));
    if (brandd == products[i].brand && oss==0) {
      newTable.push(products[i]);
      console.log("checking brand");
    }
    if (oss == products[i].os && brandd==0) {
      newTable.push(products[i]);
      console.log("checking os");
    }
    if(brandd == products[i].brand && oss == products[i].os)
    {
        newTable.push(products[i]);
        console.log("checking all");
    }
    
  console.log(newTable);
  displayTable(newTable);
  if(brandd==0 && oss== 0)
    {
      $("#content").html(table);
      console.log("printing all");
    }
  

}
}



function displayTable(newTable) {
  var newTableD =
    "<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th><th>Remove</th></tr>";

  
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
  $("#content").html(newTableD);
}


$("button").click(function(){
  var search=$("#input").val();
  console.log(search);
  var flag=0;
  for(var i=0;i<products.length;i++)
  {
    if(search==products[i].id || search.toLowerCase()==products[i].name.toLowerCase())
    {
      var tab='<table><tr><th>ID</th><th>Name</th><th>Brand</th><th>OS</th></tr>';
      console.log(products[i]);
      tab += "<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td></tr>";
      tab += "</table>";
      flag=1;
    }
    if(flag=0){
      tab="Error!!! Product not found!!! Please enter correct ID or Name(must enter complete name!!)"
    }
  }

  $("#result").html(tab);
  console.log(search);
});
