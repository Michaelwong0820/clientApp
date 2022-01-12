// @flow
import * as React from 'react';
type Props = {};
const Header = (props: Props) => {
  return (
    <div>
      <div className="homeHeader">
        <div className="headerName">民宿</div>
        <div className="headerLogin">
          <span className="login">登录</span>
          <span style={{ padding: '0 10px' }}>|</span>
          <span className="signUp">注册</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
