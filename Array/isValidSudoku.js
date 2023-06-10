const example1 = [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]];

const example2 = [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

const range = (n) => Array(n).fill().map((i, k) =>  k);

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for( let i = 0 ; i < 9; i++) {
        let rows = new Set();
        let cols = new Set();
        let box = new Set();
        for ( let j = 0; j < 9; j++) {
            let _rows = board[i][j];
            let _cols = board[j][i];
            let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

            if( _rows !== '.') {
                if( rows.has(_rows)) return false;
                rows.add(_rows);
            }

            if( _cols !== '.') {
                if( cols.has(_cols)) return false;
                cols.add(_cols);
            }

            if( _box !== '.')
                if( box.has(_box)) return false;
                box.add(_box);

        }
    }

    return true;
};



console.log(isValidSudoku(example1)) // true;
console.log(isValidSudoku(example2)) // false;

