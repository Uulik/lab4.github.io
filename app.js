const cars = ["Tesla model s", "Tesla model 3", "Tesla model x", "Tesla model y"];

let text = "";
for (let i = 0; i < cars.length; i++) {
text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

let myText = 'I am a string';
let newString = myText.replace('string', 'student');
console.log(newString);

function createCar(argument) {
  return { name: argument };
}

console.log(createCar("argument"));  }

}

returnobject();
