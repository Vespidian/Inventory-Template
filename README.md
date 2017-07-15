# Inventory-Template
A template for a game inventory, fully customize-able. You can add as many items as needed per your game.

To add an item to the inventory, you have to use the following function:
```javascript
addToInv(itemnumber, cellnumber, itemamount);
```
- itemnumber being the item to be added to the inventory.
- cellnumber being the cell to add the item to.
- itemamount being the amount of the item to add.
i.e:
```javascript
inventoryAdd(2, 23, 5);
```
Will add 5 piece of dirt to slot 23.
To clear a slot use:
```javascript
inventoryAdd(0, cell, 0);
```
cell being the slot you want to clear
You can play around with adding items by opening up inspect element (F12)
and going to console, after you do this you just input the function as explained above.



- Check out the <a href="https://github.com/Vespidian/Inventory-Template/wiki">wiki</a> for more details.

- Check out my <a href="https://vespidian.github.io/">website</a> to see other stupid things I do / make.
