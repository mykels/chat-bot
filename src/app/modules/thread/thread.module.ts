import {NgModule} from '@angular/core';
import {THREAD_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {THREAD_SERVICES} from './services';
import {ConversationModule} from '../conversation/conversation.module';
import {UserModule} from '../user/user.module';
import {THREAD_PIPES} from './pipes';

@NgModule({
  imports: [
    CommonModule,
    ConversationModule,
    UserModule
  ],
  declarations: [
    ...THREAD_COMPONENTS,
    ...THREAD_PIPES
  ],
  providers: [
    ...THREAD_SERVICES
  ],
  exports: [
    ...THREAD_COMPONENTS,
    ...THREAD_PIPES
  ]
})
export class ThreadModule {
}
