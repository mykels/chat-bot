import {NgModule} from '@angular/core';
import {THREAD_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {THREAD_SERVICES} from './services';
import {ConversationModule} from '../conversation/conversation.module';
import {UserModule} from '../user/user.module';
import {MessageModule} from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    ConversationModule,
    UserModule,
    MessageModule
  ],
  declarations: [
    ...THREAD_COMPONENTS
  ],
  providers: [
    ...THREAD_SERVICES
  ],
  exports: [
    ...THREAD_COMPONENTS
  ]
})
export class ThreadModule {
}
