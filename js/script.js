//1. stampare in pagina un item per ogni elemento contenuto in un array
//2. ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
//3. predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

//1a. dichiaro la variabile
var app = new Vue (
    {
        el: '#root',
        data: {
            //1b. creo array
            todos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],

        },
        methods: {

        }
    }

);