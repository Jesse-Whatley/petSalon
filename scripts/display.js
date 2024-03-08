function displayNames(){
    //use for loop to travel the array
    for(let i=0; i<petSalon.pets.length; i++){
        document.getElementById("petList").innerHTML+=`<li>${petSalon.pets[i].name}</li>`;
    }
}