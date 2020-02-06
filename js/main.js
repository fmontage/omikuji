'use strict';

{
    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', () => {

        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '凶';
        } else if (n < 0.2) {
            btn.textContent = '大吉';
        } else if (n < 0.5) {
            btn.textContent = '中吉';
        } else if (n < 0.75) {
            btn.textContent = '末吉';
        } else {
            btn.textContent = '小吉';
        }
        

    });
}