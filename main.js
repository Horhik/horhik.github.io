// let playButton = document.querySelector('.play');
let resetButton = document.querySelector('.reset');

let play =true 
// playButton.addEventListener('click', () => {

//   play = !play;
//   console.log('click', play)
// })
let wiw 
let wih 
function setup() {
   wiw = innerWidth 
    wih = innerHeight - 200 
   createCanvas(wiw, wih);
}


let count = 360;
let pi = Math.PI
let step = 1;
let ang = 0
let nums = []
let multiplier = 2;
let centerx = window.innerWidth/2;
let centery = (window.innerHeight - 200)/2 
let R = centery/1.2;
let length = pi * R

for (let i = 1; i <= count; i++){
  ang += pi / (count / multiplier / 2)
  let numx =  centerx + (Math.sin(ang) * R)
  let numy =  centery + (Math.cos(ang) * R)
  let num = i;
  nums.push({num, x: numx, y:numy})
  }

resetButton.addEventListener('click', () => {
count += 20 ;
pi = Math.PI
step = 1;
ang = 0
nums = []
multiplier += 1;
centerx = window.innerWidth/2;
centery = (window.innerHeight - 200)/2 
R = centery/1.2;
length = pi * R
for (let i = 1; i <= count; i++){
  ang += pi / (count / multiplier / 2)
  let numx =  centerx + (Math.sin(ang) * R)
  let numy =  centery + (Math.cos(ang) * R)
  let num = i;
  nums.push({num, x: numx, y:numy})
  }
  console.log(nums.length)
})

function draw() {
if (play) {
  background('#eee')
  fill('#eded33') 
  ellipse(centerx, centery, R*2);
  fill('#35ff3d')

  nums.forEach(num => {
    ellipse(num.x,num.y, 5);
    let next =  num.num * multiplier > count ? num.num * multiplier - (~~(num.num * multiplier / count) * count) : num.num * multiplier;

    try{
    let n = next - 1 < 0 ? 0 : next -1;
    let nx = nums[n].x
    let ny = nums[n].y
    let x = num.x
    let y = num.y
    line (nx, ny, x, y)
    }
    catch (e) {
      console.error(e)
      play = false
      console.log(next)
      console.log(nums.length)
    }
  });
} 
}
