let text;
let list;
let card;
let row;

function displayNames(){
    list = document.getElementById("petList");
    text="";//clear the variable
    //use a for loop to travel the array
    for(let i=0; i<petSalon.pets.length; i++){
        text+=`<li>${petSalon.pets[i].name}</li>`;
    }
    list.innerHTML = text;
}

function displayCards(){
    const petsDiv = document.getElementById('pets');
    card = "";
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
            <p>${pet.type}</p>
            </div>
            `;
    }
    petsDiv.innerHTML=card;
}

function displayRows(){
    const TABLE = document.getElementById('petTable');
    row = "";
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        row+=`
        <tr id="${i}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}<td>
            <td>${pet.breed}<td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td><button class="btn btn-danger" onclick="deletePet(${i});">🚫</button></td>
        </tr>    
            `
    }
    TABLE.innerHTML=row;
}

function displayTotalAmountPets(){
    document.getElementById('totalPets').innerHTML= petSalon.pets.length;

}


function displayServiceCount(){
    let grooming = 0;
    let vaccine = 0;
    let hotel = 0;
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.service.toLowerCase() == "grooming"){
            grooming++;
            document.getElementById("totalGrooming").innerHTML=grooming;
        }else if(pet.service.toLowerCase() == "vaccine"){
            vaccine++;
            document.getElementById("totalVaccine").innerHTML=vaccine;
        }else{
            hotel++;
            document.getElementById("totalHotel").innerHTML=hotel;
        }
    }
}