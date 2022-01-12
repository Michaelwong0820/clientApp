// @flow
import * as React from 'react';
import { Picker, List, Calendar, Button } from 'antd-mobile';
import dayjs from 'dayjs';
type Props = {};

const city = [
  { label: '上海', value: '10001' },
  { label: '北京', value: '10002' },
  { label: '重庆', value: '10003' },
  { label: '广东', value: '10004' },
  { label: '浙江', value: '10005' },
  { label: '湖南', value: '10006' },
  { label: '云南', value: '10007' },
];

function Search(props: Props) {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState<string[]>(['10001']);
  const [times, setTimes] = React.useState('可选时间');
  const [dateShow, setDateShow] = React.useState(false);

  const handleChangeCity = (e: any) => {
    setValue(e);
    setVisible(false);
  };

  const handleDate = () => {
    setDateShow(!dateShow);
  };

  const handleConfirmDate = (
    startDate: string | number | Date | dayjs.Dayjs | null | undefined,
    endDate: string | number | Date | dayjs.Dayjs | null | undefined,
  ) => {
    const date =
      dayjs(startDate).format('YYYY-MM-DD') +
      '~' +
      dayjs(endDate).format('YYYY-MM-DD');
    setTimes(date);
    setDateShow(!dateShow);
  };

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        <Picker
          title={'城市'}
          data={city}
          visible={visible}
          value={value}
          onChange={(date) => handleChangeCity(date)}
          cols={1}
          onVisibleChange={(bool)=>{
            setVisible(bool);
          }}
        >
          <List.Item
            onClick={() => {
              setVisible(true);
            }}
          >
            可选城市
          </List.Item>
        </Picker>
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleDate} >
        <div className="search-time-left">出租时间</div>
        <div className="search-time-right">{times}</div>
      </div>

      {/* 搜索按钮 */}
      <Button size="large" style={{ backgroundColor: '#f00', color: '#fff',marginTop: 10 }}>
        搜索民宿
      </Button>
      {/* 时间挂件 */}
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleConfirmDate}
      />
    </div>
  );
}

export default Search;
