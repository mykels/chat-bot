import {NgModule} from '@angular/core';
import {THREAD_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {ThreadModuleRouting} from './thread.routing';
import {THREAD_SERVICES} from './services';
import {ConversationModule} from '../conversation/conversation.module';
import {UserModule} from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    ThreadModuleRouting,
    ConversationModule,
    UserModule
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
