let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);


//Add Item
function addItem(e){
    e.preventDefault();
let newItem = document.getElementById('item').value;
// Create new li element
let li = document.createElement('li');
//add class
li.className = 'list-group-item';
// add text node with input value
li.appendChild(document.createTextNode(newItem));
//create delete button element
let deleteButton = document.createElement('button');
//add delete class to deleteButton
deleteButton.className = 'delete';
//append text node
deleteButton.appendChild(document.createTextNode(' X'));
//append button to li

li.appendChild(deleteButton);
//append li to list
itemList.appendChild(li);
} 



function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to DELETE?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



//filter items
function filterItems(e){
    //convert all text to lowercase
    let text = e.target.value.toLowerCase();
    //get list
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}