let rules = {
  "X": "F+[[X]-X]-F[-FX]+X",
  "F": "FF"
}

// rule set 정의
// F는 FF로 치환되고, X는 "F+[X]-X]-F[-FX]+X"로 치환된다.
// 문자열 (String)

let len = 0.5;
let ang;
// 식물의 길이
let drawRules;

let word = "X";
// starts X. X does not correspond to and drawing action

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
  // only call the draw function once.
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

 
// fx generate will generate the next generation of the L system.

function generate() {
  let next = "";
  // next generation = 빈 문자열
  
  // 반복문 사용으로 모든 문자형 함수로 word(X)를 반복한다. every character in current word.
   
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    // 문자형 함수는 word의 문자열과 같다.
    if (c in rules) {
      next += rules[c];
      // c는 rule 안에 들어있는 index
    } else {
      next += c;
    }
  }
    // 문자형 함수(ex. X)가 현재 rule 안에 있다면, next generation에 rule대로 치환해서 더한다. 문자형 함수(ex. 괄호 등)가 현재 rule 안에 있다면, 그대로 next generation에 넣는다.
  
  return next;
  // next generation 반환
}