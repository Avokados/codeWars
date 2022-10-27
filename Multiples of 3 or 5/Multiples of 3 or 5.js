let interval = 10

function Multiples(interval) {
    let sum = 0
    for (let i = 0; i <= interval; i++) {
        if (i != 0 && i % 3 === 0 || i % 5 === 0) {
            sum = sum + i
            console.log(`Итерация №${i}: ${sum} + ${i} = ${sum + i}`)
        }
    }
    return sum;
}

console.log(Multiples(interval))