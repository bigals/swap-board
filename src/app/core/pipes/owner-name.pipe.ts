import { Pipe, PipeTransform } from '@angular/core';
import { UserInfoService, UserInfo } from '../services/user-info.service';
import { User } from 'firebase';

@Pipe({
  name: 'ownerName'
})
export class OwnerNamePipe implements PipeTransform {
  transform(value: any, allUserInfos: UserInfo[]): any {
    if (value) {
      for (const userInfo of allUserInfos) {
        if (userInfo.userAssociatedId === value) {
          return userInfo.displayName;
        }
      }
    }
  }
}
