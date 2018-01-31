
//Examine the Document Objects
// console.dir(document);

// console.log(document.lastModified);
// console.log(document.head);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
 //console.log(document.images);

//GETELEMENTBYID

//console.log(document.getElementById("main-header"));

//var header =document.getElementById("myh1");
//var mainheader =document.getElementById("main-header");

//header.textContent="Hello !!!"
// header.innerText="Hello !!!";
//header.innerText="<h2>welcome !!!</h2>";
// header.innerHTML="<h2>welcome !!!</h2>";

//mainheader.style.borderBottom="solid 3px #000"

//GETELEMENTSBYCLASSNAME
//var items=document.getElementsByClassName("list-group-item")
// console.log(items);
// items[1].textContent="New Item";
// items[1].style.color="red";

// for(var i=0;i<items.length;i++)
// {
// 	items[i].style.backgroundColor="yellow";
// }


//GETELEMENTBYTAGNAME


//var items=document.getElementsByTagName("li")
// console.log(items);
// items[1].textContent="New Item";
// items[1].style.color="red";
// for(var i=0;i<items.length;i++)
// {
// 	items[i].style.backgroundColor="yellow";
// }

//QUERYSELECTOR

// var header=document.querySelector("#main-header");
// header.style.borderBottom="solid 3px #333";


// var input = document.querySelector('input');
// input.value="Hello world";

// var input = document.querySelector('input[type="submit"]');
// input.value="Search";


// var list = document.querySelector('.list-group-item');
// list.style.color="Teal";
// var lastlist = document.querySelector('.list-group-item:last-child');
// lastlist.style.color="blue";


// QUERYSELECTORALL

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i =0;i< odd.length;i++) {
    odd[i].style.color="red";
}





















