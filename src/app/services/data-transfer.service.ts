import { Injectable } from "@angular/core";

@Injectable()

export class DataTransferService{
    data : any;
    constructor(){}

    getData(){
     return this.data;
    }
    setData(data:any){
      this.data=data;
    }
}