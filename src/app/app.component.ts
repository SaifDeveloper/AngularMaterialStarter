import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  TABLE_DATA = [
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:123,start_date:'01/01/2016',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:466,start_date:'02/01/2016',start_time:'01:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:113,start_date:'03/01/2016',start_time:'11:30',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:103,start_date:'10/02/2016',start_time:'04:55',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:974,start_date:'10/02/2016',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:789,start_date:'10/03/2016',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:123,start_date:'10/01/2017',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:123,start_date:'10/01/2017',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:123,start_date:'10/01/2017',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:123,start_date:'10/01/2016',start_time:'10:20',duration:100},
    {id_call: 'arg123', status: 'Matched', cdr_id: 'cdr123', a_number: 28907454,b_number:123,start_date:'10/01/2016',start_time:'10:20',duration:100}
  ];

  config = {
    suppressScrollX: true,
    suppressScrollY: false
  };

  //TABLE
  displayedColumns: string[] = ['id_call', 'status', 'cdr_id', 'a_number','b_number','start_date','start_time','duration'];
  dataSource = new MatTableDataSource(this.TABLE_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService:DataService) {
    
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataService.getData().subscribe((data)=>{
      console.log(data);
    })
  }

}
