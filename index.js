// Your code here
class Polygon {
<<<<<<< HEAD
  constructor (array){
=======
  constractor (array){
>>>>>>> 5c4c9c4cf05a9a924012025f7cad9059c5361d79
    this.array=array
  }
  
  
<<<<<<< HEAD
  get countSides() {
    return this.array.length
  }
  
  get perimeter (){
    let per = 0
    for (let i =0; i< this.array.length;i++){
      per= per + this.array[i]
    }
    return per
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.array[0]+this.array[1]>this.array[2] && this.array[1]+this.array[2]>this.array[0] && this.array[2]+this.array[0]>this.array[1]) {
      return true
    }else{
      return false
    }
  }
}
  class Square extends Polygon{
    get isValid(){
      if(this.array[0] === this.array[1] && this.array[0]=== this.array[2]&& this.array[0]=== this.array[3]  ){
          return true
      }else{
         return false    
      }
    }
    
    get area(){
      return this.array[0]* this.array[0]
    }
  }
=======
  get countSides (array){
    return this.array.length
  }
  
  get perimeter (array){
    let per = 0
    for (let i =0; i< this.array.length;i++){
      per= per + array[i]
    }
    return per
  }
}
>>>>>>> 5c4c9c4cf05a9a924012025f7cad9059c5361d79
