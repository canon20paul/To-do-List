

export  class Interaction  {

    static updateComplete(index){


        //EditTask Event Listner
        // const checkArray = document.querySelectorAll('.box');
        // checkArray.forEach((checkB) => {
        //     checkB.addEventListener('click', (e) => {
        //         if(!checkB.Checked){   

        //          } else {

        //          }
        //     });
        
        const checkA = JSON.parse(localStorage.getItem('coward')) || [];
        
        
                if(checkA[index].completed=== false){
                    alert(checkA[index].completed);
                    checkA[index].completed = true;
                    alert(checkA[index].completed);
                   
                } else {
                    checkA[index].completed = false;
                    
                }
        localStorage.setItem('coward', JSON.stringify(checkA));
    }


}



            // task.addEventListener('keypress', (e) => {
            //     if (e.key === 'Enter') {
            //         task.contentEditable = false;
            //         for (let i = 0; i < TaskList.taskArray.length; i = 1 + i) {

            //             if (TaskList.taskArray[i].index == task.id) {
            //                 TaskList.taskArray[i].description = e.target.innerHTML;
            //             }
            //         }
            //         localStorage.setItem('coward', JSON.stringify(TaskList.taskArray));
            //     }
            // });

        


            // }}}