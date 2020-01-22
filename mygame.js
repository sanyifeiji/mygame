
var word0=[0,0,0,0,128,3,0,0,0,7,0,2,0,207,1,7,0,142,255,7,0,140,255,7,0,140,3,7,0,128,3,3,0,184,3,3,128,255,131,3,252,191,131,3,120,156,131,3,0,142,243,3,0,135,255,7,128,143,239,0,128,191,239,0,192,127,238,0,224,119,238,0,112,103,238,0,56,7,230,0,28,7,231,0,12,7,231,0,0,7,99,48,0,135,99,48,0,135,97,48,0,199,97,48,0,199,96,48,0,103,224,112,128,119,224,127,0,63,192,127,0,31,0,0,0,0,0,0];
var word1=[0,0,0,0,0,0,3,0,0,0,127,0,0,0,238,0,0,0,206,1,0,0,206,3,0,0,142,1,0,0,14,0,128,1,14,7,128,3,254,15,0,255,255,3,0,255,15,0,0,3,14,0,0,3,12,3,0,3,12,3,0,195,28,7,0,251,157,3,128,255,220,1,128,239,216,1,128,227,248,0,128,227,120,0,128,227,56,0,128,225,124,0,192,99,126,56,192,127,231,56,192,252,195,57,224,248,193,59,96,48,128,63,112,48,0,63,56,0,0,62,28,0,0,56,12,0,0,0];
var word2=[0,0,0,0,0,224,0,0,0,192,1,0,0,192,1,0,0,192,1,0,0,192,1,0,0,192,1,0,96,192,1,3,96,192,249,7,224,254,255,3,192,255,143,3,192,199,129,3,192,192,129,3,192,192,177,3,192,224,255,1,192,255,255,1,192,254,193,1,192,192,193,1,192,192,193,1,192,192,241,1,192,255,255,3,192,255,63,0,224,193,1,0,192,193,1,48,192,192,1,48,0,192,1,48,0,192,1,48,0,192,1,48,0,192,3,120,0,128,255,127,0,0,254,15,0,0,0,0];
var word3=[0,0,0,0,0,0,192,0,0,192,192,1,0,195,193,1,0,135,225,0,0,142,227,0,0,142,119,0,0,28,51,0,96,28,59,56,96,8,255,127,224,255,255,31,224,255,1,12,112,0,0,6,120,0,112,6,56,248,255,0,16,255,127,0,0,14,28,0,0,192,15,0,0,128,3,8,0,128,255,31,128,255,255,31,248,255,3,0,240,0,3,0,0,0,3,0,0,0,7,0,0,0,7,0,0,8,3,0,0,56,3,0,0,240,3,0,0,192,3,0,0,128,3,0,0,0,1,0];

var word4=[0,0,0,0,0,0,0,0,0,0,128,3,0,0,254,3,0,255,255,1,0,255,227,0,0,0,112,0,0,0,56,0,0,128,28,0,0,128,15,0,0,128,7,0,0,0,3,0,0,0,7,0,0,0,231,127,0,240,255,127,248,255,63,0,240,15,6,0,0,0,6,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,6,0,0,0,6,0,0,4,7,0,0,28,7,0,0,56,7,0,0,240,7,0,0,224,3,0,0,192,3,0,0,128,3,0,0,0,1,0];
var word5=[0,0,0,0,128,1,0,0,0,7,0,12,0,15,0,30,0,14,142,31,0,12,236,3,0,252,253,0,248,255,29,0,240,113,28,0,192,113,28,0,128,51,28,0,128,59,28,48,0,251,255,127,240,255,255,63,252,15,28,3,48,12,28,3,0,12,12,3,0,254,13,3,248,255,13,3,240,13,14,3,128,125,14,3,192,237,14,3,192,207,7,3,224,140,7,3,112,12,7,3,56,12,3,3,220,143,3,3,142,143,1,3,0,207,128,3,0,238,128,3,0,96,0,3,0,0,0,0];
var word6=[0,0,0,0,0,48,0,0,0,112,0,0,0,112,0,0,0,56,0,0,0,56,0,0,0,28,254,3,0,252,255,3,0,254,7,0,0,7,7,0,0,3,7,0,128,1,7,0,192,6,255,3,224,254,255,7,32,254,7,0,0,12,7,0,0,12,7,0,0,12,7,16,0,12,255,127,192,255,255,127,248,255,7,0,48,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,0,0];
var word7=[0,0,0,0,192,1,14,0,128,3,28,0,128,3,28,0,128,1,12,0,128,1,12,0,128,1,12,0,128,1,12,0,128,1,14,3,176,7,254,7,176,239,255,3,176,221,143,3,176,9,142,3,184,1,142,3,184,1,142,1,156,1,134,1,156,1,198,63,156,253,255,127,128,253,255,1,128,1,63,0,128,1,51,0,128,129,115,0,128,129,97,0,128,193,225,0,128,193,192,0,192,225,192,1,192,113,128,3,192,49,128,3,192,25,0,15,192,15,0,127,128,7,0,0,0,0,0,0];

var word8=[0,0,0,0,0,0,192,0,0,0,240,1,0,0,254,1,0,198,31,0,0,254,1,0,0,158,1,0,0,135,3,0,0,7,7,0,0,7,3,0,0,3,3,0,128,3,3,0,128,3,3,6,128,3,255,15,128,255,255,7,192,255,3,0,128,1,3,0,0,0,3,0,0,28,51,0,0,28,243,0,0,30,195,1,0,15,131,7,128,3,3,31,192,1,3,60,224,0,3,56,120,0,3,48,28,56,3,0,12,240,3,0,0,224,3,0,0,192,3,0,0,128,3,0,0,0,0,0];

