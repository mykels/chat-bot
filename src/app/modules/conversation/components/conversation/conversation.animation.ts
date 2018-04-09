import {animate, state, style, transition, trigger} from '@angular/animations';

export const MESSAGE_APPEAR_ANIMATION = trigger('messageAppear', [
  state('in', style({
    opacity: 1,
    transform: 'scale(1)'
  })),
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'scale(0.5)'
    }),
    animate(200)
  ])
]);

export const CONVERSATION_ANIMATIONS = [
  MESSAGE_APPEAR_ANIMATION
];
