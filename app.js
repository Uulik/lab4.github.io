const cars = ["Tesla model s", "Tesla model 3", "Tesla model x", "TEsla model y"];

let text = "";
for (let i = 0; i < cars.length; i++) {
text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

let myText = 'I am a string';
let newString = myText.replace('string', 'student');
console.log(newString);

function returnobject() {
  for (let mebe = 1; ; mebe++) {
    console.log(mebe + "A");
      if (mebe == 5) {
        return;
      }
      console.log(mebe + "B");
    }
}

returnobject();
