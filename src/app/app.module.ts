import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    FilterPipe,
    ToDoItemComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
