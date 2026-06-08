function shoppingCart() {
    let count = 0;

    return {
        addItem: function() {
            count++;
            console.log("Item Added");
        },

        removeItem: function() {
            if (count > 0) {
                count--;
                console.log("Item Removed");
            }
        },

        displayCount: function() {
            console.log("Items in Cart:", count);
        }
    };
}

const cart = shoppingCart();

cart.addItem();
cart.removeItem();
cart.displayCount();