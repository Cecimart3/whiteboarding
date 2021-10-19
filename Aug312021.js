// whos richest?
const customers = [[3,4], [5,6], [1,5]]

const richest = customers => Math.max(...customers.map(
    customer => customer.reduce((acc, curr) => acc + curr)))

    // find length of object
    const objectLength = object => Object.keys(object).length