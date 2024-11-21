import { IsObject, IsString, ValidateIf } from 'class-validator';
import { SoundNotification } from './notifications.types';

export class NotificationDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @ValidateIf((o) => typeof o.sound === 'string')
  @IsString()
  sound: 'default' | SoundNotification;

  @ValidateIf((o) => typeof o.sound === 'object')
  @IsObject()
  soundObj?: SoundNotification;
}
