import {Pipe, PipeTransform} from '@angular/core';
import {Message} from '../types/message';
import {Thread} from '../types/thread';

@Pipe({name: 'filterByThread'})
export class FilterByThread implements PipeTransform {
  transform(messages: Message[], ...args: any[]): any {
    const filteredThread = args[0] as Thread;
    return messages.filter(message =>
      filteredThread.messages.indexOf(message.id) !== -1);
  }
}
