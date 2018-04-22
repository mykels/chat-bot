import {animate, state, style, transition, trigger} from '@angular/animations';

export const PANEL_APPEAR_ANIMATION = trigger('panelAppear', [
  state('absent', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateY(-150px)'
    }),
    animate(200)
  ]),
  transition('* => void', animate(200,
    style({
      opacity: 0,
      transform: 'translateY(-150px)'
    }))
  )
]);
