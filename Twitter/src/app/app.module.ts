import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PostComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    ProfileComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
