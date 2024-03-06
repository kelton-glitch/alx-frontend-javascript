export default function divideFunction(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error();
        }
        return numerator / den;
    } catch (error) {
        throw Error('Cannot divide by 0');
    }
}