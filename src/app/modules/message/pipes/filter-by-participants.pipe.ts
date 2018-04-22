import {Pipe, PipeTransform} from '@angular/core';
import {Message} from '../types/message';

@Pipe({name: 'filterByParticipants'})
export class FilterByParticipantsPipe implements PipeTransform {
  transform(messages: Message[], ...args: any[]): any {
    const senderId = args[0];
    const receiverId = args[1];
    return messages.filter(message =>
      (((message.receiver === receiverId) || (message.sender === senderId))) ||
      ((message.receiver === senderId) || (message.sender === receiverId)));
  }
}
