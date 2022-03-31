import { Component, OnInit } from '@angular/core';
import { IndicadoresActionsService } from '../../actions/indicadores-actions.service';
import { IndicadoresStateService } from '../../state/indicadores-state.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  constructor(public state:IndicadoresStateService,private actions:IndicadoresActionsService) { }

  ngOnInit(): void {
    this.actions.getIndicadores()
  }

}
