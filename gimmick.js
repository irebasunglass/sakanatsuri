var ataibox = [],ikexy = [];

const ike = document.createElement('div');
const sao = document.createElement('div');
sao.classList.add('sao');


var maru = document.createElement('div');

var field = document.createElement('div');
const blackbass = document.createElement('div')
document.body.appendChild(field);
field.classList.add('field');
field.appendChild(ike);

ike.classList.add('ike');
blackbass.classList.add('blackbass');

field.appendChild(ike);
ike.appendChild(blackbass);
var line = document.createElement('canvas');


var x = Math.floor(Math.random()*100);
var y = Math.floor(Math.random()*100);


function ani() {

  var timeline = anime.timeline()
timeline.add({
    targets: '.blackbass',
    translateX:x,
    translateY:y,
    duration:7000,
    rotate:360
  })
.add({
      targets: '.blackbass',
      scaleX:-1,
      translateX:x,
      translateY:x
    })
  }


  function maruaction() {


    maru.textContent = 'GAME';
    maru.classList.add('maru');
    ike.appendChild(maru);
    maru.addEventListener('mouseover',function(){
      maru.style.backgroundColor = 'pink';
    });
    maru.addEventListener('mouseout',function(){
      maru.style.backgroundColor = 'white';
    })

    }

    function first(){
      return new Promise((resolve, reject) => {
        resolve(ani());
     });
    }
first().then(ani());

var wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

async function second() {
  ani();
  await wait(8000);
  maruaction();
}
second();
maru.addEventListener('click', function(){
ike.removeChild(blackbass);
  ike.removeChild(maru);
   field.appendChild(sao);

 for(let i = 0; i<7; i++){
 var basskage = document.createElement('div');
 var x = Math.random()*1000;
 var y = Math.random()*1000;

 basskage.classList.add('basskage');
 basskage.style.top = y + 'px';
 basskage.style.left = x + 'px';
 ike.appendChild(basskage);

 };

});



