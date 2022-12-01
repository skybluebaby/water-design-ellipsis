## 综述

该组件适用于 `web` 环境下的文本溢出，支持：

- 单行溢出隐藏（设置 `width` & `height` 即可）
  - 支持溢出尾部省略隐藏
  - 支持溢出中间部分省略隐藏
- 多行溢出隐藏（设置 `width` & `height` & `line` 即可）
- 单行或多行溢出直接截断（设置 `defaultDirectCut` 为 `true` 即可）
- 支持溢出时 hover 有 tooltip 提示，移动端不支持 tooltip 提示，默认`enableTooltip`开启，请合理设置宽高和字体行高。

## 使用

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Ellipsis from 'water-design-ellipsis';
import './index.css';

function App() {
  return (
    <Ellipsis
      className="title"
      tooltipProps={{ textColor: 'pink', className: 'tool-tip' }}
    >
      看花不是花，看雾亦非雾，是宿命还是我糊涂；看岁月晃晃悠悠，不紧不慢拉着我走
    </Ellipsis>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

```css
.title {
  width: 300px;
  height: 30px;
  font-size: 24px;
  line-height: 30px;
  background-color: skyblue;
}

.tool-tip {
  width: 260px;
}
```

## API

| 参数                | 说明                                                    | 类型            | 默认值  | 版本 |
| :------------------ | :------------------------------------------------------ | :-------------- | :------ | :--- |
| `className`         | 自定义类名                                              | `string`        | -       |      |
| `style`             | 自定义样式对象                                          | `CSSProperties` | -       |      |
| `defaultDirectCut`  | 选择文本溢出直接截断，无省略号                          | `boolean`       | `false` |      |
| `middleOverflow`    | 是否选择中间位置省略                                    | `boolean`       |         | -    |
| `endCharCount`      | 当一行溢出时，且选择中间省略时，文本尾部字符数          | `number`        | `4`     |      |
| `line`              | 选择文本多少行溢出隐藏, 仅在尾部省略生效                | `number`        | `1`     |      |
| `prevTextClassName` | 单行溢出省略前文本自定义类名                            | `string`        | -       |      |
| `nextTextClassName` | 单行溢出省略后文本自定义类名                            | `string`        | -       |      |
| `wordClassName`     | 直接截断每个字符自定义类名                              | `string`        | -       |      |
| `prevTextStyle`     | 单行溢出省略前文本自定义样式对象                        | `CSSProperties` | -       |      |
| `nextTextStyle`     | 单行溢出省略后文本自定义样式对象                        | `CSSProperties` | -       |      |
| `wordStyle`         | 直接截断每个字符自定义样式对象                          | `CSSProperties` | -       |      |
| `enableTooltip`     | 是否开启 tooltip 提示，仅在 PC 端生效                   | `boolean`       | `true`  |      |
| `tooltipProps`      | 提示传入的属性，继承库`react-tooltip`中的`TooltipProps` | `TooltipProps`  | -       |      |
| `children`          | 文本                                                    | `string`        | -       |      |

注：单行溢出外层会嵌套一层盒子，可通过`prevTextClassName`,`prevTextStyle`修改内层盒子样式。
