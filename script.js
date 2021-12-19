function compute()
{
    var  p = document.getElementById("principal").value;
    var  r = document.getElementById("rate").value;
	var  n = document.getElementById("years").value;
	var year = new Date().getFullYear()+parseInt(n);
	
	var i=r/100;
	var y=p*i*n;
	
	
		 
		
		if(p <= 0){
			 alert("Enter a positive number");
			 location.reload();
			}
		else{
			document.getElementById("result").innerHTML= "If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+r+"</mark>%\<br\>You will receive an amount of <mark>"+y+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
		}
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("ratePrompt").innerText=rateval+"%";
}
 
function validatePrompt(){ //principal validation
		var vName = document.getElementById("principal").value;
		
		
		if(vName > 0){
			document.getElementById("principalPrompt").style.color = "green";
			document.getElementById("principalPrompt").innerHTML = "<strong>Valid </strong>";
			return true;
			}
		// No else condition, because the alert prompt did the job
	
	}