var ww=[word0,word1,word2,word3,word4,word5,word6,word7,word8,word8];
var po=[[480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280],
        [480,280]];
var tp=[0,1,2,3,4,5,6,7,7,3];
//0 不发散 1 发散 2 闪烁
var colo=[100,200,300,150,250,350];
var a=[];
var can=document.getElementById("can");
var context = can.getContext("2d");
var R=2;
var x9=255;
var y9=0;
var z9=1;
var t=60;//烟火文字时间
var t0=30;//追及时间
var abc=0.1;//透明度
var ttttt=10;//烟花间隔
var T=0;//总时间
var TT=0;
var TTX=100;
var TTT=30;//调用时间间隔
var g=0.05;//模拟重力加速度
var tt=1;//动画时间单元
var piaoyi=1.5;
var slist=[];
var nlist=[];
var num=0;
var s1={};
var ijk=0;
var assignments=[];
var vartrans=[];
var first=true;

//hsvToRgb([120, 50, 100]); //输出：[127, 255, 127]
//rgbToHsv([3,3,3]); // 输出：[0,0,1]

//参数arr的值分别为[r,g,b]
function rgbToHsv(arr) {
    var h = 0, s = 0, v = 0;
    var r = arr[0], g = arr[1], b = arr[2];
    arr.sort(function (a, b) {
        return a - b;
    })
    var max = arr[2]
    var min = arr[0];
    v = max / 255;
    if (max === 0) {
        s = 0;
    } else {
        s = 1 - (min / max);
    }
    if (max === min) {
        h = 0;//事实上，max===min的时候，h无论为多少都无所谓
    } else if (max === r && g >= b) {
        h = 60 * ((g - b) / (max - min)) + 0;
    } else if (max === r && g < b) {
        h = 60 * ((g - b) / (max - min)) + 360
    } else if (max === g) {
        h = 60 * ((b - r) / (max - min)) + 120
    } else if (max === b) {
        h = 60 * ((r - g) / (max - min)) + 240
    }
    h = parseInt(h);
    s = parseInt(s * 100);
    v = parseInt(v * 100);
    return [h, s, v]
}

//参数arr的3个值分别对应[h, s, v]
function hsvToRgb(arr) {
    var h = arr[0], s = arr[1], v = arr[2];
    s = s / 100;
    v = v / 100;
    var r = 0, g = 0, b = 0;
    var i = parseInt((h / 60) % 6);
    var f = h / 60 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i) {
        case 0:
            r = v; g = t; b = p;
            break;
        case 1:
            r = q; g = v; b = p;
            break;
        case 2:
            r = p; g = v; b = t;
            break;
        case 3:
            r = p; g = q; b = v;
            break;
        case 4:
            r = t; g = p; b = v;
            break;
        case 5:
            r = v; g = p; b = q;
            break;
        default:
            break;
    }
    r = parseInt(r * 255.0)
    g = parseInt(g * 255.0)
    b = parseInt(b * 255.0)
    return [r, g, b];
}



function change(word)//将word转化为二进制
{
 var ans=[0,0,0,0,0,0,0,0];
 for (var i=0;i<8;i++)
 {
 	ans[i]=word%2;
 	if (word%2==0)
 	word=word/2;
 else
 	word=(word-1)/2;

 }
return ans;
}
function draw(x,y,R,c0,c1,c2,ab)
{

	var ccc=hsvToRgb([c0,100,80]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x,y,1,1);


         	 ccc=hsvToRgb([c0,100,40]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x-1,y,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x+1,y,1,1);
         context.fillRect(x,y-1,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x,y+1,1,1);
       
       ccc=hsvToRgb([c0,100,10]);
       context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
       if (Math.random()>0.5)
       	context.fillRect(x+1,y+1,1,1);
       if (Math.random()>0.5)
       	context.fillRect(x-1,y+1,1,1);
       if (Math.random()>0.5)
       	context.fillRect(x+1,y-1,1,1);
       if (Math.random()>0.5)
       	context.fillRect(x-1,y-1,1,1);




    //var grd = context.createRadialGradient(x, y, 0, x, y, 4);
   // grd.addColorStop(0, 'red');
    //grd.addColorStop(1, 'black');
    //使用经向渐变
    //context.fillStyle = grd;
    //context.fillRect(x-4, y-4, 8, 8);


    //context.fillStyle='rgba('+c00+','+c01+','+c02+','+0.5+')';
      //  context.arc(x,y,2,0,2*Math.PI); 
    //context.fillStyle='rgba('+c0+','+c1+','+c2+','+ab+')';
       	//context.fillRect(x,y,R,R);
      // 	context.arc(x,y,1,0,2*Math.PI); 



}

