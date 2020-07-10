let allColor = ['#6fb6ff',
  '#748aff',
  '#b4bdee',
  '#ffe082',
  '#ffaf61',
  '#f5896c',
  '#b796d8',
  '#817e9b',
  '#845fd6',
  '#59487e']
 

var series = [
  {
    name: '大区',
    type: "map",
    map: "china",
    roam: false, //是否允许缩放
    zlevel: 1,
    left: 'center',
    align: 'right',
    legendHoverLink: false,//禁止高亮
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      },
    },
    itemStyle: { //非热点正常地图颜色
      areaColor: '#ff0000' ,
      color:  '#ff0000' ,
      normal: {
        borderWidth: 0,
      },
    },
    data: [
      { name: '广东', value: 1 },
      { name: '广西', value: 1 },
      { name: '贵州', value: 1 },

      { name: '云南', value: 3 },
      { name: '新疆', value: 3 },
      { name: '西藏', value: 3 },
    ],
  },

  {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    map:'china',
    rippleEffect: {
      brushType: 'stroke'
    },
    showEffectOn: 'render',
    itemStyle: {
      normal: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(193,194,195,0.1)'
          }, {
            offset: 0.3,
            color: 'rgba(153,168,166,0.1)'
          }, {
            offset: 1,
            color: 'rgba(0,255,204,0.6)'
          }],
          global: false // 缺省为 false
        },
        borderWidth: 0,
        borderColor: '#b4dccd'
      }
    },
    label: {
      normal: {
        show: true,
        color: '#fff',
        fontWeight: 'bold',
        position: 'inside',
      },
    },
    symbol: 'circle',
    symbolSize: 30,
    data: [{
      name: '深圳',
      value: [116.405285,39.9, 199],
      visualMap: false
    },
    ],
    zlevel: 3,
  },

];

export default {
  title: {
    text: '地图展示',
    subtext: '数据纯属虚构',
    left: 'center',
    top: '40px',
    textStyle: {
      color: '#fff'
    }
  },
  backgroundColor: '#00000050',
  geo: {
    map: "china",
    show: false,
    layoutCenter: ["50%", "50%"], //地图位置
    layoutSize: "120%",
    zoom: 1.152,
    scaleLimit: { min: 0.5, max: 5 },
  },
  visualMap: [{
    type: 'piecewise',
    splitNumber: 1,
    min: 1,
    max: 7,
    hoverLink: true,
    color: allColor.slice(0, 7).reverse(),
    categories: [1, 2, 3, 4, 5, 6, 7],
  }],
  series,
};