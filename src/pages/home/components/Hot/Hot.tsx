// @flow
import * as React from 'react';
type Props = {
  houses: Array<{
    id: string;
    title: string;
    info: string;
    price: string;
    img: string;
  }>;
};
const Hot = (props: Props) => {
  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hotList">
        {props.houses &&
          props.houses.map((item) => (
            <div className="hotItem" key={item.id}>
              <div className="item">
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