function draw2(x,y,R,c0,c1,c2,ab)
{     var ccc=[];
       if (c2!=0)
         {ccc=hsvToRgb([c0,100,80]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x,y,1,1);


         	 ccc=hsvToRgb([c0,100,40]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x-1,y,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x+1,y,1,1);
         context.fillRect(x,y-1,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x,y+1,1,1);
       }else
       {

// ccc=hsvToRgb([c0,10,10]);
//     context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x,y,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x-1,y,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x+1,y,1,1);
//          context.fillRect(x,y-1,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x,y+1,1,1);



       }
       // ccc=hsvToRgb([c0,100,10]);
       // context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
       // if (Math.random()>0.5)
       // 	context.fillRect(x+1,y+1,1,1);
       // if (Math.random()>0.5)
       // 	context.fillRect(x-1,y+1,1,1);
       // if (Math.random()>0.5)
       // 	context.fillRect(x+1,y-1,1,1);
       // if (Math.random()>0.5)
       // 	context.fillRect(x-1,y-1,1,1);




    //var grd = context.createRadialGradient(x, y, 0, x, y, 4);
   // grd.addColorStop(0, 'red');
    //grd.addColorStop(1, 'black');
    //使用经向渐变
    //context.fillStyle = grd;
    //context.fillRect(x-4, y-4, 8, 8);


    //context.fillStyle='rgba('+c00+','+c01+','+c02+','+0.5+')';
      //  context.arc(x,y,2,0,2*Math.PI); 
    //context.fillStyle='rgba('+c0+','+c1+','+c2+','+ab+')';
       	//context.fillRect(x,y,R,R);
      // 	context.arc(x,y,1,0,2*Math.PI); 



}

function draw3(x,y,R,c0,c1,c2,ab)
{     var ccc=[];
       if (c2!=0)
         {ccc=hsvToRgb([c0,100,80]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x,y,1,1);
         context.fillRect(x,y+1,1,1);
         context.fillRect(x+1,y,1,1);
         context.fillRect(x+1,y+1,1,1);

         	 ccc=hsvToRgb([c0,100,40]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x-1,y,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x-1,y+1,1,1);
         context.fillRect(x,y+2,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x+1,y+2,1,1);
         context.fillRect(x+2,y,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x+2,y+1,1,1);
         context.fillRect(x,y-1,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x+1,y-1,1,1);
         	 ccc=hsvToRgb([c0,100,10]);
    context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x-1,y-1,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x-1,y+2,1,1);
         context.fillRect(x+2,y+2,1,1);
        //context.arc(x,y,4,0,2*Math.PI); 
         context.fillRect(x+2,y-1,1,1);

       }else
       {

// ccc=hsvToRgb([c0,10,10]);
//     context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x,y,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x-1,y,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x+1,y,1,1);
//          context.fillRect(x,y-1,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x,y+1,1,1);
//          context.fillRect(x-1,y-1,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x+1,y-1,1,1);
//          context.fillRect(x+1,y+1,1,1);
//         //context.arc(x,y,4,0,2*Math.PI); 
//          context.fillRect(x-1,y+1,1,1);


       }
       // ccc=hsvToRgb([c0,100,10]);
       // context.fillStyle='rgb('+ccc[0]+','+ccc[1]+','+ccc[2]+')';
       // if (Math.random()>0.5)
       // 	context.fillRect(x+1,y+1,1,1);
       // if (Math.random()>0.5)
       // 	context.fillRect(x-1,y+1,1,1);
       // if (Math.random()>0.5)
       // 	context.fillRect(x+1,y-1,1,1);
       // if (Math.random()>0.5)
       // 	context.fillRect(x-1,y-1,1,1);




    //var grd = context.createRadialGradient(x, y, 0, x, y, 4);
   // grd.addColorStop(0, 'red');
    //grd.addColorStop(1, 'black');
    //使用经向渐变
    //context.fillStyle = grd;
    //context.fillRect(x-4, y-4, 8, 8);


    //context.fillStyle='rgba('+c00+','+c01+','+c02+','+0.5+')';
      //  context.arc(x,y,2,0,2*Math.PI); 
    //context.fillStyle='rgba('+c0+','+c1+','+c2+','+ab+')';
       	//context.fillRect(x,y,R,R);
      // 	context.arc(x,y,1,0,2*Math.PI); 



}


function init_a()//初始化a
{  
	
 		
      for (var j=0;j<32;j++)
      {
      	var a1=[];
		for (var i=0;i<32;i++)
 	{
 		a1.push(0);
 	}
        a.push(a1);		
}
}

function fun1()
{

   T++;
  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
       	context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
       		//alert(slist[i][0])+"   "+(slist[i][1]);
       	context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);

context.fill();
         if (T<2)
         {var tempSrc = can.toDataURL("image/png");
//var image=strDataURI.replace("image/png", "image/octet-stream");
//window.location.href=image;
         }


        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
        
        slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
       	//alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
       	//alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //  	//context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
	window.clearInterval(s1);
	if (ijk<ww.length)
	{ijk++;
		f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
	//s1=window.setInterval(fun1, 100);
}

//alert("ss");
}

function fun2()
{

   T++;
  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
       	context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       //	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
       		//alert(slist[i][0])+"   "+(slist[i][1]);

       		if (T<1.5*t0||slist[i][7])
       	{context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);

context.fill();
        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
        slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
         }
       	//alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
       	//alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //  	//context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
	window.clearInterval(s1);
	if (ijk<ww.length)
	{ijk++;
		f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
	//s1=window.setInterval(fun1, 100);
}

//alert("ss");
}

