import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceCharPipe } from './pipes/replace-char/replace-char.pipe';




@NgModule({
  declarations: [
    ReplaceCharPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReplaceCharPipe
  ]
})
export class SharedModule { }
