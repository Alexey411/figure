import {Component} from '@angular/core'
 

interface IPoints{
    // p: [x:number, y:number]
    // p2: [x: number, y: number]
    // p3?: [x: number, y: number]
    // p4?: [x: number, y: number]
    // r1?:number,
    // r2?:number
    p:{x: number, y: number}[]
    p2:{x: number, y: number}[]
}

interface IPoints2{
    // p: [x:number, y:number]
    // p2: [x: number, y: number]
    // p3?: [x: number, y: number]
    // p4?: [x: number, y: number]
    // r1?:number,
    // r2?:number
    p:{x: number, y: number}[]
    p2:{x: number, y: number}[]
    p3:{x: number, y: number}[]
    r1?:number // Для конуса
}

interface IPoints3{
    // p: [x:number, y:number]
    // p2: [x: number, y: number]
    // p3?: [x: number, y: number]
    // p4?: [x: number, y: number]
    // r1?:number,
    // r2?:number
    p:{x: number, y: number}[]
    p2:{x: number, y: number}[]
    p3:{x: number, y: number}[]
    p4:{x: number, y: number}[]
    r1?:number,
    r2?:number //Для цилиндра нужно два радиуса
}

Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
  
export class Point {
    p:{x: number, y: number}[] 
    p2?:{x: number, y: number}[] | any
    p3?:{x: number, y: number}[] | any
    constructor(_p: {x: number, y: number}[], _p2?: {x: number, y: number}[] | any, _p3?: {x: number, y: number}[] | any){
        this.p = _p
        this.p2 = _p2
        this.p3 = _p3
    }

    position(point: IPoints): void;

    position(point: IPoints, point2: IPoints2): void;
    
    position(point: IPoints, point2: IPoints2, point3: IPoints3): void;

    position(point: IPoints, point2?: IPoints2 | any, point3?: IPoints3 | any){
        point.p = this.p
        let value = point2.p
        if(value !== null) {
            point2 = this.p2
        }
        let value2 = point3.p
        value2 !== null ? this.p3 : null
    }
}

let obj = new Point([] as ({x:number, y:number})[])
console.log(obj);


