import {Notifiable} from '../../core/types/notifiable';

export interface User extends Notifiable {
    id: string,
    name: string,
    avatar: string,
    online: boolean;
}