function saoaction(){

ike.addEventListener('click',function(e) {
function tobiito() {




            cx=656,cy=461,
            cx2=824,cy2=376;


          var ikex = e.layerX;
          var ikey = e.layerY;
          var ikex2,ikey2;
          var linectx = line.getContext('2d');
              linectx.lineWidth = '1';

              line.width = 1000;
              line.height = 500;

          var acx = 0, acy = 0,
                acx2 = 0,acy2 = 0;
            var  a=cx-ikex-1,b=ikex-cx2-1,c=cx2-ikex-1;
            let kaisuu = 0; let counter = 0;





if(kaisuu == 0) {



if(ikex <= cx){

function makeline() {

  var starttimer = setInterval(function() {
  linectx.beginPath();
  const saosaki1 = linectx.moveTo(cx,cy);

  a-=1;

  acx = (cx-ikex)/a;
  acy = (cy-ikey)/a;

  linectx.lineTo(cx-=acx,cy-=acy);

  linectx.stroke();
   ike.appendChild(line);

  if(cx <= ikex && cy <= ikey){
    clearInterval(starttimer);
     console.log('止まったよ');
     ataibox.push(cx,cy);

     return ataibox;
 }
},10)
kaisuu = 1;

}

  function delline(){



    var linectx = line.getContext('2d');

    var cx = ataibox[0],
        cy = ataibox[1];

      var a = 656-cx-1;

      var acx,acy;
      let counter = 0;

      var starttimer = setInterval(function(){

        counter++;
        if(counter<=1){
          acx = 0;
          acy = 0;
        }else if(counter>1) {
          acx = (656-cx)/a;
          acy = (461-cy)/a;
        }
    linectx.clearRect(cx+=acx,cy+=acy,15,5)
      if(cx >= 656 && cy >= 461){
        clearInterval(starttimer);
        console.log('止まったよ');
      }

}, 10);
kaisuu = 1;

}

function make() {
  return new Promise(function(resolve, reject) {
    resolve(makeline());
  });
}

make().then(makeline());


var wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

async function del() {
  makeline();
  await wait(4000);
  delline();
}

del();

}




if(ikex >= cx2){

function makeline() {

var starttimer = setInterval(function() {
linectx.beginPath();
const saosaki2 = linectx.moveTo(cx2,cy2);


b-=1;
acx2 = (ikex-cx2)/b;
acy2 = (ikey-cy2)/b;



linectx.lineTo(cx2+=acx2,cy2+=acy2);

linectx.stroke();
 ike.appendChild(line);



if(cx2 >= ikex && cy2 <= ikey){
  clearInterval(starttimer);
   console.log('止まったよ');
   ataibox.push(cx2,cy2);
   return ataibox;
}

}, 1);
kaisuu = 1;

}


function delline(){



  var linectx = line.getContext('2d');

  var cx2 = ataibox[0],
      cy2 = ataibox[1];

    var b = cx2-824-1;

    var acx2,acy2;

    var starttimer = setInterval(function(){

      counter++;
      if(counter<=1){
        acx2 = 0;
        acy2 = 0;
      }else if(counter>1) {
        acx2 = (cx2-824)/b;
        acy2 = (cy2-376)/b;
      }

  linectx.clearRect(cx2-=acx2,cy2-=acy2,-15,5);
    if(cx2 <= 824 && cy2 >= 376){
      clearInterval(starttimer);
      console.log('止まったよ');
    }

}, 10);
kaisuu = 1;

}


function make() {
  return new Promise(function(resolve, reject) {
    resolve(makeline());
  });
}

make().then(makeline());

var wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

async function del() {
  makeline();
  await wait(4000);
  delline();
}


del();

}





if(ikex < cx2 && ikex > cx) {

function makeline() {
  var starttimer = setInterval(function() {
  linectx.beginPath();
  const saosaki2 = linectx.moveTo(cx2,cy2);

  c-=1;
  acx2 = (cx2-ikex)/c;
  acy2 = (cy2-ikey)/c;


  linectx.lineTo(cx2-=acx2,cy2-=acy2);

  linectx.stroke();
   ike.appendChild(line);



  if(cx2 <= ikex && cy2 <= ikey){



    clearInterval(starttimer);
     console.log('止まったよ');
     ataibox.push(cx2,cy2);
     return ataibox;
  }
}, 1);
kaisuu = 1;
}


function delline(){



  var linectx = line.getContext('2d');

  var cx2 = ataibox[0],
      cy2 = ataibox[1];

    var c = 824-cx2-1;

    var acx2,acy2;

    var starttimer = setInterval(function(){

      counter++;
      if(counter<=1){
        acx2 = 0;
        acy2 = 0;
      }else if(counter>1) {
        acx2 = (824-cx2)/c;
        acy2 = (376-cy2)/c;
      }

  linectx.clearRect(cx2+=acx2,cy2+=acy2,15,5);
    if(cx2 >= 824 && cy2 >= 376){
      clearInterval(starttimer);
      console.log('止まったよ');
    }

}, 10);
kaisuu = 1;

}

function make() {
  return new Promise(function(resolve, reject) {
    resolve(makeline());
  });
}

make().then(makeline());

var wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

async function del() {
  makeline();
  await wait(4000);
  delline();
}

del();

}

}

}









function cast() {
    var ikex = e.layerX;

if(ikex < 656){
   anime({
    targets:'.sao',
    rotate:-45,
    translateY:-100
  })
}
else if(ikex >= 656){
anime({
  targets:'.sao',
  translateX:-250,
  rotate:10,
  translateY:-50,
  scaleX:-1
})
}
}



function ichiren_1 () {
  return new Promise(function(resolve, reject) {
    resolve(cast());
  });
}



var wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));


async function ichiren_2 () {
  cast();
  await wait(400);
  tobiito();
}

ichiren_1().then(cast());

ichiren_2();


});
}



ike.addEventListener('click', function() {
  saoaction();
});
