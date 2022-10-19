import React from 'react';
import ReactDom from 'react-dom';
import Ellipsis from './Ellipsis';
import './index.css';

const App = () => {
  return (
    <Ellipsis className="title" line={2}>
      看花不是花，看雾亦非雾，是宿命还是我糊涂；一把辛酸泪，谁解其中味；想你千万遍，万念都成灰
    </Ellipsis>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
