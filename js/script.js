new Vue(
    {
        el: '#app',
        data: {
            toDoList: [
        ],
        newTask: '',
        },
        methods: { 
            addTask: function(){
                this.toDoList.push(this.newTask);
                this.newTask ='';
            },
            deleteTask: function(index){
                this.toDoList.splice(index,1);
            }
        }
    }
);
  