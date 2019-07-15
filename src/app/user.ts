export class User {
    constructor(public name:string,public avatar:string,public followers:number,public following:number,public bio:string,
      public created_at:string,public url:string,public repos:number) {
    }
   }