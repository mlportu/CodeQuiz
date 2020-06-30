

var loadScores = function () {
    // retrieve tasks from local storage
    var savedTasks = localStorage.getItem("tasks");

    if(savedTasks === null){
        return false;
    }

    savedTasks=JSON.parse(savedTasks);

    for(var i=0; i<savedTasks.length; i++){
        
        createTaskEl(savedTasks[i]);
    }  
}
