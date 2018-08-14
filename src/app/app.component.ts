import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource,MatPaginator} from '@angular/material';
import {DataService} from './data-service.service';
import {User} from './users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource:MatTableDataSource<any>;
  Users;

  TABLE_DATA = [];

  config = {
    suppressScrollX: true,
    suppressScrollY: false
  };

  //TABLE
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  // dataSource = new MatTableDataSource(this.Users);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private dataService:DataService) {
    
   }

  ngOnInit() {
    
    this.dataService.getData().subscribe((data)=>{
      console.log('Data:',data);
      this.Users = data;
      this.dataSource = new MatTableDataSource(this.Users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log('USERS:',this.Users)
    })
    
  }

}
