var MyNamespace;
(function (MyNamespace) {
    function greet(name) {
        console.log("Hello, ".concat(name, "!"));
    }
    MyNamespace.greet = greet;
})(MyNamespace || (MyNamespace = {}));
MyNamespace.greet("Anıl");
