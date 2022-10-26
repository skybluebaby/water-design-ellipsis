// 外部可访问的类型放这
import React from 'react';
import { TooltipProps } from 'react-tooltip';
export interface IEllipsisProps {
  className?: string;
  style?: React.CSSProperties;
  defaultDirectCut?: boolean;
  middleOverflow?: boolean;
  endCharCount?: number;
  line?: number;
  prevTextClassName?: string;
  nextTextClassName?: string;
  wordClassName?: string;
  prevTextStyle?: React.CSSProperties;
  nextTextStyle?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
  children?: string;
  enableTooltip?: boolean;
  tooltipProps?: TooltipProps;
  [key: string]: any;
}

declare const Ellipsis: React.FC<IEllipsisProps>;
export default Ellipsis;
