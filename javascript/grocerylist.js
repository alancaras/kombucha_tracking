// on click of sbumit it should take whatever is inside the submit box
// need an empty array in the beginning
// delete item

let listArray = ["tomato", "banana"];

let Item;

function addItem() {
  Item = document.getElementById("enter").value;
  console.log(Item);
  listArray.push(Item);
  console.log(listArray);
  document.getElementById("grocerylist").value = listArray;
}
