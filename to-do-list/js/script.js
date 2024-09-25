// seleciona os elementos do DOM que serão usados
const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('adicionar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// função para add uma nova tarefa
btnAdicionar.addEventListener('click', () => {
    // obtém o valor digitado no campo de entrada
    const tarefaTexto = inputTarefa.value;

    //verifica se o campo de entrada está vazio
    if (tarefaTexto === '') {
        alert('Digite uma tarefa antes de adicionar!');
        return;
    }
    // cria um novo item de lista (li)
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaTexto;

    // cria o botao de remover tarefa e o anexa à nova tarefa
    const btnRemover = document.createElement('button');
    btnRemover.innerText = 'Remover';
    btnRemover.classList.add('remover-tarefa'); //aplica classe css ao botao


    // função para remover a tarefa quando o botão for clicado
    btnRemover.addEventListener('click', () => {
        listaTarefas.removeChild(novaTarefa);
    });

    novaTarefa.appendChild(btnRemover);

    // add a nova tarefa a lista de tarefas
    listaTarefas.appendChild(novaTarefa);

    // limpa o campo de entrada após add a tarefa
    inputTarefa.value = '';


});

// Add interatividade ao pressionar enter para add  tarefa

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnAdicionar.click();
    }
});