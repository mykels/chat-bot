import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MESSAGE_ANIMATIONS} from './message.animation';

@Component({
  selector: 'cb-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: MESSAGE_ANIMATIONS
})
export class MessageComponent implements OnInit {
  @Input() message: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigate(['/messages', this.message.id]);
  }
}
