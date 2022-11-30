var angle;
var axiom = "F";
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
  a: "F",
  b: "F[+F][-F[-F]F]F[+F][-F]"
}

function generate() {
  len *= 0.7;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  // createP(sentence);
  turtle();

}

function turtle() {
  resetMatrix();
  translate(width / 2, height);
  stroke('green');
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle)
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function mouseReleased(){
    generate();
}

function setup() {
  createCanvas(windowWidth, windowHeight-200);
  angle = radians(30);
  background(255);
  // createP(axiom);
  turtle();
}