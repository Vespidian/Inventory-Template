function craftingAdd (itemN, cell, amount) {
  var img = possibleItems[itemN].itemImage;
  cInventory[cell].item = possibleItems[itemN].itemName;
  if (itemN >= 1) {
    if (cInventory[cell].itemAmount + amount >= 1) {
    cInventory[cell].empty = false;
    document.getElementById(cInventory[cell].slotId).setAttribute('title',possibleItems[itemN].itemName);
      if (cInventory[cell].itemNumber == itemN) {
        cInventory[cell].itemAmount = cInventory[cell].itemAmount + amount;
        document.getElementById(cInventory[cell].slotId).innerHTML = img;
        document.getElementById(cInventory[cell].slotId).innerHTML = document.getElementById(cInventory[cell].slotId).innerHTML + "<p>" + cInventory[cell].itemAmount + "</p>";
        cInventory[cell].itemNumber = itemN;
      } else if (cInventory[cell].itemNumber !== itemN) {
        cInventory[cell].itemAmount = 0;
        cInventory[cell].itemAmount = cInventory[cell].itemAmount + amount;
        document.getElementById(cInventory[cell].slotId).innerHTML = img;
        document.getElementById(cInventory[cell].slotId).innerHTML = document.getElementById(cInventory[cell].slotId).innerHTML + "<p>" + cInventory[cell].itemAmount + "</p>";
        cInventory[cell].itemNumber = itemN;
      }
    }else if (cInventory[cell].itemAmount + amount <= 0) {
      document.getElementById(cInventory[cell].slotId).innerHTML = "";
      cInventory[cell].item = "empty";
      cInventory[cell].itemNumber = 0;
      cInventory[cell].itemAmount = 0;
      cInventory[cell].empty = true;
      document.getElementById(cInventory[cell].slotId).setAttribute('title', "");
    }
  } else {
    document.getElementById(cInventory[cell].slotId).innerHTML = "";
    cInventory[cell].item = "empty";
    cInventory[cell].itemNumber = 0;
    cInventory[cell].itemAmount = 0;
    cInventory[cell].empty = true;
    document.getElementById(cInventory[cell].slotId).setAttribute('title', "");
  }
  onCraft("Dirt", "Grass", 0, 0, 3, 4);
}
//DO NOT EDIT BEFORE THIS LINE! (Unless you know what you're doing.)

//ITEMS / FEEL FREE TO ADD AS MANY ITEMS AS YOU WANT. BUT ALWAYS KEEP THE EMPTY ITEM THERE AND FOLLOW THE SAME CONVENTIONS.


//USE THIS TO ADD EXTRA CELLS.
cInventory.push(

);

//ADD OBJECTS TO THIS VARIABLE TO ADD ITEMS. (see wiki for more info)
possibleItems.push(

);


//To add an item to the ccInventory, you have to use the following function:
//ccInventoryAdd(itemnumber, cellnumber, itemamount);
//itemnumber being the item to be added to the ccInventory.
//cellnumber being the cell to add the item to.
//itemamount being the amount of the item to add.
//i.e:
//ccInventoryAdd(2, 23, 5);
//will add 5 piece of dirt to slot 23.
//to clear a slot use:
//ccInventoryAdd(0, cell, 0);
//cell being the slot you want to clear.

//START YOUR WORK FROM HERE DOWN
function ssetup (){
//Add 7 grass to cell 5.
  craftingAdd(1, 5, 7);
}
