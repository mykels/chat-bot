import {Notifiable} from '../../core/types/notifiable';

export interface Thread extends Notifiable {
    id: string;
    user: string;
    summary: string;
    date: Date;
    opened?: boolean;
    messages: string[];
}
