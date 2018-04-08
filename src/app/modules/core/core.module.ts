import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core.routing';
import {MessagesModule} from '../messages/messages.module';
import {ChatModule} from '../chat/chat.module';
import {CORE_COMPONENTS} from './components';
import {UserModule} from '../user/user.module';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/user/user.reducers';
import {initialState} from './store/state';

@NgModule({
  imports: [
    CoreRoutingModule,
    MessagesModule,
    ChatModule,
    UserModule,
    StoreModule.forRoot({users: userReducer}, {initialState})
  ],
  declarations: [
    ...CORE_COMPONENTS
  ],
  providers: [],
  exports: [
    RouterModule,
    MessagesModule,
    ChatModule,
    UserModule,
    ...CORE_COMPONENTS
  ]
})
export class CoreModule {
}
