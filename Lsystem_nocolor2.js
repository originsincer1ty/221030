let rules = {
  "F": "FF-[XY]+[XY]",
  "X": "+FY",
  "Y":"-FX"
}

let len = 0.5;
let ang;
let drawRules;

let word = "F";

function setup() {
  createCanvas(600, 600);
  ang = 22.5;
  
  drawRules  = {
    "X":() => {
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
  background(220);
  
  push();
  translate(width/4,height);
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
  console.log(word);
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
