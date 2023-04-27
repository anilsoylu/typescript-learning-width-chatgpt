function reverse(items) {
    var reversed = [];
    for (var i = items.length - 1; i >= 0; i--) {
        reversed.push(items[i]);
    }
    return reversed;
}
var letters = ["a", "b", "c", "d", "e"];
var numbers = [1, 2, 3, 4, 5];
console.log(reverse(letters));
console.log(reverse(numbers));
