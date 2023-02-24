const blessed = require('blessed')

class UserInterface {
  constructor() {
    this.blessed = blessed
    this.screen = blessed.screen()
    this.screen.title = 'Snek.js'
    this.gameBox = this.createGameBox()
    this.gameContainer = this.blessed.box(this.gameBox)
  }

  createGameBox() {
    return {
      parent: this.screen,
      top: 1,
      left: 0,
      width: '100%',
      height: '100%-1',
      style: {
        fg: 'black',
        bg: 'black',
      },
    }
  }

  bindHandlers(keyPressHandler, quitHandler) {
    // Event to handle keypress i/o
    this.screen.on('keypress', keyPressHandler)
    this.screen.key(['escape', 'q', 'C-c'], quitHandler)

  }

  draw(coord, color) {
    this.blessed.box({
      parent: this.gameContainer,
      top: coord.y,
      left: coord.x*2,
      width: 2,
      height: 1,
      style: {
        fg: color,
        bg: color,
      },
    })
  }

  clearScreen() {
    this.gameContainer.detach()
    this.gameContainer = this.blessed.box(this.gameBox)
  }


  render() {
    this.screen.render()
  }
}

module.exports = { UserInterface }
