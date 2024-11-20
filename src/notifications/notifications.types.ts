export type SoundNotification =
  | 'default'
  | {
      critical?: boolean;
      name?: 'default';
      volume?: number;
    };
