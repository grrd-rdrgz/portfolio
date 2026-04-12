function generateMatrixCode(element) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()-_';
    element.textContent = '';
    
    const charCount = Math.floor(window.innerHeight / 20);
    for (let i = 0; i < charCount; i++) {
        element.textContent += characters.charAt(
            Math.floor(Math.random() * characters.length)
        ) + '\n';
    }
}

setInterval(() => {
    document.querySelectorAll('.matrix-column').forEach(column => {
        generateMatrixCode(column);
    });
}, 500);

window.addEventListener('load', () => {
    const container = document.querySelector('.matrix-container');
    const columnCount = Math.floor(window.innerWidth / 30);
    
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${(i * 3) + Math.random() * 4}%`;
        column.style.animationDuration = `${3 + Math.random() * 4}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(column);
    }
});