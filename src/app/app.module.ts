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
    NbThemeModule.forRoot({ name: 'default' }), // mudar de cosmic para default para tema claro ou dark para tema escuro
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