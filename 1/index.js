(function() {
    const {readFileSync} = require('fs');
    const text = readFileSync('./input.txt', 'utf8');

    const matrix = matrixBuilder(text);
    console.log("1) Distance: ", distance(matrix)); // Step 1
    console.log("2) Similarity score: ", similarityScore(matrix)); // Step 2
})()

function matrixBuilder(text) {
    const lines = text.split('\n').slice(0, -1);
    const matrix = [[],[]]
    lines.forEach(line => {
        const [l, r] = line.split('   ');
        matrix[0].push(parseInt(l));
        matrix[1].push(parseInt(r));
    });

    return matrix;
}

function distance(matrix) { 
    matrix[0].sort()
    matrix[1].sort()

    let totalDistance = 0;
    matrix[0].forEach((l, i) => totalDistance += Math.abs(l - matrix[1][i]));

    return totalDistance;
}

function similarityScore(matrix) {
    let totalScore = 0;
    matrix[0].forEach(l => totalScore += matrix[1].filter(r => r === l).length * l);

    return totalScore;
}