function fun3()
{

   T++;
  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
       	context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       //	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
       		//alert(slist[i][0])+"   "+(slist[i][1]);

       		if (T<1.5*t0||slist[i][7])
       	{

            if (Math.random()>0.5)
       		{context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw2(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);

             context.fill();
           }else{
           	context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw2(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],0,ab);

             context.fill();
           }



        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
        slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
         }
       	//alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
       	//alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //  	//context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
	window.clearInterval(s1);
	if (ijk<ww.length)
	{ijk++;
		f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
	//s1=window.setInterval(fun1, 100);
}

//alert("ss");
}


function fun4()
{

   T++;
  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
       	context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       //	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
       		//alert(slist[i][0])+"   "+(slist[i][1]);

       		if (T<1.5*t0||slist[i][7])
       	{

            if (T<1.1*t0||Math.random()>0.5)
       		{context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw2(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);

             context.fill();
           }else{
           	context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw2(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],0,ab);

             context.fill();
           }



        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
        slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
         }
       	//alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
       	//alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //  	//context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
	window.clearInterval(s1);
	if (ijk<ww.length)
	{ijk++;
		f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
	//s1=window.setInterval(fun1, 100);
}

//alert("ss");
}


function fun5()
{

   T++;

  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
       	context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       //	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
       		//alert(slist[i][0])+"   "+(slist[i][1]);

       		if (T<1.5*t0||slist[i][7])
       	{

            if (T<1.1*t0||Math.random()>0.5)
       		{context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw3(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);

             context.fill();
           }else{
           	context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw3(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],0,ab);

             context.fill();
           }



        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
        slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
         }
       	//alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
       	//alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //  	//context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
	window.clearInterval(s1);
	if (ijk<ww.length)
	{ijk++;
		f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
	//s1=window.setInterval(fun1, 100);
}

//alert("ss");
}

