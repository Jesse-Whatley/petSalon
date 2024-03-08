let petSalon = {
    name:"",
    phone:""
    address:{
        country:
        city:
        zip:
    }

    pets:[
        {
            name:"Mesha",
            age: "1",
            gender:"female"
        },
        {
            name:"jasmine",
            age: "15",
            gender:"female"
        },
        {
            name:"freddy",
            age: "5",
            gender:"male"
        },
        {
            name:"shrimp fried rice",
            age: "2",
            gender:"male"
        }
    ]
}

function displayPetCount(){
    //hint: length
}

function displayNames(){
    //use for loop to travel the array
    for(let i=0; i<petSalon.pets.length; i++){
        document.getElementById("petList").innerHTML+=`<li>${petSalon.pets[i].name}</li>`;
    }
}
displayNames();

function calculateAverage() {
    let total= 0;
    for(let i=0; i<petSalon.pets.length; i++){
        total = total + petSalon.pets[i].age;
    }
    document.getElementById("average").innerHTML+=`<p>${total}</p>`;
}
