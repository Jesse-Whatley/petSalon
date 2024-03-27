function Services(title,price){
    this.title=title;
    this.price=price;
    //this.items=items;
}

function register(){
    let title=$("#txtService").val();
    let price=$("#txtPrice").val();

    let newService = new Services(title,price);

    saveItem(newService);
    displayItems();

}

function displayItems(){
    let items = readItems();
    let htmlList=$("#services");
    htmlList.html("");
    let li = "";
    for(let i=0; i<items.length; i++){
        let item = items[i];
        li = `<li> ${item.title} - ${item.price} </li>`;
        htmlList.append(li);
    }
}

function init(){
    $("#btnServices").click(register);

    //load the data
    displayItems();
}

window.onload = init;