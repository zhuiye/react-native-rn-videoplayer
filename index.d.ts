declare module 'react-native-rn-videoplayer' {
  import { Component, ReactNode } from 'react';
  import { VideoProperties } from 'react-native-video';

  export interface VideoProps extends VideoProperties {
    url: string;
    autoPlay?: boolean;
    poster?: string;
    ref?: any;
    lockControl?: boolean;
    moreSetting?: () => ReactNode | null;
    showSmallCont?: boolean;
    storeComponent?: () => ReactNode;
    speedColor?: string;
    dotColor?: string;
    dotBorderColor?: string;
    bottomSpeedColor?: string;
    cacheColor?: string;
    allSpeedColor?: string;
    backVideoName?: string;
    pausedTipText?: string;
    loadingText?: string;
    loadingIcon?: ReactNode;
    solText?: string;
    fastText?: string;

    onSmallBack?: () => void;
    onStore?: () => void;
    onMoreFun?: () => void;

    onWindowChange?: (state: 'full' | 'small') => void;

    continuous?: boolean;
    renderAllSeenList?: () => ReactNode;
    nextBtnFun?: () => void | boolean;
  }

  class Video extends Component<VideoProps> {
    seek(time: number, tolerance?: number): void;
    presentFullscreenPlayer(): void;
    dismissFullscreenPlayer(): void;
    setPaused(paused: boolean): void;
    reLoad(autoPlay: boolean): void;
  }

  export default Video;
}
