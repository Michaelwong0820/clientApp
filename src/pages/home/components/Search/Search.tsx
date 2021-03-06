// @flow
import * as React from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import {history} from 'umi'
type Props = {
  citys: Array<{ label: string; value: string }>;
  citysLoading: boolean;
};

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

  // 跳转到搜索页
  const handleClick = () => {
    if(times.includes('~')) {
      history.push({
        pathname:'/search',
        query: {
          city: value,
          startTime: times.split('~')[0],
          endTime: times.split('~')[1],
        }
      })
    }else {
      Toast.fail('请选择时间')
    }
  }

  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        {!props.citysLoading && (
          <Picker
            title={'城市'}
            data={props.citys}
            visible={visible}
            value={value}
            onChange={(date) => handleChangeCity(date)}
            cols={1}
            onVisibleChange={(bool) => {
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
        )}
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleDate}>
        <div className="search-time-left">出租时间</div>
        <div className="search-time-right">{times}</div>
      </div>

      {/* 搜索按钮 */}
      <Button size="large" style={{ marginTop: 10 }} type="warning" onClick={handleClick}>
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
