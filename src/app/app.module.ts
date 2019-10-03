import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeColumnsGridComponent } from './three-columns-grid/three-columns-grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { ColorfulNoteComponent } from './colorful-note/colorful-note.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeColumnsGridComponent,
    GridItemComponent,
    ColorfulNoteComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
