let rules = {
  "X": "F+[[X]-X]-F[-FX]+X",
  "F": "FF"
}

let len = 0.5;
let ang;
let drawRules;
let word = "X";

function setup() {
  createCanvas(400, 400);
  ang = 25;
  
  drawRules  = {
    "F":() => {
      line(0, 0, 0, -len);
      translate(0, -len);
    },
    "+" : () => {
      rotate(PI/180 * -ang);
    },
    "-" : () => {
      rotate(PI/180 * ang);
    },
    "[": push,
    "]" : pop,
  }
  
  noLoop();
}

function draw() {
  createCanvas(windowWidth, windowHeight-200);
  background(255);
  push();
  translate(width/2,height);
  // rotate(PI/180 * ang);
  
  for (let i = 0; i<word.length; i++) {
    let c = word[i];
    if (c in drawRules) {
      drawRules[c]();
    }
  }
  pop();
}

function mouseReleased(){
  word = generate();
  // console.log(word);
  draw();
}

function generate() {
  let next = "";   
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    if (c in rules) {
      next += rules[c];
    } else {
      next += c;
    }
  }

  return next;
}
