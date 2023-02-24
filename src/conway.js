
class board{
    
    constructor(size,spawnChance){//size of board//spawnChance between 0-1
        this.spawnChance = spawnChance
        this.size=size
        this.createBoard()
    //    getNeighours(2,3,this.board.map(i=>{
    //     return [...i]
    //    }))// HI Ive got a questions about this part and if there is an easier way to do what ive done
       //I so if I declare a variable and give it the value of another variable, both variables point to the same bit of memory, so changing one will just change the value of the memory
       //so if I use the ... operator or the slice() method it will give newly declared value to a new bit of memory.
       //but if it is a nested array like I have and i use the slice or .. on the outer array. the inner arrays are still pointing to their origional memory.
       //so if i change the value of the elements of the Nested array the origional element will change.
       // so if i want to create an entirley new nested array, I would have to use the map method like how i have done.
       //or is there an easier way.
    }
    createBoard(){
        this.board=[]
        for(let i=0;i<this.size;i++){
        this.board.push([])
            for(let j=0;j<this.size;j++){
                let x=(n) => { return n <this.spawnChance;}
                this.board[i].push(x(Math.random()))
              }
        }
    }
    nextFrame(){
        let newBoard=[]
        for(let i=0;i<this.board.length;i++){
            newBoard.push([])
            for(let j=0;j<this.board.length;j++){
                let boardCopy=JSON.parse(JSON.stringify(this.board))
                let count=0
                this.getNeigbours(i,j,boardCopy).map(i=>{if(i){count++}})
                newBoard[i].push(this.aliveIf(count,this.board[i][j]))
            }
        }
        this.board= newBoard
    }
    aliveIf(neighbours,bool){
        if(bool){
            if(neighbours==2||neighbours==3){return true}
            else{return false}}
        else{
            if(neighbours==3){
                return true
            }
            else{
                return false
            }
        }
    
}
    getNeigbours(x,y,board){
        board[x][y]=null
        let arr=[]
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                try{
                    arr.push( board[x+i][y+j])
                }
                catch{}   
            }
        }
        return arr
    }
}




let b=new board(5,.5)
console.log(b.board)
console.log(b.getNeigbours(2,2,b.board))
b.nextFrame()
console.log(b.board)
console.log(b.getNeigbours(2,2,b.board))


module.exports = board;
