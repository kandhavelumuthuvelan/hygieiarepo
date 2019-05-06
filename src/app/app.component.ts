import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private gridApi;
  private gridColmnApi;
  private columnDefs;
  private sortingOrder;
constructor(private http:HttpClient)
{
  this.columnDefs=[
    {headerName:"Name",
    field:"name",
    width:150,
    sortingOrder:["asc","desc"]
  },
{headerName:"Id",
field:"id",
width:100,
},
{headerName:"Email",
field:"email",
width:100,
}
  ];
}
  
onGridReady(params)
{
  // this.gridApi=params.gridApi;
  // this.gridColmnApi=params.gridColmnApi;
  let datavalue=[{"firstName":"kandhavelu","id":"7"},{"firstName":"kandhavelu","id":"7"}]
  this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe (
    data=>{
      params.api.setRowData(data)
    }
  )
  //params.api.setRowData(datavalue)
}
}
