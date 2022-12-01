import React from 'react';
import { createRoot } from 'react-dom/client';
import Ellipsis from '../src';
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

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
