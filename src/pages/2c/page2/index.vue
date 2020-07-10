<template>
  <div class="c-container">
    <el-select v-model="search.option" placeholder="三大经济圈">
      <el-option :label="'长三角经济圈'" :value="'a'"></el-option>
    </el-select>
    <el-select v-model="search.option2" placeholder="7大区" :multiple="true">
      <el-option
        v-for="(item,index) in optionlist"
        :label="item.label"
        :value="item.value"
        :key="index"
      ></el-option>
    </el-select>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <ve-pie :data="chartData"></ve-pie>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <ve-histogram :data="chartData2"></ve-histogram>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-table :data="table">
            <el-table-column label="地区" prop="area"></el-table-column>
            <el-table-column label="GBP总量">
              <el-table-column label="2017" prop="2017"></el-table-column>
              <el-table-column label="2018" prop="2018"></el-table-column>
              <el-table-column label="2019" prop="2019"></el-table-column>
            </el-table-column>

            <el-table-column label="GBP增速">
              <el-table-column label="2019" prop="rate"></el-table-column>
            </el-table-column>
            <el-table-column label="有利政策" prop="good"></el-table-column>
          </el-table>
        </div>
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
      search: {
        option: "",
        option2: ""
      },
      optionlist: [
        { label: "华东", value: 1 },
        { label: "华北", value: 2 },
        { label: "华南", value: 3 },
        { label: "西北", value: 4 },
        { label: "东北", value: 5 }
      ],
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "华中", 访问用户: 1393 },
          { 日期: "华北", 访问用户: 3530 },
          { 日期: "华南", 访问用户: 2923 },
          { 日期: "西北", 访问用户: 1723 },
          { 日期: "东北", 访问用户: 3792 }
        ]
      },
      chartData2: {
        columns: ["日期", "2017", "2018", "2019"],
        rows: [
          { 日期: "华中", "2017": 1393, "2018": 1093, "2019": 2000 },
          { 日期: "华北", "2017": 3530, "2018": 3230, "2019": 2000 },
          { 日期: "华南", "2017": 2923, "2018": 2623, "2019": 2000 },
          { 日期: "西北", "2017": 1723, "2018": 1423, "2019": 2000 },
          { 日期: "东北", "2017": 3792, "2018": 3492, "2019": 2000 }
        ]
      },
      table: [
        {
          area: "华东",
          "2017": 12344,
          "2018": "2332",
          "2019": "32322",
          rate: "23%",
          good: 10
        },
        {
          area: "华北",
          "2017": 12344,
          "2018": "2332",
          "2019": "32322",
          rate: "23%",
          good: 10
        },
        {
          area: "华中",
          "2017": 12344,
          "2018": "2332",
          "2019": "32322",
          rate: "23%",
          good: 10
        },
        {
          area: "华南",
          "2017": 12344,
          "2018": "2332",
          "2019": "32322",
          rate: "23%",
          good: 10
        },
        {
          area: "东北",
          "2017": 12344,
          "2018": "2332",
          "2019": "32322",
          rate: "23%",
          good: 10
        }
      ]
    };
  },
  mounted() {},
  methods: {}
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
.grid-content {
  padding: 20px;
  background: #fff;
  height: 500px;
  margin-top: 20px;
}
 
</style>