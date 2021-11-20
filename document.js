const button = document.getElementById('confirm');
var valor = 0;
var play = document.createElement("h1")

function inputUser () {
  valor = document.getElementById('valor').value;
  
  // valor = typeof valor === "string" ? 0 : valor
  valor = valor > 30 ? 30 : valor;
  valor = valor < 0 ? 0 : valor;

  // [dustHigh, dustLow] = sand(valor);

  display2(valor)

  // setInterval (async () => {
  //   dustHigh[valor - 1] = " ";
  //   dustLow[valor - 1] = "x";
  //   valor -=1;
  //   display(valor);
  //   if(valor === 0) {
  //     clearInterval();
  //     alert("acabou");
  //   }
  // }, 1000);

}

// function display ({dustHigh, dustLow}) {
//   const pre2 = document.getElementById("2");
//   const pre3 = document.getElementById("3");
//   const pre4 = document.getElementById("4");
//   const pre5 = document.getElementById("5");
//   const pre6 = document.getElementById("6");
//   const pre7 = document.getElementById("7");
//   const pre8 = document.getElementById("8");
//   const pre9 = document.getElementById("9");
//   const pre10 = document.getElementById("10");
//   const pre11 = document.getElementById("11");
  
//   pre2.textContent= `##${dustHigh[20]}${dustHigh[21]}${dustHigh[22]}${dustHigh[23]}${dustHigh[24]}${dustHigh[25]}${dustHigh[26]}${dustHigh[27]}${dustHigh[28]}${dustHigh[29]}##`;
//   pre3.textContent= `# #${dustHigh[12]}${dustHigh[13]}${dustHigh[14]}${dustHigh[15]}${dustHigh[16]}${dustHigh[17]}${dustHigh[18]}${dustHigh[19]}# #`;
//   pre4.textContent= `#  #${dustHigh[6]}${dustHigh[7]}${dustHigh[8]}${dustHigh[9]}${dustHigh[10]}${dustHigh[11]}#  #`;
//   pre5.textContent= `#   #${dustHigh[2]}${dustHigh[3]}${dustHigh[4]}${dustHigh[5]}#   #`;
//   pre6.textContent= `#    #${dustHigh[0]}${dustHigh[1]}#    #`;
//   pre7.textContent= `#    #${dustLow[0]}${dustLow[1]}#    #`;
//   pre8.textContent= `#   #${dustLow[2]}${dustLow[3]}${dustLow[4]}${dustLow[5]}#   #`;
//   pre9.textContent= `#  #${dustLow[6]}${dustLow[7]}${dustLow[8]}${dustLow[9]}${dustLow[10]}${dustLow[11]}#  #`;
//   pre10.textContent= `# #${dustLow[12]}${dustLow[13]}${dustLow[14]}${dustLow[15]}${dustLow[16]}${dustLow[17]}${dustLow[18]}${dustLow[19]}# #`;
//   pre11.textContent= `##${dustLow[20]}${dustLow[21]}${dustLow[22]}${dustLow[23]}${dustLow[24]}${dustLow[25]}${dustLow[26]}${dustLow[27]}${dustLow[28]}${dustLow[29]}##`;

// }

function display2(valor) {
  var n = nColumns(valor)
  var [dustHigh] = sand(valor, n)
  dustHigh.push("#")
  dustHigh.unshift("#")
  var node = document.createTextNode(dustHigh)
  play.appendChild(node)
  document.body.appendChild(play)
}

function nColumns (valor, n=0) {
  if (valor > 0) {
    valor -=  2 * n
    n += 1
    return nColumns(valor, n)
  } else {
    n -= 1
    return n
  }
}

function sand (valor, n) {
  const len = length(n)
  var dustHigh = new Array(len);
  var dustLow = new Array(len);
  console.log(len, valor)
  for (var i = 0; i < len; i++) {
    if (valor >= 0) {
      dustHigh[i] = "x";
      dustLow[i] = " ";
      valor--;
    } else {
      dustHigh[i] = " ";
      dustLow[i] = "x";
    }
    
  }
  return [dustHigh, dustLow];
}

function length (n, len=0) {
  if (n > 0) {
    len += n * 2;
    n -= 1;
    return length(n, len)
  } else {
    return len
  }
}


var [dustHigh, dustLow] = sand(valor);
// display2({dustHigh, dustLow});
button.onclick = () => inputUser();