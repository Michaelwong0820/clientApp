import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less';
import { useHttpHook } from '@/hooks';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Hot from './components/Hot/Hot';

export default function () {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  const [citys, citysLoading] = useHttpHook({
    url: '/commons/citys',
    method: 'post',
    headers: {},
  });
  const [hots] = useHttpHook({
    url: '/commons/hots',
    method: 'post',
    headers: {},
  });

  return (
    <div className="homeCotainer">
      {/* 登录 */}
      <Header />
      {/* 搜索 */}
      <Search
        citys={citys as unknown as Array<{ label: string; value: string }>}
        citysLoading={citysLoading as boolean}
      />
      {/* 热门民宿 */}
      <Hot houses={hots} />
    </div>
  );
}
