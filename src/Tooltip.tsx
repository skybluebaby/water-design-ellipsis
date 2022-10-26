import React from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

export default class Tooltip extends React.Component<TooltipProps> {
  render(): React.ReactNode {
    const { children, ...rest } = this.props;
    return <ReactTooltip {...rest}>{children}</ReactTooltip>;
  }
}
