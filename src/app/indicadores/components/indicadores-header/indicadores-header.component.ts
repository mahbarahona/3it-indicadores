import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicadores-header',
  templateUrl: './indicadores-header.component.html',
  styleUrls: ['./indicadores-header.component.scss']
})
export class IndicadoresHeaderComponent implements OnInit {


  @Input('title') title!:string
  @Input('medida') medida!:string
  constructor() { }

  ngOnInit(): void {
  }

}
