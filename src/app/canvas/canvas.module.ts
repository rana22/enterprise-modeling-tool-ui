import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CanvasComponent],
  exports: [CanvasComponent]
})
export class CanvasModule { }
