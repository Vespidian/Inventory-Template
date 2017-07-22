function inventoryAdd (itemN, cell, amount) {
  var img = possibleItems[itemN].itemImage;
  inventory[cell].item = possibleItems[itemN].itemName;
  if (itemN >= 1) {
    if (inventory[cell].itemAmount + amount >= 1) {
    inventory[cell].empty = false;
    document.getElementById(inventory[cell].slotId).setAttribute('title',possibleItems[itemN].itemName);
      if (inventory[cell].itemNumber == itemN) {
        inventory[cell].itemAmount = inventory[cell].itemAmount + amount;
        document.getElementById(inventory[cell].slotId).innerHTML = img;
        document.getElementById(inventory[cell].slotId).innerHTML = document.getElementById(inventory[cell].slotId).innerHTML + "<p>" + inventory[cell].itemAmount + "</p>";
        inventory[cell].itemNumber = itemN;
      } else if (inventory[cell].itemNumber !== itemN) {
        inventory[cell].itemAmount = 0;
        inventory[cell].itemAmount = inventory[cell].itemAmount + amount;
        document.getElementById(inventory[cell].slotId).innerHTML = img;
        document.getElementById(inventory[cell].slotId).innerHTML = document.getElementById(inventory[cell].slotId).innerHTML + "<p>" + inventory[cell].itemAmount + "</p>";
        inventory[cell].itemNumber = itemN;
      }
    }else if (inventory[cell].itemAmount + amount <= 0) {
      document.getElementById(inventory[cell].slotId).innerHTML = "";
      inventory[cell].item = "empty";
      inventory[cell].itemNumber = 0;
      inventory[cell].itemAmount = 0;
      inventory[cell].empty = true;
      document.getElementById(inventory[cell].slotId).setAttribute('title', "");
    }
  } else {
    document.getElementById(inventory[cell].slotId).innerHTML = "";
    inventory[cell].item = "empty";
    inventory[cell].itemNumber = 0;
    inventory[cell].itemAmount = 0;
    inventory[cell].empty = true;
    document.getElementById(inventory[cell].slotId).setAttribute('title', "");
  }
}
//DO NOT EDIT BEFORE THIS LINE! (Unless you know what you're doing.)

//ITEMS / FEEL FREE TO ADD AS MANY ITEMS AS YOU WANT. BUT ALWAYS KEEP THE EMPTY ITEM THERE AND FOLLOW THE SAME CONVENTIONS.


//USE THIS TO ADD EXTRA CELLS.
inventory.push(

);

//ADD OBJECTS TO THIS VARIABLE TO ADD ITEMS. (see wiki for more info)
possibleItems.push(

);
//To add an item to the inventory, you have to use the following function:
//inventoryAdd(itemnumber, cellnumber, itemamount);
//itemnumber being the item to be added to the inventory.
//cellnumber being the cell to add the item to.
//itemamount being the amount of the item to add.
//i.e:
//inventoryAdd(2, 23, 5);
//will add 5 piece of dirt to slot 23.
//to clear a slot use:
//inventoryAdd(0, cell, 0);
//cell being the slot you want to clear.

//START YOUR WORK FROM HERE DOWN
function setup (){
//Add 7 grass to cell 5.
  inventoryAdd(1, 5, 7);
}
