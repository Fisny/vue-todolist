// Descrizione:
// Rifare l’esercizio della to do list come fatto 
// assieme in classe:
// stampare in pagina un item per ogni elemento 
// contenuto in un array
// ogni item ha una “x” associata: cliccando su di essa,
//  l’item viene rimosso dalla lista
// predisporre un input per aggiungere un nuovo 
// item alla lista: digitando il tasto invio oppure 
// ciccando su un pulsante, il testo digitato viene
//  aggiunto alla lista

Vue.config.devtools = true;

new Vue({
    el: "#app",
    data: {
        todoList: [
            'fare i compiti',
            'fare la spesa',
            'fare il bucato'
        ],
        newTask: '',
    },
    mounted() {
        this.autofocus();
    },
    methods: {
        autofocus: function () {
            const element = document.getElementById('newTaskElement');
            element.focus();
        },
        addTask: function () {
            this.todoList.push(this.NewTask);
            this.newTask = '';
            this.autofocus();
        },
        deleteTask: function (index) {
            this.todoList.splice(index, 1)
            this.autofocus();
        }
    }
})