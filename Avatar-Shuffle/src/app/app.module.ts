import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarTileComponent } from './avatar-tile/avatar-tile.component';
import { TileGridComponent } from './tile-grid/tile-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarTileComponent,
    TileGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
