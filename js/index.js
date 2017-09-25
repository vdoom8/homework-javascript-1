const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));

function disc(a, b, c) {
    return b * b - 4 * a * c;
}

function solveQuadr(a, b, c) {
    const d = disc(a, b, c);
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'x1 = ' + x1 + ', x2 = ' + x2;
    } else if (d === 0) {
        const x = (-b) / (2 * a);
    } else {
        return 'No roots';
    }
}

const result = solveQuadr(a, b, c);
alert(result);
document.write(result);
