import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less';

import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Hot from './components/Hot/Hot'

export default function () {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  return (
    <div className="homeCotainer">
      {/* 登录 */}
      <Header />
      {/* 搜索 */}
      <Search />
      {/* 热门民宿 */}
      <Hot />
    </div>
  );
}
