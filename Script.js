const questions = [
    { question: "Qual é minha cor favorita?", options: ["Azul", "Verde", "Roxo", "Preto"], answer: "Roxo" },
    { question: "Qual meu anime favorito?", options: ["Naruto", "One Piece", "Re Zero e Spy x family", "Outro"], answer: "Re Zero e Spy x family" },
    { question: "Em que mês nasci?", options: ["Janeiro", "Março", "Julho", "Dezembro"], answer: "Dezembro" },
    { question: "Qual meu hobby favorito?", options: ["Ler", "Jogar", "Dançar", "Falar com você"], answer: "Falar com você" },
    { question: "Qual minha comida favorita?", options: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"], answer: "Pizza" },
    { question: "Qual meu estilo musical favorito?", options: ["Rock", "Pop", "Sertanejo", "Funk"], answer: "Pop" },
    { question: "Qual meu maior medo?", options: ["Altura", "Escuro", "Falar em público", "Nenhum"], answer: "Escuro" },
    { question: "Se eu pudesse viajar para qualquer lugar, onde seria?", options: ["Japão", "Paris", "Nova York", "Londres"], answer: "Japão" },
    { question: "Qual meu signo?", options: ["Áries", "Touro", "Peixes", "Gêmeos"], answer: "Peixes" },
    { question: "Qual meu animal favorito?", options: ["Cachorro", "Gato", "Coelho", "Passarinho"], answer: "Cachorro" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("quiz-container").innerHTML = `<h1>Fim do Quiz!</h1>
            <p>Você acertou ${score} de ${questions.length} perguntas!</p>
            <button onclick="restartQuiz()">Tentar Novamente</button>`;
        return;
    }

    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(answer, btn) {
    let correctAnswer = questions[currentQuestion].answer;
    if (answer === correctAnswer) {
        btn.classList.add("correct");
        score++;
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 500);
    } else {
        btn.classList.add("wrong");
        setTimeout(restartQuiz, 500);
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

window.onload = loadQuestion;