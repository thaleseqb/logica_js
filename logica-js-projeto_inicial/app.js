
alert("Jogo do número secreto está a sua frente");
let secret_number = parseInt(Math.random()*100 + 1);

console.log(secret_number);
let value;
let c = 1

// Enquanto o numero secreto não for igual ao valor selecionado 
// pelo jogador é necessário fornecer outro numero

while (value != secret_number) {
  value = prompt("Escolha um número entre 1 e 100");
  
  if (secret_number == value) {
    break;
  } else  {
    if (value>secret_number) {
      alert(`O numero secreto é menor que ${value}`);
  
    } else {
      alert(`O numero secreto é maior que ${value}`);
    }
    c++
  }
}

// adicionando operador ternário
let correct_attempt = c == 1 ? 'tentativa': 'tentativas' 
alert(`número secreto encontrado, ${secret_number}. Depois de ${c} ${correct_attempt}`);
