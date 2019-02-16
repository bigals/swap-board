import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapBoardUserModel } from '../../core/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { SimpleDialogComponent } from 'src/app/core/simple-dialog/simple-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  public profile: SwapBoardUserModel;
  public isEditing: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private matDialog: MatDialog
  ) {
    this.isEditing = false;
  }

  ngOnInit() {
    this.profile = new SwapBoardUserModel();
    this.profile.name = this.route.snapshot.data.data.name;
    this.profile.image = this.route.snapshot.data.data.image;
    this.profile.provider = this.route.snapshot.data.data.provider;
    this.profile.uid = this.route.snapshot.data.data.uid;
  }

  public onEditProfile = () => {
    this.isEditing = true;
  }

  public onSubmitChanges = () => {
    this.userService
      .updateCurrentUser(this.profile)
      .then(() => {
        this.isEditing = false;
      })
      .catch(() => {
        window.alert('Saving Changes Failed, Try Again.');
      });
  }

  public onChangeUserImage = () => {
    this.matDialog
      .open(SimpleDialogComponent, {
        width: '35vw',
        data: {
          title: 'Change profile picture',
          wantsInput: true,
          cancelBtnText: 'Cancel',
          acceptBtnText: 'Save Picture',
          simpleMessage:
            'Please supply a url to an image (google image links should work)'
        }
      })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.profile.image = result;
          this.userService
            .updateCurrentUser(this.profile)
            .then(() => {
              console.log('');
            })
            .catch(() => {
              console.log('');
            });
        }
      });
  }
}
