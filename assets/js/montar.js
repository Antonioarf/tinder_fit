document.addEventListener('DOMContentLoaded', function() {
 	let params = coDesExtract()
 	let jogo = params['atv']
 	console.log(params);
 	console.log(jogo);
 	console.log("vamo la meu querido");

// // var inputEmail= document.getElementById("email");
// // localStorage.setItem("email", inputEmail.value);
function myFunction2() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace("jogo", params['atv']);
  document.getElementById("demo").innerHTML = res;
}
	myFunction2()

})
