import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task/task-form/task-form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task-form/:id', component: TaskFormComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    RegisterComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // Debugging purposes only
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
