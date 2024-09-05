const drawBoard = (): void => {
    let board: string = '';

    for (let i: number = 0; i < 8; i++) {
        for (let j: number = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                board += '* ';
            } else {
                board += '# ';
            }
        }
        board += '\n';
    }
    console.log(board);
};

drawBoard();