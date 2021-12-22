(() => {
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container');
        const btn = document.createElement('button');
        btn.classList.add('btn');
        container.append(btn);

        btn.addEventListener('click', () => {
            container.style.setProperty('--color-border', '#000');
        })
    })
})();
