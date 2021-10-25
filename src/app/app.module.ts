import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // not sure about that

import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { ServerComponent } from './tutorial/server/server.component';
import { ServersComponent } from './tutorial/servers/servers.component';
import { MessageComponent } from './message/message.component';
import { WarningComponent } from './message/warning/warning.component';
import { AlertComponent } from './message/alert/alert.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { TestOneComponent } from './assignments/test-one/test-one.component';


const appRoutes: Routes = [
  { path: 'first', component:  FirstPageComponent},
  { path: 'second', component: SecondPageComponent},
  { path: 'test-one', component: TestOneComponent},
  { path: 'tutorial', component: ServersComponent},
  { path: '',   redirectTo: '/tutorial', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MessageComponent,
    WarningComponent,
    AlertComponent,
    FirstPageComponent,
    SecondPageComponent,
    TestOneComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
