## 综述

该组件适用于 `web` 环境下的文本溢出，支持：

- 单行溢出隐藏（设置 `width` & `height` 即可）
- 支持溢出尾部省略隐藏
- 支持溢出中间部分省略隐藏
- 多行溢出隐藏（设置 `width` & `height` & `line` 即可）
- 单行或多行溢出直接截断（设置 `defaultDirectCut` 为 `true` 即可）

## 使用

```tsx
import { createRoot } from 'react-dom/client';
import Ellipsis from 'water-design-ellipsis';
import './index.css';

function App() {
  return (
    <Ellipsis className="title">
      看花不是花，看雾亦非雾，是宿命还是我糊涂；看岁月晃晃悠悠，不紧不慢拉着我走
    </Ellipsis>
  );
}

const root = createRoot(document.getElementById('root')!);
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
```

## API

| 参数                | 说明                                           | 类型            | 默认值  | 版本 |
| :------------------ | :--------------------------------------------- | :-------------- | :------ | :--- |
| `className`         | 自定义类名                                     | `string`        | -       |      |
| `style`             | 自定义样式对象                                 | `CSSProperties` | -       |      |
| `defaultDirectCut`  | 选择文本溢出直接截断，无省略号                 | `boolean`       | `false` |      |
| `middleOverflow`    | 是否选择中间位置省略                           | `boolean`       |         | -    |
| `endCharCount`      | 当一行溢出时，且选择中间省略时，文本尾部字符数 | `number`        | `4`     |      |
| `line`              | 选择文本多少行溢出隐藏, 仅在尾部省略生效       | `number`        | `1`     |      |
| `prevTextClassName` | 中间溢出省略前文本自定义类名                   | `string`        | -       |      |
| `nextTextClassName` | 中间溢出省略后文本自定义类名                   | `string`        | -       |      |
| `wordClassName`     | 直接截断每个字符自定义类名                     | `string`        | -       |      |
| `prevTextStyle`     | 中间溢出省略前文本自定义样式对象               | `CSSProperties` | -       |      |
| `nextTextStyle`     | 中间溢出省略后文本自定义样式对象               | `CSSProperties` | -       |      |
| `wordStyle`         | 直接截断每个字符自定义样式对象                 | `CSSProperties` | -       |      |
| `children`          | 文本                                           | `string`        | -       |      |
