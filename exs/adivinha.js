function pulaLinha() {
     document.write("</br>")
     document.write("</br>")
}

function mostra(frase) {
     document.write(frase)
     pulaLinha()
}

var numeroPensado = Math.round(Math.random() * 10)

var tentativas = 1

while (tentativas <= 3) {
     var chute = parseInt(prompt("digite seu chute!"))
     if (chute = numeroPensado) {
          mostra("acertou miseravi!")
     } else {
          mostra("errou cabaço!")
     }
     mostra("tenta de novo burrão")
}
