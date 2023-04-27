var person = {
    name: "Anıl",
    age: 29,
    email: "business@anilsoylu.com",
    sendEmail: function (message) {
        console.log("Email sent ".concat(message));
    },
};
person.sendEmail("Hello, how are you?");
