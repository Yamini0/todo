const addButton = document.querySelector('.add');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disable = true;
        input.classList.add('item_input');
        input.type= "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let edit = document.createElement('button');
        edit.innerHTML = "EDIT";
        edit.classList.add('edit');

        let remove = document.createElement('button');
        remove.innerHTML = "REMOVE";
        remove.classList.add('remove');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
    }
}
new item("water");