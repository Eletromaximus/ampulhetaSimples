const button = document.getElementById('confirm');

function inputUser () {

  var valor = document.getElementById('valor').value;

  const {dustHigh, dustLow} = sand(valor);
  console.log(dustHigh, dustLow)

  const pre2 = document.getElementById("2")
  const pre3 = document.getElementById("3")
  const pre4 = document.getElementById("4")
  const pre5 = document.getElementById("5")
  const pre6 = document.getElementById("6")
  const pre7 = document.getElementById("7")
  const pre8 = document.getElementById("8")
  const pre9 = document.getElementById("9")
  const pre10 = document.getElementById("10")
  const pre11 = document.getElementById("11")
  
  pre2.textContent= `##${dustHigh[20]}${dustHigh[21]}${dustHigh[22]}${dustHigh[23]}${dustHigh[24]}${dustHigh[25]}${dustHigh[26]}${dustHigh[27]}${dustHigh[28]}${dustHigh[29]}##`
  pre3.textContent= `# #${dustHigh[12]}${dustHigh[13]}${dustHigh[14]}${dustHigh[15]}${dustHigh[16]}${dustHigh[17]}${dustHigh[18]}${dustHigh[19]}# #`
  pre4.textContent= `#  #${dustHigh[6]}${dustHigh[7]}${dustHigh[8]}${dustHigh[9]}${dustHigh[10]}${dustHigh[11]}#  #`
  pre5.textContent= `#   #${dustHigh[2]}${dustHigh[3]}${dustHigh[4]}${dustHigh[5]}#   #`
  pre6.textContent= `#    #${dustHigh[0]}${dustHigh[1]}#    #`;
  pre7.textContent= `#    #${dustLow[0]}${dustLow[1]}#    #`;
  pre8.textContent= `#   #${dustLow[2]}${dustLow[3]}${dustLow[4]}${dustLow[5]}#   #`
  pre9.textContent= `#  #${dustLow[6]}${dustLow[7]}${dustLow[8]}${dustLow[9]}${dustLow[10]}${dustLow[11]}#  #`
  pre10.textContent= `# #${dustLow[12]}${dustLow[13]}${dustLow[14]}${dustLow[15]}${dustLow[16]}${dustLow[17]}${dustLow[18]}${dustLow[19]}# #`
  pre11.textContent= `##${dustLow[20]}${dustLow[21]}${dustLow[22]}${dustLow[23]}${dustLow[24]}${dustLow[25]}${dustLow[26]}${dustLow[27]}${dustLow[28]}${dustLow[29]}##`
}
function sand (valor) {
  var dustHigh = new Array(30)
  var dustLow = new Array(30)
  
  for (var i = 0; i < 30; i++) {
    if (valor > 0) {
      dustHigh[i] = "x"
      dustLow[i] = " "
      valor=--valor;
    } else {
      dustHigh[i] = " "
      dustLow[i] = "x"
    }
    
  }
  return {dustHigh, dustLow}
}

button.onclick = () => inputUser()