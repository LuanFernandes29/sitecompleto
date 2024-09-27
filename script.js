const mode = document.getElementById('mod_icon')
mode.addEventListener('click', () =>{
    
const form = document.getElementById('login_form')

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark')
    }
    else{
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon')  
        form.classList.remove('dark') 
    }
})
function disableOptions(questionName){
    let options = document.getElementsByName (questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}
function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
function submitQuiz(){
 
    let correctAnswers = {
        q1: "B",  // Ecologia
        q2: "D",  // Cosméticos naturais
        q3: "A",  // Promover o consumo consciente e sustentável
        q4: "B",  // Itens que ajudam a reduzir o impacto ambiental
        q5: "A",  // Ser a referência no mercado de produtos sustentáveis
        q6: "C",  // Smartphones
        q7: "B",  // Ajudam a preservar o meio ambiente
        q8: "C",  // Bambu
        q9: "A",  // Feitos com ingredientes naturais e não poluem o ambiente
        q10: "B"  // Redução de consumo de água e energia
    };
    let form = document.getElementById('quiz-form');
    let score = 0;
 
    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]){
            score++;
        }
    }
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`
 
    if(score === 7){
        let sucessSound = document.getElementById("venceusom");
        sucessSound.play();
    }else{
        let failSound = document.getElementById("perdeusom");
        failSound.play();
    }
    document.getElementById('enviar').disabled=true;
    document.getElementById('recomeco').disabled=false;
}
function recomecar(){
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
    score = 0;
    result.innerHTML = "";
    document.getElementById('enviar').disabled=false;
    document.getElementById('recomeco').disabled=true;
};
 