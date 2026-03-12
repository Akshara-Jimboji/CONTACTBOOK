let contacts=[];

function addContact(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;

if(name=="" || phone==""){
alert("Enter details");
return;
}

contacts.push({name,phone});

displayContacts();
}

function displayContacts(){

let list=document.getElementById("contactList");
list.innerHTML="";

contacts.forEach((c,index)=>{

list.innerHTML+=`
<div class="card">
<h3>👤 ${c.name}</h3>
<p>📞 ${c.phone}</p>
<button class="delete" onclick="deleteContact(${index})">Delete</button>
</div>
`;

});

document.getElementById("count").innerText =
"Total Contacts: "+contacts.length;

}

function deleteContact(i){

contacts.splice(i,1);

displayContacts();

}

function clearContacts(){

contacts=[];
displayContacts();

}

function searchContact(){

let input=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(input) ? "block":"none";

});

}