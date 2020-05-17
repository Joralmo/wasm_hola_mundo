let points = new Array();
let functionsC = null;

fetch('../main.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
  instance = results.instance;
  functionsC = instance.exports;
});

function setup() {
  createCanvas(1100, 700, WEBGL);
  colorMode(HSB, 100);
}
function draw() {
  if (functionsC) {
    background(0);
    translate(0, 0, -80);
    scale(7);
    functionsC.calcDerivadas();
    points.push(new p5.Vector(functionsC.getX(), functionsC.getY(), functionsC.getZ()));
    stroke(255);
    noFill();
    let prev = points[0];
    let color = 0;
    for (let i = 1; i < points.length; ++i) {
      let next = points[i];
      stroke(color, 255, 255);
      line(prev.x, prev.y, prev.z, next.x, next.y, next.z);
      prev = next;
      color++;
      if (color > 255) {
        color = 0;
      }
    }
  }
}
