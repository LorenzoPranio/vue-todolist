const { createApp } = Vue

createApp({
    data() {
        return {
            do_list: [
                {
                    text: 'Finire l\'esercizio del giorno',
                    done: true,
                }, {
                    text: 'Studiare ciò che ho visto a lezione',
                    done: true,
                }, {
                    text: 'Fare la spesa',
                    done: false,
                }, {
                    text: 'Bere un buon caffè',
                    done: true,
                }, {
                    text: 'Rankare fino a diamante su OW2',
                    done: false,
                }, {
                    text: 'Vedere la nuova stagione di "The Boys"',
                    done: false,
                }, {
                    text: 'Uscire con gli amici a prendere una birra',
                    done: true,
                }, {
                    text: 'Preparare una bella cena alla mia ragazza',
                    done: true,
                }
            ]
        }
    }
}).mount('#app')
    