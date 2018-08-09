import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeService } from '../attribute.service';
import { Http } from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export interface Attribute{
  Attr_Access_Super_Mode:string;
  Attr_Access_USer_Mode:string;
  Attr_Customer_Face:string;
  Attr_Discr:string;
  Attr_Excep_Note:string;
  Attr_Name:string;
  Attr_Number:number;
  Attr_Size:number;
  Attr_Type:string;
  Attr_Value:string;
  ID:number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  attr : any = [];
  dataSource:any = [];
  displayedColumns: string[] = ['Attr_Number', 'Attr_Name', 'Attr_Discr', 'Attr_Value', 'Attr_Type', 'Attr_Size','Attr_Customer_Face'];
  

  constructor(private attrService : AttributeService) { }

  ngOnInit() {
    this.attrService.getAllData().subscribe(attr=> {
      this.attr = attr.data;
      this.dataSource = new MatTableDataSource(this.attr);

    });
  }
}
