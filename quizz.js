document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/quizz')
    .then(response => response.json())
    .then(data => {
        const questionsContainer = document.getElementById('questionsContainer');
        data.questions.forEach(question => {
            const div = document.createElement('div');
            div.classList.add('question');
            div.innerHTML = `
                <p>${question.text}</p>
                ${question.options.map(option => `
                    <label>
                        <input type="radio" name="question${question.id}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            `;
            questionsContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Erreur:', error));
});

document.getElementById('submitQuizz').addEventListener('click', function() {
    const answers = [];
    document.querySelectorAll('.question').forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push({
                questionId: question.dataset.id,
                answer: selectedOption.value
            });
        }
    });

    fetch('/api/quizz/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answers })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Votre note est de ${data.score}/20`);
    })
    .catch(error => console.error('Erreur:', error));
});
