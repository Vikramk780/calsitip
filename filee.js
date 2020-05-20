document.getElementById("buttonn").onclick=function calculateTip(){
var totalBill=document.getElementById("textboxx1").value;
var serviceResponse=document.getElementById("dropbox1").value;
var numberOfPeople=document.getElementById("textboxx2").value;  

if(totalBill==="" || serviceResponse===""){
alert("please enter valid details");
 }
 if(totalBill==0 || totalBill<=1 ){
	 totalBill=1;
 }
 if(numberOfPeople===0 || numberOfPeople==""){
	 
 alert("please enter valid details");
 }
 
 
 var calculated=(totalBill*serviceResponse)/numberOfPeople;
 calculated=Math.round(calculated);
 document.getElementById("msg").innerHTML=calculated;
}

