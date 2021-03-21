class Form {
    constructor() {
        this.reset = createButton('reset')
    }
    dissplay(){
        this.reset.mousePressed(()=>{
         player.updateCount(0);
         game.update(0);  
        })
    }
}