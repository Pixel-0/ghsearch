export class Repo {
    public display:boolean
    constructor(public description:string, public name:string,public forks:number,public watches:number,public language:string,public url:string,public stars:number) {
      this.display = true;
    }
   }