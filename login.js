document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Appel à l'API pour l'authentification
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Rediriger vers la page d'accueil
            window.location.href = 'home.html';
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect');
        }
    })
    .catch(error => console.error('Erreur:', error));
});
