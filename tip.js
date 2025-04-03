function calculateTip() {
  var bilL = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var numOfPeople = document.getElementById("numb_people").value;
  var total_bill= document.getElementById("bill").value;

  if(bilL===" "|| service== 0){
    alert("Please enter values!!!");
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

var total = (bilL * service) / numOfPeople;
 total=total+total_bill/numOfPeople;
 total = (Math.round(total * 100) / 100);
 total = total.toFixed(2);
 document.getElementById("totalTip").style.display="block";
 document.getElementById("tip").innerHTML=total;}

 document.getElementById("calculate").onclick = function() {
  calculateTip();

};
