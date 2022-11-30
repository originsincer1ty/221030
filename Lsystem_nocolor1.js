let rules = {
  "X": "F[+X]F[-X]+X",
  "F": "FF"
}

let rules2 = {
  "X": "F+[-F-XF-X][+FF][--XF[+X]][++F-X]']",
  "F": "FF"
}

let rules3 = {
  "X": "F[+F][-F[-F]F]F[+F][-F]",
  "F": "F"
}

let len = 0.3;
let ang;
let drawRules;
let word = "X";

function setup() {
  ang = 30;
  
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
  
  for (let i = 0; i<word.length; i++) {
    let c = word[i];
    if (c in drawRules) {
      drawRules[c]();
    }
  }
  pop();
}

function makeTree(){
  word = generate();
  // console.log(word);
  draw();
}

function mouseReleased(){
makeTree();
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
