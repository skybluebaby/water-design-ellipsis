import React, { useState, useEffect, useRef } from 'react';
import Tooltip from './Tooltip';
import { IEllipsisProps } from './index.d';
import styles from './index.module.scss';

const isMobile =
  /Android|iPhone|iphone|iPod|ipod|iPad|ipad|Windows Phone|SymbianOS/i.test(
    navigator.userAgent
  );

const EllipsisContainer: React.FC<Omit<IEllipsisProps, 'tooltipProps'>> = (
  props
) => {
  const {
    children,
    middleOverflow = false, // 选择溢出隐藏截断的位置
    endCharCount = 4, // 尾部剩余字符数
    style,
    className = '',
    line = 1, // 溢出隐藏的行数
    defaultDirectCut = false, // 是否直接文本截断
    wordClassName = '', // 当选直接截断时，每一个字符的类名
    wordStyle,
    prevTextClassName = '', // 当选中间截断时的前面文本样式
    prevTextStyle,
    nextTextClassName = '', // 当选中间截断时的后面文本样式
    nextTextStyle,
    isOverflow,
    setIsOverflow,
    ...rest
  } = props;

  const textRef = useRef(null);

  useEffect(() => {
    const textDom = textRef.current! as HTMLDivElement;
    const { scrollWidth, scrollHeight, clientWidth, clientHeight } =
      textDom || {};
    if (
      textDom &&
      (scrollWidth > clientWidth || scrollHeight - 2 > clientHeight)
    ) {
      setIsOverflow(true);
    }
  }, []);

  // 渲染中间溢出隐藏
  const renderMiddleEllipsis = (children: string) => {
    const childrenStr = `${children}`;
    const startChildren = childrenStr.substr(
      0,
      childrenStr.length - endCharCount
    );
    const endChildren = childrenStr.substr(-endCharCount);
    return (
      <>
        <div
          className={`${styles.prev} ${prevTextClassName}`}
          style={prevTextStyle}
        >
          {startChildren}
        </div>
        <div
          className={`${styles.next} ${nextTextClassName}`}
          style={nextTextStyle}
        >
          {endChildren}
        </div>
      </>
    );
  };

  // 渲染每一个字符
  const renderWord = (children: string) => {
    const childrenArr = `${children}`.split('');
    return childrenArr.map((word, index) => {
      return (
        <span className={`${wordClassName}`} style={wordStyle} key={index}>
          {word}
        </span>
      );
    });
  };

  const renderContent = (children: string) => {
    if (isOverflow && middleOverflow) {
      return renderMiddleEllipsis(children);
    }
    return (
      <div
        ref={textRef}
        className={`${styles.prev} ${prevTextClassName}`}
        style={prevTextStyle}
      >
        {children}
      </div>
    );
  };

  if (defaultDirectCut) {
    return (
      <div
        className={`${styles.wrapper} ${className}`}
        style={style}
        ref={textRef}
        {...rest}
      >
        {renderWord(children)}
      </div>
    );
  }

  // 多行隐藏
  if (line > 1) {
    return (
      <div
        className={`${styles.container} ${styles.line} ${className}`}
        style={line > 2 ? { WebkitLineClamp: line, ...style } : style}
        ref={textRef}
        {...rest}
      >
        {children}
      </div>
    );
  }

  // 单行隐藏
  return (
    <div className={`${styles.container} ${className}`} style={style} {...rest}>
      {renderContent(children)}
    </div>
  );
};

const Ellipsis: React.FC<IEllipsisProps> = (props) => {
  const { enableTooltip = true, tooltipProps, ...rest } = props;
  // 是否溢出
  const [isOverflow, setIsOverflow] = useState(false);

  if (!props.children) {
    return null;
  }

  return (
    <>
      <EllipsisContainer
        {...rest}
        isOverflow={isOverflow}
        setIsOverflow={setIsOverflow}
        data-tip
        data-for="water-design-ellipsis"
      />
      {enableTooltip && !isMobile && isOverflow && (
        <Tooltip id="water-design-ellipsis" {...tooltipProps}>
          {props.children}
        </Tooltip>
      )}
    </>
  );
};

Ellipsis.displayName = 'Ellipsis';

export default Ellipsis;
