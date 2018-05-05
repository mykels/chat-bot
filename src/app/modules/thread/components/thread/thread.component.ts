import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {THREAD_ANIMATIONS} from './thread.animation';
import {Thread} from '../../types/thread';
import {User} from '../../../user/types/user';

@Component({
    selector: 'cb-thread',
    templateUrl: './thread.component.html',
    styleUrls: ['./thread.component.css'],
    animations: THREAD_ANIMATIONS,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadComponent implements OnInit {
    @Input() thread: Thread;
    @Input() user: User;
    @Output() onSelect = new EventEmitter<Thread>();

    constructor() {

    }

    ngOnInit(): void {
    }

    onClick(): void {
        this.onSelect.emit(this.thread);
    }
}
