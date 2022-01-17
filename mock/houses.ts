const bgImg = 'https://derucci-app-test.oss-cn-hangzhou.aliyuncs.com/upload/20220110/c154f958c17b4f308065b75295e1ac51.png'
export default {
  'post /api/search/houses': (req,res) => {
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
}