<template>
  <div class="c-container">
    <el-row :gutter="10">
      <el-col :span="4">
        <el-tree :data="treeData"></el-tree>
      </el-col>
      <el-col :span="16">
        <div class="map-container" style="padding:0px;background:#fff">
          <div>
            <el-button type="">选择部门</el-button><el-button type="">选择大区</el-button>
          </div>
          <div id="myechat" style="width:900px;height:700px;margin:0px auto;"></div>

          <el-table :data="tableData" :span-method="arraySpanMethod">
            <el-table-column label="地区" prop="city"></el-table-column>
            <el-table-column label prop="row1"></el-table-column>
            <el-table-column label="GDP2017" prop="d1"></el-table-column>
            <el-table-column label="GDP2018" prop="d2"></el-table-column>
            <el-table-column label="GDP2019" prop="d3"></el-table-column>
            <el-table-column label="GDP2019增速" prop="rate"></el-table-column>
            <el-table-column label="区域水文政策">
              <template slot-scope="scope">
                <div v-html="scope.row.text"></div>
              </template>
            </el-table-column>
            <el-table-column label="总分" prop="total"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>文章</span>
            <el-button style="float: right; padding: 3px 0" type="text">下一页</el-button>
          </div>
          <div v-for="o in 10" :key="o" class="article-item">管理后台编辑的文章标题{{o}}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import option from "./option";
import option2 from "./option2";
export default {
  data() {
    return {
      treeData: [
        {
          label: "部门",
          children: [
            {
              label: "市场一部"
            },
            {
              label: "市场三部"
            },
            {
              label: "华东分公司"
            },
            {
              label: "市场二部"
            },
            {
              label: "华北分公司"
            },
             {
              label: "上海分公司"
            },
          ]
        },
        {
          label: "大区",
          children: [
            {
              label: "华东"
            },
            {
              label: "华南"
            },
            {
              label: "华北"
            },
            {
              label: "华中"
            },
            {
              label: "西南"
            }
          ]
        },
        {
          label: "经济带",
          children: [
            {
              label: "京津冀"
            },
            {
              label: "长江经济带"
            },
            {
              label: "珠三角经济带"
            }
          ]
        }
      ],
      tableData: [
        {
          city: "开封",
          row1: "数据",
          d1: "400",
          d2: "500",
          d3: "600",
          rate: "rate1",
          text: "1，中部崛起，政策导向,<br>2，武汉九省通衢<br>3、水利投资充裕",
          total: "200"
        },
        { row1: "评分", d1: "60", rate: "rate2", text: "80" },

        {
          city: "安阳",
          row1: "数据",
          d1: "1000",
          d2: "2000",
          d3: "3000",
          rate: "rate1",
          text: "1、沿海开放城市<br>2、台风天气多3、政府开发投资回报高",
          total: "240"
        },
        { row1: "评分", d1: "90", rate: "rate2", text: "60" },

        {
          city: "开封",
          row1: "数据",
          d1: "400",
          d2: "500",
          d3: "600",
          rate: "rate1",
          text: "1，中部崛起，政策导向,<br>2，武汉九省通衢<br>3、水利投资充裕",
          total: "210"
        },
        { row1: "评分", d1: "60", rate: "rate2", text: "80" },

        {
          city: "安阳",
          row1: "数据",
          d1: "1000",
          d2: "2000",
          d3: "3000",
          rate: "rate1",
          text: "1、沿海开放城市<br>2、台风天气多3、政府开发投资回报高",
          total: "240"
        },
        { row1: "评分", d1: "90", rate: "rate2", text: "60" }
      ],
      myEchat: ""
    };
  },
  mounted() {
    this.myEchat = echarts.init(document.getElementById("myechat"));
    this.myEchat.setOption(option);
  },
  methods: {
    changeOne1() {
      this.myEchat.setOption(option2);
    },
    changeOne2() {
      this.myEchat.setOption(option);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      let rowspan = 1;
      let colspan = 1;
      if (columnIndex === 0 || columnIndex == 7) {
        rowspan = rowIndex % 2 == 0 ? 2 : 0;
      }
      if (rowIndex % 2 == 1) {
        // if (columnIndex == 2) colspan = 3;
        // else if (columnIndex > 2 || columnIndex < 5) {
        //   colspan = 0;
        //   rowspan = 1;
        // }
        // console.log()
      }
      return [rowspan, colspan];
    }
  }
};
</script>

<style>
body {
  background: #cccccc50;
}
.c-container {
  width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
}
.map-container {
  box-sizing: border-box;
}
.el-table {
  width: 910px;
  border: 1px solid #ebeef5;
  margin: 10px;
  box-sizing: border-box;
}
.article-item{
  margin: 5px 10px;
}
</style>