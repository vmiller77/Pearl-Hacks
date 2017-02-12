//call the json to load
$.getJSON("https://raw.githubusercontent.com/vmiller77/Pearl-Hacks/master/womanBank.json", function(data) {
    //data is the JSON string

   	var woman=[];
   	$.each(data,function(key,val){
   		woman.push(val);
   	});

var d = new Date(); 
var t = d.getTime(); 
var days = Math.floor(t / (50000));

var i = days % woman.length; 
var today = woman[i].name;
var todayImg = woman[i].img;
var todayDescr = woman[i].description;

var nameBox = document.createElement("DIV");
var nameBoxHeader=document.createElement("H");
nameBoxHeader.style.display="block"; 
nameBoxHeader.style.fontSize="1.5em";
nameBoxHeader.style.margin="0.83em";
nameBoxHeader.style.fontWeight="bold";
nameBoxHeader.style.textAlign="center";
var nameText=document.createTextNode(today);
nameBoxHeader.appendChild(nameText);
nameBox.appendChild(nameBoxHeader);
var box = document.getElementsByClassName("box");
box[0].appendChild(nameBox);
var imgBoxHeader=document.createElement("H");
var img = document.createElement("IMG");
imgBoxHeader.appendChild(img);
img.src=woman[i].img;
img.style.height="200px";
box[1].appendChild(imgBoxHeader);
imgBoxHeader.style.paddingLeft="100px"

var box2 = document.getElementsByClassName("box2");
var desBox = document.createElement("DIV");
var desBoxHeader=document.createElement("H");
desBoxHeader.style.display="block"; 
desBoxHeader.style.fontSize="1.5em";
desBoxHeader.style.margin="0.83em";
desBoxHeader.style.fontWeight="bold";
var desText=document.createTextNode(todayDescr);
desBoxHeader.appendChild(desText);
desBox.appendChild(desBoxHeader);
box2[0].appendChild(desBox);

});


