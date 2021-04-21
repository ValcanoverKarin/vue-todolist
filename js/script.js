//1. stampare in pagina un item per ogni elemento contenuto in un array
//2. ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
//3. predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

//1a. dichiaro la variabile
var app = new Vue (
    {
        el: '#root',
        data: {
            //1d. creo una variabile vuota per il v-model
            userNewTodo: '',
            //1b. creo array
            todos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],

        },
        methods: {
            //1g. click addNewTodo per aggiungere l elemento dall array
            addNewTodo() {
                //1h. aggiungo nei todos ciò che scrive l utente 
                this.todos.push(this.userNewTodo);
                //1i. una volta che l utente ha aggiunto ritorna vuota 
                this.userNewTodo = '';
            },
            //2b. click deleteTodo per rimuovere l elemento dall array
            //2c. aggiungo index perchè ho bisogno dell'indice dell elemento in cui si clicca
            deleteTodo(index) {
                //2f. uso splice a cui serve:
                //    l'indice da cui iniziare per rimuovere gli elementi 
                //    e quanti elementi deve levare dopo quell indice
                this.todos.splice(index, 1);
            }
        }
    }

);