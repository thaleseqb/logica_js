alert("Jogo do número secreto está a sua frente");
let secret_number = 8;

console.log(secret_number)
let value

// Enquanto o numero secreto não for igual ao valor selecionado 
// pelo jogador é necessário fornecer outro numero

while (value != secret_number){
  value = prompt("Escolha um número entre 1 e 30");
  
  if (secret_number == value) {
    alert(`número secreto encontrado, ${secret_number}`);
  } else  {
    if (value>secret_number) {
      alert(`O numero secreto é menor que ${value}`);
  
    } else {
      alert(`O numero secreto é maior que ${value}`)
    }
  }
}

