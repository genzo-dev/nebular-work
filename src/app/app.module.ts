import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbSidebarModule, 
  NbCardModule, 
  NbUserModule, 
  NbIconModule, 
  NbActionsModule, 
  NbBadgeModule, 
  NbButtonModule 
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbUserModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbBadgeModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}