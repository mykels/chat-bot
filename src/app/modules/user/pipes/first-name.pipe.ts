import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'firstName'})
export class FirstNamePipe implements PipeTransform {
  transform(userFullName: string, ...args: any[]): string {
    return userFullName.substr(0, userFullName.indexOf(' '));
  }
}