function fun6()
{

   T++;

  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
       	context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       //	draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
       		//alert(slist[i][0])+"   "+(slist[i][1]);

       		if (T<1.5*t0||slist[i][7])
       	{

            if ((T<1.1*t0||Math.random()>0.1)&&(T>slist[i][8]*ttttt))
       		{context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	if (slist[i][9]>=1)
       		draw3(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
         else
         	draw2(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
         
         	
             context.fill();

        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
                slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
           }else{
           	if ((T>slist[i][8]*ttttt))
           	{context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
       	draw3(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],0,ab);

             context.fill();
        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
        slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
            }
           }





         }
       	//alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
       	//context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



       	context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
       	//alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //  	//context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
	window.clearInterval(s1);
	if (ijk<ww.length)
	{ijk++;
    if (ijk<ww.length)
		f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
	//s1=window.setInterval(fun1, 100);
}

//alert("ss");
}

function fun7()
{
  
  TT++;
  if (TT<TTX)
  {
       T++;

  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
        context.fillRect(0,0,960,560); 



    
        if (T<4*t0)
  
 for (var i=0;i<vartrans.length;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
        //context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       // draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
          //alert(slist[i][0])+"   "+(slist[i][1]);

          if (T<1.5*t0||vartrans[i][7])
        {

            if ((T<1.1*t0||Math.random()>0.1)&&(T>vartrans[i][8]*ttttt))
          {context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
        if (vartrans[i][9]>=1)
          draw3(Math.floor(vartrans[i][0]),Math.floor(vartrans[i][1]),R,vartrans[i][4],vartrans[i][5],vartrans[i][6],ab);
         else
          draw2(Math.floor(vartrans[i][0]),Math.floor(vartrans[i][1]),R,vartrans[i][4],vartrans[i][5],vartrans[i][6],ab);
         
          
             context.fill();

        vartrans[i][0]-=(vartrans[i][2]*tt);
        vartrans[i][1]-=(vartrans[i][3]*tt-0.5*g*tt*tt);
        vartrans[i][3]-=g*tt;
        vartrans[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        vartrans[i][1]+=(Math.random()*piaoyi-piaoyi/2);
           }else{
            if ((T>vartrans[i][8]*ttttt))
            {context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
        draw3(Math.floor(vartrans[i][0]),Math.floor(vartrans[i][1]),R,vartrans[i][4],vartrans[i][5],0,ab);

             context.fill();
        vartrans[i][0]-=(vartrans[i][2]*tt);
        vartrans[i][1]-=(vartrans[i][3]*tt-0.5*g*tt*tt);
        vartrans[i][3]-=g*tt;
                vartrans[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        vartrans[i][1]+=(Math.random()*piaoyi-piaoyi/2);
            }
           }





         }
        //alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
        //context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
        context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



        context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
        //alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //    //context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        






  }else{
   if (first)
   {
    T=0;
    first=false;
   }
   T++;

  var a=T/2/t0;
         
  if (a>=1)
    a=1;
  if (a<=0)
    a=0;
  
        context.fillStyle = 'rgba(0,0,0,'+abc+')';
        context.fillRect(0,0,960,560); 




        if (T<4*t0)
  
 for (var i=0;i<num;i++)
       { 
        var ab=1;
     //alert(anslist);
        if (T<1.5*t0)
         ab=1;
        else
          ab=1-((T-1.5*t0)*0.1);

  if (ab>=1)
    ab=1;
  if (ab<=0)
    ab=0;


                   //context.fillStyle='rgba('+slist[i][4]+','+slist[i][5]+','+slist[i][6]+','+ab+')';
        //context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,R); 
       // draw(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
          //alert(slist[i][0])+"   "+(slist[i][1]);

          if (T<1.5*t0||slist[i][7])
        {

            if ((T<1.1*t0||Math.random()>0.1)&&(T>slist[i][8]*ttttt))
          {context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
        if (slist[i][9]>=1)
          draw3(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
         else
          draw2(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],slist[i][6],ab);
         
          
             context.fill();

        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
                slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
           }else{
            if ((T>slist[i][8]*ttttt))
            {context.beginPath();
//context.arc(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,0,2*Math.PI);
        draw3(Math.floor(slist[i][0]),Math.floor(slist[i][1]),R,slist[i][4],slist[i][5],0,ab);

             context.fill();
        slist[i][0]-=(slist[i][2]*tt);
        slist[i][1]-=(slist[i][3]*tt-0.5*g*tt*tt);
        slist[i][3]-=g*tt;
                slist[i][0]+=(Math.random()*piaoyi-piaoyi/2);
        slist[i][1]+=(Math.random()*piaoyi-piaoyi/2);
            }
           }





         }
        //alert(num);

       }

      // alert(slist[0][0])+"   "+(slist[0][1]);

      // if (T>t0)
      if (false)
       {

         for (var i=0;i<num;i++)
       { 
        
     //alert(anslist);
         context.fillStyle='rgba(255,255,255,0.3)';
        //context.fillRect(Math.floor(slist[i][0]),Math.floor(slist[i][1]),10,10); 
        context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;



        context.beginPath();
context.arc(Math.floor(nlist[i][0]),Math.floor(nlist[i][1]),R,0,2*Math.PI);
context.fill();
        nlist[i][0]-=(nlist[i][2]*tt);
        nlist[i][1]-=(nlist[i][3]*tt-0.5*g*tt*tt);
        nlist[i][3]-=g*tt;
        //alert(num);

       }















       }

      //  context2.globalAlpha=0.3;
      //  context2.drawImage(can,0,0);

      //   //context3.fillStyle="white"; 
      //    //context3.fillRect(0,0,480,480); 

      //    context3.globalAlpha=0.5;
      //  context3.drawImage(can,0,0);
      // context3.globalAlpha=0.5;
      //  context3.drawImage(can2,0,0);
       //context3.globalAlpha=0.9;
        



if (T>2.3*t0)
{
  window.clearInterval(s1);
  if (ijk<ww.length)
  {ijk++;
    if (ijk<ww.length)
    f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);}
  //s1=window.setInterval(fun1, 100);
}
}
//alert("ss");
}

function f_display(p,w,tpe,col)
{
	T=0;
	x9=col;
  g=0.05;
	p[0]=p[0]-16*15;
    p[1]=p[1]-16*15;
    if (tpe==0)
    {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*15-7.5);
    			var y=(Math.random()*15-7.5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       //	context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num);


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
         v1=(zhixinx-anslist[i][0])/t;
         v2=(zhixiny-anslist[i][1])/t+0.5*g*t;
         var x99=x9+Math.floor(Math.random()*101-50);
            if (x99>359)
            	x99=359;
            else if (x99<0)
            	x99=0;
         slist.push([zhixinx,zhixiny,v1,v2,x99,y9,z9]);
         nlist.push([zhixinx,zhixiny,v1,v2,x99,y9,z9]);
        }
        }



//alert(t);
        

                s1=window.setInterval(fun1, TTT);
               



        
























    }
    else if (tpe==1)
    {
            {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*15-7.5);
    			var y=(Math.random()*15-7.5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       //	context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num);


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
 //var E=0;
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
         v1=(zhixinx-anslist[i][0])/t;
         v2=(zhixiny-anslist[i][1])/t+0.5*g*t;
         //E+=v1*v1+v2*v2;
           var x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;

         slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
         nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
        }
        }


//E=E/num;

  for (var i=0;i<num;i++)
  {
  	//var E1=Math.random()*E;
  	//var E2=Math.random()*E;
  	//var f1=-1;
  	//var f2=-1;
  	//if (Math.random()>0.5)
  		//f1=1;
  	//if (Math.random()>0.5)
  		//f2=1;
         var ff=true;
         while(ff)
         {
         	var xr1=Math.random()*31*15;
         	var xr2=Math.random()*31*15;
         	if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
         		{ff=false;
         		 }

         }
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;

  	     slist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
         nlist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
  }

  num=2*num;




//alert(t);
        

                s1=window.setInterval(fun2, TTT);
               



        
























    }




    }
    else if (tpe==2)
    {
            {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*15-7.5);
    			var y=(Math.random()*15-7.5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       //	context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num);


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
 //var E=0;
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
         v1=(zhixinx-anslist[i][0])/t;
         v2=(zhixiny-anslist[i][1])/t+0.5*g*t;
         //E+=v1*v1+v2*v2;
           var x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;

         slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
         nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
        }
        }


//E=E/num;

  for (var i=0;i<num;i++)
  {
  	//var E1=Math.random()*E;
  	//var E2=Math.random()*E;
  	//var f1=-1;
  	//var f2=-1;
  	//if (Math.random()>0.5)
  		//f1=1;
  	//if (Math.random()>0.5)
  		//f2=1;
         var ff=true;
         while(ff)
         {
         	var xr1=Math.random()*31*15;
         	var xr2=Math.random()*31*15;
         	if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
         		{ff=false;
         		 }

         }
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;

  	     slist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
         nlist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
  }

  num=2*num;




//alert(t);
        

                s1=window.setInterval(fun3, TTT);
               



        
























    }




    }
