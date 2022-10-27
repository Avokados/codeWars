let data = [[45, 12],[55,21],[19, -2],[104, 20]]

function categorizeNewMember(data) {
    let result = []
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            result.push('Senior')
        } else {
            result.push('Open')
        }
    }
    
    return result
}

console.log(categorizeNewMember(data))
console.log('a'+'a')