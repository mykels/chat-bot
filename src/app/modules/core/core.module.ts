import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core.routing';

@NgModule({
  imports: [
    CoreRoutingModule
  ],
  declarations: [],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class CoreModule {
}
