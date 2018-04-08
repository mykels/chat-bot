import {animate, state, style, transition, trigger} from '@angular/animations';

export const LIST_APPEAR_ANIMATION = trigger('listAppear', [
  state('in', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(-100px)'
    }),
    animate(300)
  ]),
  transition('* => void', animate(300,
    style({
      opacity: 0,
      transform: 'translateX(100px)'
    }))
  )
]);
