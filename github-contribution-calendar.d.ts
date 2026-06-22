declare module 'github-contribution-calendar' {
  import { ComponentType } from 'react';

  export interface GitHubCalendarProps {
    username: string;
    token?: string;
    year?: number | 'last';
    showLabels?: boolean;
    fontSize?: number;
    theme?: string;
    [key: string]: any;
  }

  export const GitHubCalendar: ComponentType<GitHubCalendarProps>;
}
