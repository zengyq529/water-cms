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


var geoCoordMap = {
  '北京': [116.4551, 40.2539],
  "天津": [117.4219, 39.4189],

  '深圳': [114.072026, 22.552194],
  "广州": [113.12244, 23.009505],
  '东莞': [113.764742, 23.02039],
  '珠海': [113.556111, 22.250876],
  "海口": [110.35, 20.02],
  "佛山": [113.11, 23.05],
  "汕头": [116.69, 23.39],


  "杭州": [119.5313, 29.8773],
  "苏州": [118.8062, 31.9208],
  '上海': [121.4648, 31.2891],

  '深圳': [114.072026, 22.552194],
  "成都": [103.9526, 30.7617],
  "郑州": [113.4668, 34.6234],
  "宁波": [121.640618, 29.86206],
  "合肥": [117.29, 32.0581],
  "重庆": [108.384366, 30.439702],
  "广州": [113.12244, 23.009505],
  "大连": [123.1238, 42.1216],
  "青岛": [117.1582, 36.8701],

  '义乌': [120.067209, 29.346921],
  '东莞': [113.764742, 23.02039],
  "长沙": [113.0823, 28.2568],
  "贵阳": [106.6992, 26.7682],
  '珠海': [113.556111, 22.250876],
  '威海': [122.109148, 37.516889],
  "泉州": [118.58, 24.93],
  "厦门": [118.1, 24.46],
  "福州": [119.3, 26.08],
  "汕头": [116.69, 23.39],
  "岳阳": [113.09, 29.37],
  "武汉": [114.31, 30.52],
  "义乌": [120.06, 29.32],
  "唐山": [118.02, 39.63],
  "石家庄": [114.48, 38.03],



};

let scatterData = [];
for (let i in geoCoordMap) {
  scatterData.push({
    name: i,
    value: geoCoordMap[i],
    visualMap: false
  })
}

var lineStyle = {
  color: "#000",
  curveness: 0.3,
}
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
        show: true
      },
      emphasis: {
        show: false
      },
    },
    itemStyle: { //非热点正常地图颜色
      normal: {
        borderWidth: 0,
      },
    },
    data: [
      { name: '广东', value: 1 },
      { name: '广西', value: 1 },
      { name: '贵州', value: 1 },

      { name: '黑龙江', value: 2 },
      { name: '吉林', value: 2 },
      { name: '辽宁', value: 2 },
      { name: '内蒙古', value: 2 },

      { name: '云南', value: 3 },
      { name: '新疆', value: 3 },
      { name: '西藏', value: 3 },

      { name: '青海', value: 4 },
      { name: '甘肃', value: 4 },
      { name: '四川', value: 4 },

      { name: '河北', value: 5 },
      { name: '北京', value: 5 },
      { name: '天津', value: 5 },
      { name: '山西', value: 5 },
      { name: '陕西', value: 5 },
      { name: '宁夏', value: 5 },

      { name: '山东', value: 6 },
      { name: '河南', value: 6 },
      { name: '湖北', value: 6 },
      { name: '江西', value: 6 },
      { name: '湖南', value: 6 },
      { name: '重庆', value: 6 },

      { name: '安徽', value: 7 },
      { name: '江苏', value: 7 },
      { name: '浙江', value: 7 },
      { name: '福建', value: 7 },
      { name: '台湾', value: 7 },

    ],
  },

  {
    type: 'graph',
    coordinateSystem: 'geo',
    map: 'china',
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
        show: false,
        color: '#fff',
        fontWeight: 'bold',
        position: 'inside',
      },
    },
    links: [{ source: '深圳', target: '海口', lineStyle }, { source: '深圳', target: '广州', lineStyle }, { source: '深圳', target: '佛山', lineStyle }, { source: '深圳', target: '汕头', lineStyle }],
    symbolSize: 20,
    data: scatterData,
    zlevel: 3,
  },

  {
    type: 'scatter',
    coordinateSystem: 'geo',
    map: 'china',
    rippleEffect: {
      brushType: 'stroke'
    },
    label: {
      show: true,
      color: "#ff00ff90",
      formatter({ value }) {
        return value[2]
      }
    },
    symbolSize: 100,
    data: [{
      name: '深圳', value: [114.072026, 22.552194, '珠三角经济圈'],
      itemStyle: {
        color: '#00000000',
        borderColor: '#ff00ff60',
        borderWidth: 3,
        borderType: 'solid',
      }
    },
    {
      name: '北京', value: [116.4551, 40.2539,'京津冀经济圈'],
      itemStyle: {
        color: '#00000000',
        borderColor: '#ff00ff60',
        borderWidth: 3,
        borderType: 'solid',
      }
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
  backgroundColor: '#fff',
  geo: {
    map: "china",
    show: false,
    layoutCenter: ["50%", "50%"], //地图位置
    layoutSize: "100%",
    zoom: 1,
    // scaleLimit: { min: 0.5, max: 5 },
  },
  visualMap: [{
    type: 'piecewise',
    splitNumber: 1,
    min: 1,
    max: 7,
    hoverLink: true,
    color: allColor.slice(0, 7),
    categories: [1, 2, 3, 4, 5, 6, 7],
  }],
  series,
};