

export  class TaskList {
     constructor (){
        
        // if(!this.taskArray){
        //  this.taskArray=[];}
        //  else{
        //     this.taskArray===this.taskArray;
        //  }
         this.taskArray = JSON.parse(localStorage.getItem('coward')) || [];
        
    }
    static addTask(desc){
        let index = this.taskArray.length ;
        let task = {
            description: desc,
            completed: false,
            index: 1
        }
        
        this.taskArray.push(task);
        localStorage.setItem('coward', JSON.stringify(this.tas));
    }

    static Render(){
        const arr = JSON.parse(localStorage.getItem('coward')) || [];
        return arr;
    }

    

}