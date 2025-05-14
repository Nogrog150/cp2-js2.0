const input = document.querySelector("#aa-input")
const p = document.querySelector("#aa-p")
const resultado = document.createElement('p')
p.after(resultado)

let numeros = []

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        numeros.unshift(input.value)
        atualizandoValorDaConta()
        input.value = ''
    }
})

function identificarPadrao(nums) {
    if (nums.length < 3) return 'Insira pelo menos 3 números.'

    // Converte para números
    const arr = nums.map(Number)
    const [a, b, c] = arr

    // Verifica PA
    const razaoPA = b - a
    if (arr.every((val, i, arr) => i === 0 || arr[i] - arr[i-1] === razaoPA)) {
        return `Progressão Aritmética (razão = ${razaoPA})`
    }

    // Verifica PG (razão inteira positiva)
    if (a !== 0 && b % a === 0 && c % b === 0) {
        const razaoPG = b / a
        if (arr.every((val, i, arr) => i === 0 || arr[i-1] !== 0 && arr[i] / arr[i-1] === razaoPG)) {
            return `Progressão Geométrica (razão = ${razaoPG})`
        }
    }

    return 'Padrão Personalizado'
}

function atualizandoValorDaConta() {
    p.textContent = numeros.join(' ')
    if (numeros.length >= 3) {
        resultado.textContent = identificarPadrao([...numeros].reverse())
    } else {
        resultado.textContent = ''
    }
}