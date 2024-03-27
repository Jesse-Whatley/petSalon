function saveItem(item){
    let list = readItems(); // getting list from localStorage
    list.push(item);
    let val = JSON.stringify(list);
    localStorage.setItem("services", val);
}

function readItems(){
    let data = localStorage.getItem("services");
    if(!data){ // NOT data?
        return [];
    }else {
        let list = JSON.parse(data);
        return list;
    }
}