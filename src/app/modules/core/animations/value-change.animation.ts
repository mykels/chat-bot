import {animate, style, transition, trigger} from '@angular/animations';

export const VALUE_CHANGE_ANIMATION = trigger('valueChange', [
  transition(':increment', [
    style({
      transform: 'scale(2)'
    }),
    animate(400)
  ])
]);
