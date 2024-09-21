document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/progress')
    .then(response => response.json())
    .then(data => {
        const progressContainer = document.getElementById('progressContainer');
        data.progress.forEach(progress => {
            const div = document.createElement('div');
            div.classList.add('progress');
            div.innerHTML = `
                <p>Module: ${progress.module}</p>
                <p>Note: ${progress.score}/20</p>
            `;
            progressContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Erreur:', error));
});
