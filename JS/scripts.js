function foco(idDiv) {
    const exercicio = document.getElementsByClassName('divExercicio')
    for (let i = 0; i < exercicio.length; i++) {
        exercicio[i].style.display = 'none'
}
    document.getElementById(idDiv).style.display = 'block'
}

function exercicio1() {
    let salario = Number(document.querySelector("#salario").value)
    let porcentagemAumento = Number(document.querySelector("#porcentagemAumento").value)

    document.querySelector("#nSalario").innerHTML = `O novo salário do funcionário é de: R$${salario + salario*porcentagemAumento/100}`
}

let exercicio2 = () => {
    let base = Number(document.querySelector("#base").value)
    let altura = Number(document.querySelector("#altura").value)

    document.querySelector("#resultado2").value = `Área = ${base * altura / 2} cm²`
} 

function exercicio3() {
    let nota1 = Number(document.querySelector("#nota1").value)
    let nota2 = Number(document.querySelector("#nota2").value)

    document.querySelector("#resultado3").innerHTML = `A média ponderada é de ${nota1 * 0.3 + nota2 * 0.7} pontos`
}

let exercicio4 = () => {
    const anoNascimento = document.querySelector("#dataNascimento").value
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth()
    const diaAtual = dataAtual.getDay()
    const horaAtual = dataAtual.getHours()
    const minutosAtuais = dataAtual.getMinutes()

    const idadeAnos =  anoAtual - anoNascimento
    const idadeMeses = idadeAnos * 12 + mesAtual
    const idadeDias = Math.floor(idadeAnos * 365.25 + (mesAtual - 2) * 30.5 + 28 + diaAtual)
    const idadeHoras = idadeDias * 24 + horaAtual
    const idadeMinutos = idadeHoras * 60 + minutosAtuais
    const idadeSemanas = Math.floor(idadeDias / 7)
    const idade2050 = 2050 - anoNascimento

    const mensagem = `Idade aproximada de: \n${idadeAnos} anos, ou ${idadeMeses} meses, ou ${idadeSemanas} semanas, \nou ${idadeDias} dias, ou ${idadeHoras} horas, ou ${idadeMinutos} minutos. \nIdade aproximada em 2050: ${idade2050} anos`
    window.alert(`Mensagem exibida no console: \n${mensagem}`)
    console.log (mensagem)
}

function exercicio5() {
    const distancia = Number(document.querySelector("#distancia").value)
    const volume = Number(document.querySelector("#volume").value)

    let consumoMedio = distancia/volume

    window.alert(`O consumo médio foi de ${consumoMedio} Km/L`)
}

const exercicio6 = () => {
    let horasTrabalhadas = Number(document.querySelector("#horasTrabalhadas").value)
    let valorHora = Number(document.querySelector("#valorHora").value)
    let qtdRefeicoes = Number(document.querySelector("#qtdRefeicoes").value)
    const valorRefeicao = 1.5
    let salario = 0

    if (horasTrabalhadas > 40) {
        salario = (horasTrabalhadas - 40)*3*valorHora + horasTrabalhadas * valorHora
    }
    else {
        salario = horasTrabalhadas * valorHora
    }

    resposta6 = `O valor do salário bruto é de R$${salario}.\nO valor descontado pelo total de refeições é de: R$${qtdRefeicoes * valorRefeicao}\nO salário líquido é de R$${salario - qtdRefeicoes * valorRefeicao}`

    document.querySelector("#resposta6").innerHTML = resposta6
}

function exercicio7() {
    rand = Math.floor(Math.random() * 100) + 1

    document.querySelector("#nRand").innerHTML = rand

    rand % 2 == 0 ? document.querySelector("#parImpar").innerHTML = "O número é par" : document.querySelector("#parImpar").innerHTML = "O número é impar"
    
    console.log(rand)
}