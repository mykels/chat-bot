import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core.routing';
import {ChatModule} from '../chat/chat.module';
import {CORE_COMPONENTS} from './components';
import {UserModule} from '../user/user.module';
import {StoreModule} from '@ngrx/store';
import {initialState, reducerMap} from './store/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThreadModule} from '../thread/thread.module';
import {STORE_INJECTABLES} from './store';
import {BotModule} from '../bot/bot.module';
import {NotificationModule} from '../notification/notification.module';
import {SharedModule} from '../shared/shared.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CoreRoutingModule,
    ThreadModule,
    ChatModule,
    UserModule,
    BotModule,
    NotificationModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerMap, {initialState}),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: false,
    }),
  ],
  declarations: [
    ...CORE_COMPONENTS
  ],
  providers: [
    ...STORE_INJECTABLES
  ],
  exports: [
    RouterModule,
    ThreadModule,
    ChatModule,
    UserModule,
    ...CORE_COMPONENTS
  ]
})
export class CoreModule {
}
