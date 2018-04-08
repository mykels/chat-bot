import {RouterModule, Routes} from '@angular/router';
import {CorrespondenceComponent} from './components/correspondence/correspondence.component';

const routes: Routes = [
  {
    path: '',
    component: CorrespondenceComponent,
  },
  {
    path: ':id',
    component: CorrespondenceComponent,
  }
];

export const MessagesModuleRouting = RouterModule.forChild(routes);
