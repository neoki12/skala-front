const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#tictactoe-status');
const resetBtn = document.querySelector('#reset-btn');

let board = ['', '', '', '', '', '', '', '', '']; 
let currentPlayer = 'X'; 
let isGameActive = true; 

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]          
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase()); 

    checkWin();
}

function checkWin() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        
        if (board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `🎉 ${currentPlayer} 승리!`;
        statusText.style.color = "#ff4757";
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusText.textContent = '무승부입니다! 🤝';
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}의 차례입니다!`;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    statusText.textContent = `${currentPlayer}의 차례입니다!`;
    statusText.style.color = "#2d3748";
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);