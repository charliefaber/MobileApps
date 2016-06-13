function addNumbers() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');

    if (isNaN(num1.value) || isNaN(num2.value))
        result.value = "Invalid Data"
    else {
        result.value = parseInt(num1.value + parseInt(num2.value))
    }
}
window.unload = function () {
    document.getElementById(newBtn).addEventListener('click', showMe, false);

    var btn = document.createElement("button");
    var text = document.createTextNode('CLICK ME!');
    btn.append(text);
    document.body.appendChild(btn);

    var myDiv = document.getElementById("content");
    //myDiv.innerHTML = "JavaScript GC";
    var theElements = myDiv.getElementsByClassName("large");
    theElements[0].innerHTML = "Georgia College";
};

function showMe() {
    alert("Show Me");
}

function testJS() {
    var image = document.getElementById("myImage");
    if (image.src.match("go")) {
        image.src = "img/stop.png";
    } else {
        image.src = "img/go.jpeg";
    }


    //alert("Testing JS");

    var text = "ABCD";
    var strLength = text.length;
    //alert(text.length);

    var locate = text.search("C");
    //alert(locate)

    var values = ["Volvo", "Saab", "Fiat"];
    //alert(values[0]);
    //console.log(values[1]);

    var result = "";
    var foods = ["Apples", "Bananas", "Oranges"];
    for (var i = 0; i < foods.length; i++) {
        if (foods[i] == "Apples")
            result += foods[i] + " are good ";
        else
            result += foods[i] + " are terrible ";
    }
    //alert(result);

    var count = 0;
    for (var i in foods)
        if (foods[i] != "Apples")
            count++;
        //console.log("Count of nonapples: " + count);
        /*
            var person = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
            };
        */
        //console.log("Full Name: " + person.firstName + " " + person.lastName)
    var myFather = new person("Kenneth", "Faber", 45, "green");
    var myMother = new person("LaVeta", "Faber", 45, "blue");
    display(myFather);
    display(myMother);

    result = "";
    for (var field in myMother) {
        result += "myMother." + field + ": " + myMother[field] + "\n"
    }
    console.log(result)

    var text = '{"employees" : [' +
        '{ "firstName":"John", "lastName":"Doe"},' +
        '{ "firstName":"Anna", "lastName":"Smith"},' +
        '{ "firstName":"Peter", "lastName":"Jones"}]}'
    var obj = JSON.parse(text);


    for (var i in obj.employees) {
        console.log(obj.employees[i].firstName + " " + obj.employees[i].lastName);

    }

    var myInputs = document.getElementsByTagName("input");

    console.log("Numbers of input elements: " + myInputs.length);
    myInputs[0].style.backgroundColor = "red";
    myInputs[1].style.backgroundColor = "aqua";

    document.getElementById("demo").innerHTML = "<h1>Hello World!</h1>"
}

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

function display(obj1) {
    console.log("Name: " + obj1.firstName + " " + obj1.lastName);
}