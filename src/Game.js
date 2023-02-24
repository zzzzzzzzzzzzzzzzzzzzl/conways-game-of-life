const GAME_SPEED = 20
const DOT_COLOR = 'red'

const board=require('./conway')

class Game {
  constructor(ui) {
    this.b=new board(50,.5)
    this.ui = ui
    this.ui.bindHandlers(
      this.quit.bind(this),
      this.start.bind(this)
    )
  }
  drawBoard(){
    for(let i=0;i<this.b.board.length;i++){
      for(let j=0;j<this.b.board.length;j++){
        if(this.b.board[i][j]==true){
          this.ui.draw({x:i+26,y:j+6},DOT_COLOR)
        }  
      }
    }
  }
  tick() {
   this.ui.clearScreen()
    this.drawBoard()
    this.b.nextFrame()
    this.ui.render()
  }
  start() {
    if (!this.timer) {
      this.timer = setInterval(this.tick.bind(this), GAME_SPEED)
    }
  }
  quit() {
    process.exit(0)
  }
}

module.exports = { Game }
