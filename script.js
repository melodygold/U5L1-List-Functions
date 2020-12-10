var list = ["to", 5, "po"]; 
  function appendItem(listName, item){
    listName.push(item);
  }

function removeItem(listName, index) {
  listName.splice(index, 1);
}

function insertItem(listName, index, item) {
  listName.splice(index, 0, item);
}

insertItem(list, 1, "B)")
appendItem(list, "New List Item!");
removeItem(list, 2);

console.log(list); 


