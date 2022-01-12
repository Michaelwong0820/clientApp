// @flow
import * as React from 'react';
type Props = {};
const Hot = (props: Props) => {
  const [houses, setHouses] = React.useState([
    {
      id: 1001,
      title: '东城名宿',
      info: '交通方便',
      price: '100',
      img: 'https://derucci-app-test.oss-cn-hangzhou.aliyuncs.com/upload/20220110/c154f958c17b4f308065b75295e1ac51.png',
    },
    {
      id: 1002,
      title: '西城名宿',
      info: '交通方便',
      price: '400',
      img: 'https://derucci-app-test.oss-cn-hangzhou.aliyuncs.com/upload/20220110/c154f958c17b4f308065b75295e1ac51.png',
    },
    {
      id: 1003,
      title: '南城名宿',
      info: '交通方便',
      price: '50',
      img: 'https://derucci-app-test.oss-cn-hangzhou.aliyuncs.com/upload/20220110/c154f958c17b4f308065b75295e1ac51.png',
    },
    {
      id: 1004,
      title: '北城名宿',
      info: '交通方便',
      price: '120',
      img: 'https://derucci-app-test.oss-cn-hangzhou.aliyuncs.com/upload/20220110/c154f958c17b4f308065b75295e1ac51.png',
    },
  ]);
  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hotList">
        {houses.map((item) => (
          <div className="hotItem" key={item.id}>
            <div className='item'>
              <img className="hotImg" src={item.img} alt="" />
              <div className="hotTitle">{item.title}</div>
              <div className="hotInfo">{item.info}</div>
              <div className="hotPrice">${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hot;
