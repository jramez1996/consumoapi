import {Component} from '@angular/core';
import{ requestApi } from '../../api/index';

@Component({
  selector: 'list-api',
  styleUrls: ['list-api.component.css'],
  templateUrl: 'list-api.component.html',
})



export class ListApiComponent {
  constructor() {
      
  }
  public displayedColumns: string[] = ['email','first_name','last_name','avatar'];
  public dataSource:any = [];
  public paginator = {
    lengtData:0,
    pageIndex:1,
    pageSize:5
  };
  public isLoading=false;
  async getServerData(event:any){
    console.log("$event",event);
    this.paginator.pageIndex = event.pageIndex+1;
    this.paginator.pageSize = event.pageSize;
    await this.cargarData();
  };
  async cargarData(){
    this.isLoading=true;
    this.dataSource=[];
    try {
      let data =await requestApi(
        "users?page="+this.paginator.pageIndex+"&per_page="+this.paginator.pageSize,
        {},
        "GET"
       );
       console.log("data",data);
       this.dataSource=(data.data) ;
       this.paginator.lengtData=data.total;
       this.paginator.pageIndex = data.page-1;
       this.paginator.pageSize = data.per_page;
    } catch (error) {
      
    }finally{
      
    this.isLoading=false;
    }
   
    /*
    this.paginator.lengtData = data.total;*/
   // 
  }
  ngOnInit () {
    console.log("paginator",this.paginator);
    (async()=>{
      await this.cargarData();
      console.log("paginator",this.paginator);
    })();
    
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */