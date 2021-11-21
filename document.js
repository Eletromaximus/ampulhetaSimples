const button = document.getElementById('confirm');
var valor = 0;
var play = document.createElement("h1")

function inputUser () {
  valor = document.getElementById('valor').value;
  var valor2=0;

  if (valor > 0) {
    button.disabled = true;
  
    const Id = setInterval (() => {
      display2(valor, valor2);
      valor--;
      valor2++;
  
      if(valor < 0) {
        clearInterval(Id);
        button.disabled = false;
      }
    }, 1000);
  }

}

function display2(valor, valor2) {
  var element = document.querySelector('div');
  if (element){
    element.parentNode.removeChild(element);
  }

  const total = parseInt(valor) + parseInt(valor2);
  var n = nColumns(total);
  var [dustHigh, dustLow] = sand(valor, valor2, n);
  var hight = new Array(n * 2);
  var low = new Array(n * 2);
  var html = [];
  var acumulador =0;


  for (var k=n; k > 0; k--) {
    for (var i=0; i < (k * 2) ; i++) {
      acumulador++;
      hight[2 * k - i - 1] = `${
        dustHigh[dustHigh.length - acumulador
      ]}`;
    }
    html += "<pre>#" + hight.join("") + "#</pre>";
    hight = [];
  }
  
  acumulador = 0;
  
  for (var k=1; k <= n; k++) {
    for (var i=0; i < (k * 2) ; i++) {
      low[i] = `${dustLow[acumulador]}`;
      acumulador++;
    }
    html += "<pre>#" + low.join("") + "#</pre>";
    low = [];
  }

  acumulador = 0;
  var div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);
  div.style.display = "flex";
  div.style.flexDirection = "column"
  div.style.justifyContent = "center";
  div.style.alignContent = "center";
}


function nColumns (valor, n=0) {
  if (valor > 0) {
    valor -=  2 * n;
    n += 1;
    return nColumns(valor, n);
  } 
  else {
    n -= 1;
    return n;
  }
}

function sand (valor, valor2, n) {
  const len = length(n);
  var dustHigh = new Array(len);
  var dustLow = new Array(len);

  for (var i = 0; i < len; i++) {
    if (valor > 0) {
      dustHigh[i] = "x";
      valor--;
    } 
    else {
      dustHigh[i] = " ";
    }
  }
  for (var i = 0; i < len; i++) {
    if (valor2 > 0) {
      dustLow[i] = "x";
      valor2--;
    }
    else {
      dustLow[i] = " ";
    }
  }
  return [dustHigh, dustLow];
}

function length (n, len=0) {
  if (n > 0) {
    len += n * 2;
    n -= 1;
    return length(n, len);
  } 
  else {
    return len;
  }
}

button.onclick = () => inputUser();