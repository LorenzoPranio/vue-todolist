*Esercizio di oggi*(18/07/24): Vue To Do List
nome repo: vue-todolist

*Descrizione* 
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

*MILESTONE 1* 
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

*MILESTONE 2* 
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

*MILESTONE 3* 
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

*Bonus: 1* 
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


*|SOLUZIONE|*

1.-Creare il layout della pagina statico

2.-Stilizzare la pagina

3.-implementare Vue
3.1.-Creare un Array di oggetti con TEXT e DONE

4.-Far apparire su schermo TEXT apposto delle LI
4.1.-Se text è true, apparirà sbarrato
4.2.-Else (false) non apparirà sbarrato

5.-Aggiugere un pulsante X
5.1.-Al click rimuoverà la task

6.-Creare un camput input testuale con un pulsante "Aggiungi"
6.1.-Al click creerà una nuova task e la aggiunge alla lista