function generateqr(){
    //driver details
var name=document.getElementById('name').value;
//console.log('name: '+name);
var dob=document.getElementById('dob').value;
//console.log('dob: '+dob);
var age=document.getElementById('age').value;
//console.log('age: '+age);
var male=document.getElementById('male').value;
//console.log('male: '+male);
var female=document.getElementById('female').value;
//console.log('female: '+female);
var phone=document.getElementById('phone').value;
//console.log('phone: '+phone);
var email=document.getElementById('email').value;
//console.log('email: '+email);
var start=document.getElementById('start').value;
//console.log('start: '+start);
var end=document.getElementById('end').value;
//console.log('end: '+end);

//vehicle document:-

var no=document.getElementById('no').value;
//console.log('no: '+no);
var rc=document.getElementById('rc').value;
//console.log('rc: '+rc);
var In=document.getElementById('In').value;
//console.log('In: '+In);
var puc=document.getElementById('puc').value;
//console.log('puc: '+puc);
var vf=document.getElementById('vf').value;
//console.log('vf: '+vf);
var ac=document.getElementById('ac').value;
//console.log('ac: '+ac);
var mv=document.getElementById('mv').value;
//console.log('mv: '+mv);

var url ="https://chart.googleapis.com/chart?cht=qrchs=<200>x<200>chl=http://127.0.0.1:5500/index.html";

var ifr= `<iframe src="${url}" height="200" width="200"></frame>`;

document.getElementById('qrcode').innerHTML=ifr;
}