function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(", ")));
}
makeSandwich("Grilles Cheese", "Tomato", "Egg", "Mayones");
makeSandwich("Bread", "Grilled Chiken");
makeSandwich("Roast Beef", "mixed vegetables");
