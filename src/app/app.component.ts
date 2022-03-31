import { Component } from '@angular/core';
import { UiService } from './ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indicadores';
  constructor(public ui:UiService){}
}