else if (tpe==3)
    {
            {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*11-5);
    			var y=(Math.random()*11-5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       //	context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num);


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
 //var E=0;
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
         v1=(zhixinx-anslist[i][0])/t;
         v2=(zhixiny-anslist[i][1])/t+0.5*g*t;
         //E+=v1*v1+v2*v2;
           var x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;

         slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
         nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
        }
        }


//E=E/num;

  for (var i=0;i<num;i++)
  {
  	//var E1=Math.random()*E;
  	//var E2=Math.random()*E;
  	//var f1=-1;
  	//var f2=-1;
  	//if (Math.random()>0.5)
  		//f1=1;
  	//if (Math.random()>0.5)
  		//f2=1;
         var ff=true;
         while(ff)
         {
         	var xr1=Math.random()*31*15;
         	var xr2=Math.random()*31*15;
         	if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
         		{ff=false;
         		 }

         }
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;

  	     slist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
         nlist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
  }

  num=2*num;




//alert(t);
        

                s1=window.setInterval(fun4, TTT);
               



        
























    }




    }

else if (tpe==4)
    {
            {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*15-7.5);
    			var y=(Math.random()*15-7.5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       //	context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num);


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
 //var E=0;
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
         v1=(zhixinx-anslist[i][0])/t;
         v2=(zhixiny-anslist[i][1])/t+0.5*g*t;
         //E+=v1*v1+v2*v2;
           var x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;

         slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
         nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true]);
        }
        }


//E=E/num;

  for (var i=0;i<num;i++)
  {
  	//var E1=Math.random()*E;
  	//var E2=Math.random()*E;
  	//var f1=-1;
  	//var f2=-1;
  	//if (Math.random()>0.5)
  		//f1=1;
  	//if (Math.random()>0.5)
  		//f2=1;
         var ff=true;
         while(ff)
         {
         	var xr1=Math.random()*31*15;
         	var xr2=Math.random()*31*15;
         	if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
         		{ff=false;
         		 }

         }
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;

  	     slist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
         nlist.push([zhixinx,zhixiny,v11,v12,x9,y9,z9,false]);
  }

  num=2*num;
var num0=0;
   slist=[];
  for (var i = 0; i < num; i++) {
  	     if (Math.random()>0.2)
  	     {
            num0++;
            slist.push(nlist[i]);
  	     }



  }

  num=num0;




//alert(t);
        

                s1=window.setInterval(fun5, TTT);
               



        
























    }




    }
else if (tpe==5)
    {
            {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*15-7.5);
    			var y=(Math.random()*15-7.5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       //	context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num)*0.5;


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
 //var E=0;
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
        	 var cx=Math.floor(Math.random()*3);
        	 var cx2=Math.floor(Math.random()*4);
         v1=(zhixinx-anslist[i][0])/(t-cx*ttttt);
         v2=(zhixiny-anslist[i][1])/(t-cx*ttttt)+0.5*g*(t-cx*ttttt);
         //E+=v1*v1+v2*v2;
         x9=colo[(ijk+cx)%colo.length];
           var x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;
          

         slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true,cx,cx2]);
         nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true,cx,cx2]);
        }
        }


//E=E/num;

  for (var i=0;i<num;i++)
  {
  	//var E1=Math.random()*E;
  	//var E2=Math.random()*E;
  	//var f1=-1;
  	//var f2=-1;
  	//if (Math.random()>0.5)
  		//f1=1;
  	//if (Math.random()>0.5)
  		//f2=1;
         var ff=true;
         while(ff)
         {
         	var xr1=Math.random()*31*15;
         	var xr2=Math.random()*31*15;
         	if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
         		{ff=false;
         		 }

         }
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;
         var cxc=Math.floor(Math.random()*3);
         var cxc2=Math.floor(Math.random()*4);
         x9=colo[(ijk+cxc)%colo.length];
         var x989=x9+Math.floor(Math.random()*101-50);
            if (x989>359)
            	x989=359;
            else if (x989<0)
            	x989=0;
  	     slist.push([zhixinx,zhixiny,v11,v12,x989,y9,z9,false,cxc,cxc2]);
         nlist.push([zhixinx,zhixiny,v11,v12,x989,y9,z9,false,cxc,cxc2]);
  }

  num=2*num;
var num0=0;
   slist=[];
  for (var i = 0; i < num; i++) {
  	     if (Math.random()>0.2)
  	     {
            num0++;
            slist.push(nlist[i]);
  	     }



  }

  num=num0;




//alert(t);
        

                s1=window.setInterval(fun6, TTT);
               



        
























    }




    }
    else if (tpe==6)
    {
            



            {
    	//产生具体的a
         	for (var i=0;i<32;i++)
 	{
 		for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
 		
      }
  	}






    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
    	for (var  j=0;j<32;j++)
    	{
    		if (a[i][j]==1)
    		{
    			var x=(Math.random()*15-7.5);
    			var y=(Math.random()*15-7.5);
    			anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
    			num++;
    		}
    	}
assignments=[];
 for (var i=0;i<num;i++)
 {
  if  (i<num/3)
  assignments.push(0);
else if  (i<num*2/3)
  assignments.push(1);
else 
  assignments.push(2);
 // data.push([anslist[i][0],anslist[i][1]]);
 }
//求解质心
var xx0=0;
var yy0=0;

var xx1=0;
var yy1=0;

var xx2=0;
var yy2=0;
 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       	//context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     if (assignments[i]==0)
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        else if(assignments[i]==1)
          {xx1+=anslist[i][0];
        yy1+=anslist[i][1];}
        else {xx2+=anslist[i][0];
        yy2+=anslist[i][1];}
        

       }

