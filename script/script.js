let corAtual = document.body.style.backgroundColor
const corAlternada = '#f0eded'
const textos = document.getElementsByClassName('texto')

function alternarCor() {
    if (document.body.style.backgroundColor === corAtual) {
        document.body.style.backgroundColor = corAlternada
        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = 'black'
        }
    } else {
        document.body.style.backgroundColor = corAtual
        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = 'white'
        }
    }
}
