import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import {
  BsHouseDoorFill,
  BsHouseDoor,
  BsGiftFill,
  BsGift,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs';
import { history } from 'umi';

import './index.less';
class MenuBar extends React.Component<
  {
    show: boolean;
    pathname: string;
  },
  {
    items: {
      title: string;
      link: string;
      icon: any;
      selectIcon: any;
    }[];
  }
> {
  static defaultProps: {};
  static proptypes: {
    show: PropTypes.Requireable<boolean>;
    pathname: PropTypes.Requireable<string>;
  };
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
          title: '首页',
          link: '/',
          icon: <BsHouseDoor style={{ fontSize: '1.5rem' }} />,
          selectIcon: <BsHouseDoorFill style={{ fontSize: '1.5rem' }} />,
        },
        {
          title: '订单',
          link: '/order',
          icon: <BsGift style={{ fontSize: '1.5rem' }} />,
          selectIcon: <BsGiftFill style={{ fontSize: '1.5rem' }} />,
        },
        {
          title: '我的',
          link: '/user',
          icon: <BsPerson style={{ fontSize: '1.5rem' }} />,
          selectIcon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
        },
      ],
    };
  }

  TabList = (props: { show: any; pathname: any; }) => {
    return (
      <TabBar hidden={!props.show}>
        {this.state.items.map((item) => (
          <TabBar.Item
            key={item.link}
            title={item.title}
            icon={item.icon}
            selectedIcon={item.icon}
            selected={props.pathname === item.link}
            onPress={()=>{
              history.push(item.link)
            }}
          />
        ))}
      </TabBar>
    );
  };

  render() {
    const { show, pathname } = this.props;
    return (
      <>
        <div className="menu-bar">{this.TabList({ show, pathname })}</div>
      </>
    );
  }
}

MenuBar.defaultProps = {
  show: false,
  pathname: '',
};

MenuBar.proptypes = {
  show: PropTypes.bool,
  pathname: PropTypes.string,
};

export default MenuBar;
