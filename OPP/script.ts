// class Temp{
//     private x: number
//     public y: number
//     constructor(val1?:number , val2?:number){
//         val1 ? this.x = val1 : this.x = 1
//         val2 ? this.y = val2 : this.y = 2
//     }

//  get getX(){
//     return this.x
// }
// set setX (value: number) {
//   this.x = value
//     }
// }
// let temp2 = new Temp(10,20)

// temp2.setX = 6
// console.log(temp2.getX)





class Point {
    x: number
    y: number
    constructor(val1: number, val2: number){
        this.x = val1
        this.y = val2
    }
}
class Triangle {
    x: Point
    y: Point
    z: Point
    constructor(x1?: number,y1?: number,x2?: number,y2?: number,x3?: number,y3?: number){
    }
}

let point1: Point = new Point(5,6)

let tr0: Triangle = new Triangle()
let tr1: Triangle = new Triangle(1,2,3,4,5,6)
 