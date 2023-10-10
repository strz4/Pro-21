class Ground{
    constructor(x, y, w, h){
        var option = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.h = h
        this.w = w
        this.body=Bodies.rectangle(x, y, w, h, option)
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        fill(255, 255, 0)
        rect(0, 0, this.w, this.h)
        pop()
    }
}