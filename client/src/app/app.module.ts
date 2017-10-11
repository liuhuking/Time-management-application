import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task-list/task.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ListComponent } from './project/list/list.component';
import { FormComponent } from './project/form/form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
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
    TaskFormComponent,
    ProfileComponent,
    LogoutComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
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
