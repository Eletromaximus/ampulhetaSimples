const button = document.getElementById('confirm');

function inputUser () {

  var valor = document.getElementById('valor').value;


  vetor = vetorSand(valor);

  var pre2 = document.getElementById("2")
  var pre3 = document.getElementById("3")
  var pre4 = document.getElementById("4")
  var pre5 = document.getElementById("5")
  var pre6 = document.getElementById("6")
  
  // pre2.textContent=vetor[1]
  // pre3.textContent=vetor[2]
  // pre4.textContent=vetor[3]
  // pre5.textContent=vetor[4]
  // pre6.textContent=vetor[5]
  // pre3.textContent(vetor[1])
  // pre4.textContent(vetor[2])
  // pre5.textContent(vetor[4])
  pre6.textContent = `#    #${vetor[0]}${vetor[1]}#    #`  
}

function vetorSand (valor) {
  var dust = new Array(30)
  
  for (var i = 0; i < 30; i++) {
    if (valor > 0) {
      dust[i] = "#"
    } else {
      dust[i] = " "
    }
    valor=valor--;
  }
  console.log(dust, valor)
  return dust
}

button.onclick = () => inputUser()