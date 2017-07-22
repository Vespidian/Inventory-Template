function outAdd (itemN, cell, amount) {
  var img = possibleItems[itemN].itemImage;
  outSlot[cell].item = possibleItems[itemN].itemName;
  if (itemN >= 1) {
    if (outSlot[cell].itemAmount + amount >= 1) {
    outSlot[cell].empty = false;
    document.getElementById(outSlot[cell].slotId).setAttribute('title',possibleItems[itemN].itemName);
      if (outSlot[cell].itemNumber == itemN) {
        outSlot[cell].itemAmount = outSlot[cell].itemAmount + amount;
        document.getElementById(outSlot[cell].slotId).innerHTML = img;
        document.getElementById(outSlot[cell].slotId).innerHTML = document.getElementById(outSlot[cell].slotId).innerHTML + "<p>" + inventory[cell].itemAmount + "</p>";
        outSlot[cell].itemNumber = itemN;
      } else if (outSlot[cell].itemNumber !== itemN) {
        outSlot[cell].itemAmount = 0;
        outSlot[cell].itemAmount = outSlot[cell].itemAmount + amount;
        document.getElementById(outSlot[cell].slotId).innerHTML = img;
        document.getElementById(outSlot[cell].slotId).innerHTML = document.getElementById(outSlot[cell].slotId).innerHTML + "<p>" + inventory[cell].itemAmount + "</p>";
        outSlot[cell].itemNumber = itemN;
      }
    }else if (outSlot[cell].itemAmount + amount <= 0) {
      document.getElementById(outSlot[cell].slotId).innerHTML = "";
      outSlot[cell].item = "empty";
      outSlot[cell].itemNumber = 0;
      outSlot[cell].itemAmount = 0;
      outSlot[cell].empty = true;
      document.getElementById(outSlot[cell].slotId).setAttribute('title', "");
    }
  } else {
    document.getElementById(outSlot[cell].slotId).innerHTML = "";
    outSlot[cell].item = "empty";
    outSlot[cell].itemNumber = 0;
    outSlot[cell].itemAmount = 0;
    outSlot[cell].empty = true;
    document.getElementById(outSlot[cell].slotId).setAttribute('title', "");
  }
}
//DO NOT EDIT BEFORE THIS LINE! (Unless you know what you're doing.)

//ITEMS / FEEL FREE TO ADD AS MANY ITEMS AS YOU WANT. BUT ALWAYS KEEP THE EMPTY ITEM THERE AND FOLLOW THE SAME CONVENTIONS.


//USE THIS TO ADD EXTRA CELLS.
outSlot.push(

);

//ADD OBJECTS TO THIS VARIABLE TO ADD ITEMS. (see wiki for more info)
possibleItems.push(

);
//To add an item to the outSlot, you have to use the following function:
//outSlotAdd(itemnumber, cellnumber, itemamount);
//itemnumber being the item to be added to the outSlot.
//cellnumber being the cell to add the item to.
//itemamount being the amount of the item to add.
//i.e:
//outSlotAdd(2, 23, 5);
//will add 5 piece of dirt to slot 23.
//to clear a slot use:
//outSlotAdd(0, cell, 0);
//cell being the slot you want to clear.

//START YOUR WORK FROM HERE DOWN
function setup (){
//Add 7 grass to cell 5.
  outSlotAdd(1, 5, 7);
}