var zhixin0x=(xx0/(num/3));
var zhixin0y=(yy0/(num/3));

var zhixin1x=(xx1/(num/3));
var zhixin1y=(yy1/(num/3));

var zhixin2x=(xx2/(num/3));
var zhixin2y=(yy2/(num/3));
 slist=[];
 nlist=[];
 //alert(xx0+"  "+yy0);
for (var i=0;i<num;i++)
{
	        	 var cx=Math.floor(Math.random()*3);
        	 var cx2=Math.floor(Math.random()*4);
        	 var x98=0;
if (i<(num/3))
        {
          v1=(zhixin0x-anslist[i][0])/(t-cx*ttttt);
         v2=(zhixin0y-anslist[i][1])/(t-cx*ttttt)+0.5*g*(t-cx*ttttt);
         x9=colo[(ijk+cx)%colo.length];
         x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;
         slist.push([zhixin0x,zhixin0y,v1,v2,x98,y9,z9,true,cx,cx2]);
        nlist.push([zhixin0x,zhixin0y,v1,v2,x98,y9,z9,true,cx,cx2]);
       }
       else if (i<(num*2/3))
        {
          v1=(zhixin1x-anslist[i][0])/(t-cx*ttttt);
         v2=(zhixin1y-anslist[i][1])/(t-cx*ttttt)+0.5*g*(t-cx*ttttt);
         x9=colo[(ijk+cx)%colo.length];
         x98=x9+Math.floor(Math.random()*101-50);
         if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;
         slist.push([zhixin1x,zhixin1y,v1,v2,x98,y9,z9,true,cx,cx2]);
        nlist.push([zhixin1x,zhixin1y,v1,v2,x98,y9,z9,true,cx,cx2]);
       }
       else 
        {
          v1=(zhixin2x-anslist[i][0])/(t-cx*ttttt);
         v2=(zhixin2y-anslist[i][1])/(t-cx*ttttt)+0.5*g*(t-cx*ttttt);
         x9=colo[(ijk+cx)%colo.length];
         x98=x9+Math.floor(Math.random()*101-50);
         if (x98>359)
            	x98=359;
            else if (x98<0)
            	x98=0;
         slist.push([zhixin2x,zhixin2y,v1,v2,x98,y9,z9,true,cx,cx2]);
        nlist.push([zhixin2x,zhixin2y,v1,v2,x98,y9,z9,true,cx,cx2]);
       }
}

//确定粒子初速度，颜色，等

 //var E=0;
// for (var i=0;i<num;i++)
//        { 
//         var v1;
//         var v2;
      
//         {
//         	 var cx=Math.floor(Math.random()*3);
//         	 var cx2=Math.floor(Math.random()*4);
//          v1=(zhixinx-anslist[i][0])/(t-cx*ttttt);
//          v2=(zhixiny-anslist[i][1])/(t-cx*ttttt)+0.5*g*(t-cx*ttttt);
//          //E+=v1*v1+v2*v2;
//          x9=colo[(ijk+cx)%colo.length];
//            var x98=x9+Math.floor(Math.random()*101-50);
//             if (x98>359)
//             	x98=359;
//             else if (x98<0)
//             	x98=0;
          

//          slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true,cx,cx2]);
//          nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true,cx,cx2]);
//         }
//         }


//E=E/num;

  for (var i=0;i<num;i++)
  {
  	//var E1=Math.random()*E;
  	//var E2=Math.random()*E;
  	//var f1=-1;
  	//var f2=-1;
  	//if (Math.random()>0.5)
  		//f1=1;
  	//if (Math.random()>0.5)
  		//f2=1;
         var ff=false;
         while(ff)
         {
         	var xr1=Math.random()*31*15;
         	var xr2=Math.random()*31*15;
         	if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
         		{ff=false;
         		 }

         }
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;
         var cxc=Math.floor(Math.random()*3);
         var cxc2=Math.floor(Math.random()*4);
         x9=colo[(ijk+cxc)%colo.length];
         var x989=x9+Math.floor(Math.random()*101-50);
            if (x989>359)
            	x989=359;
            else if (x989<0)
            	x989=0;
  	     slist.push([zhixinx,zhixiny,v11,v12,x989,y9,z9,false,cxc,cxc2]);
         nlist.push([zhixinx,zhixiny,v11,v12,x989,y9,z9,false,cxc,cxc2]);
  }

  num=num;
var num0=0;
   slist=[];
  for (var i = 0; i < num; i++) {
  	     if (Math.random()>0.2)
  	     {
            num0++;
            slist.push(nlist[i]);
  	     }



  }

  num=num0;




