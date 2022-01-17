// import bgImg from './src/assets/images/bg_blessCard_active_04@3x.png'
const bgImg = 'https://derucci-app-test.oss-cn-hangzhou.aliyuncs.com/upload/20220110/c154f958c17b4f308065b75295e1ac51.png'
export default {
  'post /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: [
        { label: '上海', value: '10001' },
        { label: '北京', value: '10002' },
        { label: '重庆', value: '10003' },
        { label: '广东', value: '10004' },
        { label: '浙江', value: '10005' },
        { label: '湖南', value: '10006' },
        { label: '云南', value: '10007' },
        { label: '河南', value: '10008' },
      ],
      code: 0
    });
  },
  'post /api/commons/hots': (req,res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 1001,
          title: '东城名宿',
          info: '交通方便',
          price: '100',
          img: bgImg,
        },
        {
          id: 1002,
          title: '西城名宿',
          info: '交通方便',
          price: '400',
          img: bgImg,
        },
        {
          id: 1003,
          title: '南城名宿',
          info: '交通方便',
          price: '50',
          img: bgImg,
        },
        {
          id: 1004,
          title: '北城名宿',
          info: '交通方便',
          price: '120',
          img: bgImg,
        },
      ],
      code: 0
    })
  }
};
