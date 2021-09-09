// https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV curso gustavo guanabara logica da programação
// exercicio em grupo com Nathalia e Airton

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function diaMes() {
  let chamaDays = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    const criaLi = document.createElement('li');
    criaLi.innerText = dia;
    criaLi.className = 'day';
    chamaDays.appendChild(criaLi);
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      criaLi.className = 'holiday day';
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
      criaLi.className = 'friday day';
    }
    if (dezDaysList[i] === 25) {
      criaLi.className = 'friday holiday day';
    }
  }
}
diaMes();

// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function button(string) {
  let chamaPai = document.querySelector('.buttons-container');
  let chamaDivFilho = document.createElement('button');
  chamaDivFilho.id = 'btn-holiday';
  chamaPai.appendChild(chamaDivFilho);
  chamaDivFilho.innerText = string;
}

button("Feriados");

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
function altera() {

  let chamaDivFilho = document.querySelector('#btn-holiday');
  let arrayFeriados = document.querySelectorAll('.holiday');
  chamaDivFilho.addEventListener('click', function alteraCor() {

    for (let index = 0; index < arrayFeriados.length; index += 1) {
      if (arrayFeriados[index].style.backgroundColor === 'pink') {
        arrayFeriados[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        arrayFeriados[index].style.backgroundColor = 'pink';
      }
    }
  });
}

altera();

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

// 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

// 10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
