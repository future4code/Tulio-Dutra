// a) e b)

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c)

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas
}