//alert(t);
                TT=0;
                //TTX=65;

                s1=window.setInterval(fun6, TTT);
               



        
























    }




    }else if (tpe==7)
    {
      g=0.01;
      TTX=60;
      //t=40;//烟火文字时间
      //t0=20;//追及时间
            {
      //产生具体的a
          for (var i=0;i<32;i++)
  {
    for (var k=0;k<4;k++)
      {var ha=change(w[i*4+k]);
      for (var j=0;j<8;j++)
      {
        a[i][k*8+j]=ha[j];
      }
    
      }
    }

    var data=[];//烟花关键位置
    var anslist=[];//随机烟花关键位置
     num=0; //有效烟花粒子数
       for (var i=0;i<32;i++)
      for (var  j=0;j<32;j++)
      {
        if (a[i][j]==1)
        {
          var x=(Math.random()*15-7.5);
          var y=(Math.random()*15-7.5);
          anslist.push([j*15+x+p[0],i*15+y+p[1]]);
                data.push([j*15,i*15]);
          num++;
        }
      }

//求解质心
var xx0=0;
var yy0=0;


 for (var i=0;i<num;i++)
       { 
        //context.fillStyle="black"; 
       // context.fillRect(Math.floor(anslist[i][0]),Math.floor(anslist[i][1]),R,R); 
     //alert(anslist);
     
        {xx0+=anslist[i][0];
        yy0+=anslist[i][1];}
        
        

       }



var zhixinx=(xx0/num);
var zhixiny=(yy0/num);


//确定粒子初速度，颜色，等
 slist=[];
 nlist=[];
 //var E=0;
for (var i=0;i<num;i++)
       { 
        var v1;
        var v2;
      
        {
           var cx=Math.floor(Math.random()*3);
           var cx2=Math.floor(Math.random()*4);
         v1=(zhixinx-anslist[i][0])/(t-cx*ttttt);
         v2=(zhixiny-anslist[i][1])/(t-cx*ttttt)+0.5*g*(t-cx*ttttt);
         //E+=v1*v1+v2*v2;
         x9=colo[(ijk+cx)%colo.length];
           var x98=x9+Math.floor(Math.random()*101-50);
            if (x98>359)
              x98=359;
            else if (x98<0)
              x98=0;
          

         slist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true,cx,cx2]);
         nlist.push([zhixinx,zhixiny,v1,v2,x98,y9,z9,true,cx,cx2]);
        }
        }


//E=E/num;

  for (var i=0;i<num;i++)
  {
    //var E1=Math.random()*E;
    //var E2=Math.random()*E;
    //var f1=-1;
    //var f2=-1;
    //if (Math.random()>0.5)
      //f1=1;
    //if (Math.random()>0.5)
      //f2=1;
         var ff=true;
         while(ff)
         {
          var xr1=Math.random()*31*15;
          var xr2=Math.random()*31*15;
          if ((xr1-31*15/2)*(xr1-31*15/2)+(xr2-31*15/2)*(xr2-31*15/2)<(31*15/2)*(31*15/2))
            {ff=false;
             }

         }
         anslist.push([xr1+p[0],xr2+p[1]]);
         var v11=(zhixinx-xr1-p[0])/t;
         var v12=(zhixiny-xr2-p[1])/t+0.5*g*t;
         var cxc=Math.floor(Math.random()*3);
         var cxc2=Math.floor(Math.random()*4);
         x9=colo[(ijk+cxc)%colo.length];
         var x989=x9+Math.floor(Math.random()*101-50);
            if (x989>359)
              x989=359;
            else if (x989<0)
              x989=0;
         slist.push([zhixinx,zhixiny,v11,v12,x989,y9,z9,false,cxc,cxc2]);
         nlist.push([zhixinx,zhixiny,v11,v12,x989,y9,z9,false,cxc,cxc2]);
  }

  num=2*num;
var num0=0;
   slist=[];
   vartrans=[];
  for (var i = 0; i < num; i++) {
         if (Math.random()>0.8)
         {
            num0++;
            slist.push(i);
            vartrans.push([nlist[i][0],nlist[i][1],nlist[i][2],nlist[i][3],nlist[i][4],nlist[i][5],nlist[i][6],nlist[i][7],nlist[i][8],nlist[i][9]]);
         }



  }

  //alert(vartrans);


var numnum=num;
  num=num0;
  //alert(numnum+"  "+num);
for (var ic=0;ic<numnum;ic++)
{
  var  minx=0;
  //var  miny=1000;
  var dis=10000000;
  for (var j=0;j<num;j++)
  {
    var xxz=(anslist[ic][0]-anslist[slist[j]][0])*(anslist[ic][0]-anslist[slist[j]][0])+(anslist[ic][1]-anslist[slist[j]][1])*(anslist[ic][1]-anslist[slist[j]][1]);
       if (xxz<dis)
       {
        dis=xxz;
        minx=j;
       }
  }
    var vv1=(anslist[slist[minx]][0]-anslist[ic][0])/(t-nlist[ic][8]*ttttt);
    var vv2=(anslist[slist[minx]][1]-anslist[ic][1])/(t-nlist[ic][8]*ttttt)+0.5*g*(t-nlist[ic][8]*ttttt);



   nlist[ic][0]=anslist[slist[minx]][0];
    nlist[ic][1]=anslist[slist[minx]][1]; 
     nlist[ic][2]=vv1;
      nlist[ic][3]=vv2;



     


}
slist=[];
for (var i=0;i<numnum;i++)
{slist.push(nlist[i]);}
g=0.05;
//t=40;//烟火文字时间
//t0=20;//追及时间



//alert(slist);
        num=numnum;
                TT=0;
                TTX=65;
                s1=window.setInterval(fun7, TTT);
               



        
























    }




    }
}

onload=function(){
   init_a();
   //alert(a);
  // for (var i=0;i<ww.length;i++)
 // for (var i=0;i<3;i++)
   //{
   	if (ijk<ww.length)
   	f_display(po[ijk],ww[ijk],tp[ijk],colo[ijk]);
   //}

}
