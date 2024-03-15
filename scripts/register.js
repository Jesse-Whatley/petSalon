let petSalon = {
    name:"The pet Salon",
    phone:"999-999-9999",
    address:{
        country:"United States",
        city:"LaBelle",
        zip: 12345
    },

    pets:[]
}
let inputName;
let inputAge;
let inputGender;
let inputBreed;
let inputService;
let inputType;

function displayPetCount(){
    //hint: length
}

//creating the constructor
function Pet(name, age, gender, breed, service, type){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

function calculateAverage() {
    let total= 0;
    for(let i=0; i<petSalon.pets.length; i++){
        total = total + petSalon.pets[i].age;
    }
    document.getElementById("average").innerHTML+=`<p>${total}</p>`;
}

function register(){
    //get the values from the HTML
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    //create the object using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value);
    //push the object to the array'

    //display the array on the console
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        //displayNames();
        //displayCards();
        displayRows();
        clearForm();
        displayTotalAmountPets();
        displayServiceCount();
        showNotification("something registered", "alert-success");
    }
}

function isValid(pet){
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    if(!pet.name || !pet.service){
        if(!pet.name) inputName.classList.add("alert-error");
        if(!pet.service) inputService.classList.add("alert-error");
        return false;
    }
    return true;
}

function clearForm(){
    inputName.value=""; 
    inputAge.value=""; 
    inputGender.value=""; 
    inputBreed.value=""; 
    inputService.value=""; 
    inputType.value=""; 
}

function deletePet(deleteIndex){
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(deleteIndex).remove();
    displayRows();
    showNotification("something deleted", "alert-danger");
}

function init(){

    //hook
    $("#closeNotification").click(hideNotification);
    //initial functions
    
    //creating a new pet
    let pet1 = new Pet("Corkey", 1.5, "Male","Doberman","Grooming");
    let pet2 = new Pet("Chicken Fried Rice", 3, "Female","Bobcat","Vaccine");
    let pet3 = new Pet("Blue", 1, "Male","Betta Fish","Hotel");
    petSalon.pets.push(pet1,pet2,pet3);
    //displayNames();
    //displayCards();
    displayRows();
    displayTotalAmountPets();
    displayServiceCount();

    //load the input
    inputName = document.getElementById("txtName");
    inputAge = document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputBreed = document.getElementById("txtBreed");
    inputService = document.getElementById("txtService");
    inputType = document.getElementById("txtType");

    //clear form
    
}

window.onload=init;