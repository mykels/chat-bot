import {Pipe, PipeTransform} from '@angular/core';
import {Message} from '../types/message';
import {Thread} from '../../thread/types/thread';

@Pipe({name: 'filterByThread'})
export class FilterByThreadPipe implements PipeTransform {
  transform(messages: Message[], ...args: any[]): any {
    const filteredThread = args[0] as Thread;
    return messages.filter(message =>
      filteredThread.messages.indexOf(message.id) !== -1);
  }
}
