var loadTasks = function (){
    // retrieve tasks from local storage
   var savedScores = localStorage.getItem("score");

    if(savedScores === null){
        return false;
    }

    savedScores=JSON.parse(savedScores);

    for(var i=0; i<savedScores.length; i++){
        
        console.log(savedScores)
    }
} 
