document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/modules')
    .then(response => response.json())
    .then(data => {
        const modulesList = document.getElementById('modulesList');
        data.modules.forEach(module => {
            const li = document.createElement('li');
            li.textContent = module.name;
            modulesList.appendChild(li);
        });
    })
    .catch(error => console.error('Erreur:', error));
});
