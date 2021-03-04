import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {
  constructor() {}
}
