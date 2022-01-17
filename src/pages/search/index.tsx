import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { useHttpHook } from '@/hooks';
import './index.less';

type IState = {
  housesName: string;
  housesList: Array<any>;
};

class Search extends React.PureComponent<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      housesName: '',
      housesList: [],
    };
  }
  handleSubmit = (value: string) => {
    this.setState({
      housesName: value,
    });
  };
  handleCancel = () => {
    this.setState({
      housesName: '',
    });
  };
  handleChange = (value: string) => {
    this.setState({
      housesName: value,
    });
  };
  componentDidMount() {
    // const [houses, housesLoading] = useHttpHook({
    //   url: '/search/houses',
    //   method: 'post',
    //   headers: {},
    // });
    // console.log([houses, housesLoading]);
    fetch('/api/search/houses', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'post',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({
          housesList: data,
        });
      });
  }
  render() {
    const { housesName, housesList } = this.state;
    return (
      <div>
        <SearchBar
          placeholder="请输入民宿名称"
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
          onChange={this.handleChange}
          value={housesName}
        />
        <div className="searchList">
          {housesList.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" className="itemImg" />
              <div>
                <div className="itemTitle">{item.title}</div>
                <div className="itemPrice">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
