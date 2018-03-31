import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeedRoutingModule} from './feed.routing';
import {FEED_COMPONENTS} from './components';

@NgModule({
  imports: [
    FeedRoutingModule
  ],
  declarations: [
    ...FEED_COMPONENTS
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class FeedModule {
}
