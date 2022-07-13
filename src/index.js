// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.reduce(
        (acc, row, idx) => acc.concat(idx % 2 === 0 ? row : row.reverse()),
        []
    );
};
