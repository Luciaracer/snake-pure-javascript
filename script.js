const canvas = document.querySelector(".snake")
const c = canvas.getContext("2d")
canvas.width = 400
canvas.height = 400
const scale = 40
const rows = 40
const columns = 40
function Snake(){
    this.x = 0
    this.y = 0
    this.velocity = {x:25,y:0}
    this.total = 0
    this.tail=[]
    this.draw = function(){
        c.fillStyle = "blue"
        for(let i=0; i<this.tail.length; i++){
             c.fillRect(this.tail[i].x,this.tail[i].y,scale,scale)
        }
       
    }
    this.update = function(){

        for(let i=0; i<this.tail.length-1; i++){
            this.tail[i] = this.tail[i+1]
        }
        this.tail[this.total] = {x:this.x,y:this.y}


        
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y

        if(this.x > canvas.width){
            this.x = 0
        }
        if(this.y > canvas.height){
            this.y = 0
        }
        if(this.x < 0 - scale){
            this.x = canvas.width

        }
        if(this.y < 0 - scale){
            this.y = canvas.height
        }
    }
    this.eat = function(fruit){
        if(this.x > fruit.x-scale &&
           this.x < fruit.x+scale && 
           this.y > fruit.y-scale && 
           this.y < fruit.y+scale){
               this.total++
            return true
        }else{
            return false
        }
    }
}
function Fruit(){
    this.x
    this.y
    this.pickLocation = function(){
        this.x = ((Math.random()) * canvas.width)
        this.y = ((Math.random()) * canvas.height) 
    }
    this.draw = function(){
        
        c.fillStyle = "green"
        c.fillRect(this.x,this.y,scale,scale)
    }
}
window.addEventListener("keydown",(event)=>{
    switch(event.key){
        case "ArrowUp":
            snake.velocity = {x:0,y:-25}
            break
        case "ArrowDown":
            snake.velocity = {x:0,y:25}
            break
        case "ArrowLeft":
            snake.velocity = {x:-25,y:0}
            break
        case "ArrowRight":
            snake.velocity = {x:25,y:0}
            break
    }
})
function main(){
    snake = new Snake()
    fruit = new Fruit()
    fruit.pickLocation()
    window.setInterval(()=>{
        c.clearRect(0,0,canvas.width,canvas.height)
        c.fillRect(this.x,this.y,canvas.width,canvas.height)
        
        snake.update()
        snake.draw()
        fruit.draw()
        if(snake.eat(fruit)){
            fruit.pickLocation()
        }
    },100)
}
main()