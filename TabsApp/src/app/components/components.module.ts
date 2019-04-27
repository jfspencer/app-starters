import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';

const componentList = [
    CounterComponent
];

@NgModule({
  imports: [ CommonModule ],
  declarations: componentList,
  exports: componentList,
})
export class ComponentsModule {}