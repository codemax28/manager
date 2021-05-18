const readlineSync = require("readline-sync");
var tasks = [];
//var tasksDone =[]; voir ligne 45
let deleteTask;
let addTask;
let number ;
let done;

while (number != 5) {
    console.log("Welcome to your task manager, Press:\n"
        +"1. to see all your tasks\n"
        +"2. to add a task\n"
        +"3. to delete a task\n"
        +"4. to mark a task as done\n"
        +"5. to Exit the task manager")
    number = parseInt(readlineSync.question("Entrer un numéro  : "));
    console.log();

    switch (number) {
        case 1:
     		console.log("Taches : "+tasks);
            //console.log("Taches done : "+tasksDone);
            break;

        case 2:
            addTask = readlineSync.question("Quel tache voulez-vous ajouter ?");
            tasks.push(addTask);
            console.log(tasks);
            break;

        case 3:
           
                console.log(tasks);
                deleteTask = parseInt(readlineSync.question("Quelle tache supprimer ? Sélectionné le numéro associé a la tache "));
                tasks.splice(deleteTask - 1, 1); 
                console.log("Tache "+ deleteTask +" supprimé");
                console.log(tasks);
                break; 
          

        case 4:
                console.log(tasks);
                done =parseInt(readlineSync.question("Quelle tache avez vous fini ? Sélectionné le numéro associé a la tache "));
                tasks.splice(done -1, 1); 
                //tasksDone.push(tasks[done]); J'ai essayé d'énvoyer l'élement supprimé dans un autre tableau pour voir toutes les taches done mais pas réussi ...
                console.log("Tache "+ done +" done");
                //console.log(tasksDone);
                break; 
           

        case 5:
            process.exit();
            break;

        default: console.log("Erreur veuillez entrer une nombre valide entre 1 à 5 pour sélectionné votre option ");
    }
}