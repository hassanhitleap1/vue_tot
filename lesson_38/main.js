vm =  new Vue({
    el:'#app',
    data:{
        todo:'',
        action:'all',
        todos:[
            {id:0,title:'the first',complete:true},
            {id:1,title:'the secound',complete:false},
            {id:2,title:'the thaired',complete:true},
            {id:3,title:'the foured',complete:false},
            {id:4,title:'the fived',complete:true},
        ]
    },computed: {
        // a computed getter
        getTodos :function(){
            app=this;
            return   this.todos.filter(function (todo) {
                if(app.action=='all'){
                    return todo ; 
                }else if (app.action=='completed') {
                    return todo.complete == true;
                 }else if(app.action=='uncompleted'){
                    return todo.complete == false;
                 }
              });
                
        }
      },
    
    methods: {
        addTodo(){
            if(this.todo=='')
            return true;

            this.todos.push({
                id:5,
                title:this.todo,
                complete:false
            });
            this.todo='';
        },check(index){
            this.todos[index].complete =! this.todos[index].complete ;
        },delTodo(index){
            this.todos.splice(index,1)
        },delAll(){
            this.todos=[]; 
        },completeAll(){
            this.todos.forEach(todo => {
                this.todos[todo.id].complete=true;   
            });
        }
        ,uncompleteAll(){
            this.todos.forEach(todo => {
                this.todos[todo.id].complete=false;   
            });
        }
    }
})


     