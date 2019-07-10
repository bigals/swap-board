// Core Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

// Angular CDK
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { environment } from '../environments/environment';

// Auth/Base Route Handling Components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

// feature modules
import { SwapBoardModule } from './swap-board/swap-board.module';
import { ProfileModule } from './profile/profile.module';
import { ProposalModule } from './proposal/proposal.module';
import { AppComponent } from './app.component';

// routing modules
import { SwapBoardRoutingModule } from './swap-board/swap-board-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { ProposalRoutingModule } from './proposal/proposal-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,

    ScrollingModule,
    CdkTableModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,

    BrowserAnimationsModule,
    BrowserModule,

    CoreModule,
    SwapBoardModule,
    ProfileModule,
    ProposalModule,
    AdminModule,

    AdminRoutingModule,
    ProposalRoutingModule,
    ProfileRoutingModule,
    SwapBoardRoutingModule,
    AppRoutingModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {}
