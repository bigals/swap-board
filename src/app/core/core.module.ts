import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase
import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

import { PackageSizePipe } from './pipes/package-size.pipe';
import { TeirsPipe } from './pipes/teirs.pipe';
import { PriceDivisorsPipe } from './pipes/price-divisors.pipe';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BoardService } from './services/board.service';
import { UserResolver } from './user.resolver';
import { AuthGuard } from './guards/auth.guard';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { OwnerNamePipe } from './pipes/owner-name.pipe';

@NgModule({
  declarations: [
    PackageSizePipe,
    TeirsPipe,
    PriceDivisorsPipe,
    SimpleDialogComponent,
    OwnerNamePipe
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: [SimpleDialogComponent],
  providers: [
    AuthService,
    UserService,
    UserResolver,
    BoardService,
    AuthGuard
    // { provide: FirebaseOptionsToken, useValue: environment.firebaseConfig }
  ],
  exports: [
    PackageSizePipe,
    TeirsPipe,
    PriceDivisorsPipe,
    OwnerNamePipe,
    SimpleDialogComponent
  ]
})
export class CoreModule {}
