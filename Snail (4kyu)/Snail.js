snail = function (array) {
    // Функция "поворачивающая" двумерный массив против часовой стрелки
    const trans = (array) => {
        let newarr = []
        let a = array
        for (let i = 0; i < array[0].length; i++) {
            newarr[i] = []
            for (let j = 0; j < array.length; j++) {
                newarr[i].push(array[j][array[j].length - 1 - i])
            }
        }
        return newarr
    }
    let result = []
    while (array.length != 0) {
        result.push(array[0])
        array.splice(0, 1)
        if (array.length != 0) {
            array = trans(array)
        }
    }
    let result1 = result.reduce(function (a, b) {
        return a.concat(b);
    });
    return result1
}