<template>
  <div class="home-container">

    <el-row :gutter="40">
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <strong>账户余额</strong>
          </div>
          <div class="component-item">
            <p class="component-item-form-title">账户明细<router-link to="/icon/index">更多>></router-link></p>
            <el-table
              :data="tableData"
              :default-sort = "{prop: 'account_name', order: 'descending'}"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="account_name"
                label="公司名称"
                sortable
                width="">占位（避免报错）
              </el-table-column>
              <el-table-column
                prop="account_price"
                label="支出金额"
                sortable
                width="">占位（避免报错）
              </el-table-column>
              <el-table-column
                prop="account_time"
                label="支出时间"
                sortable
                width="">占位（避免报错）
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <strong>当月发放总额</strong>
          </div>
          <div class="component-item">
            <div class="block">
              <el-date-picker
                v-model="value11"
                type="month"
                placeholder="选择日期"
                format="yyyy 年 MM 月"
                value-format="yyyy-MM">占位（避免报错）
              </el-date-picker>
              <div class="card-panel">
                <div class="card-panel-icon-wrapper icon-money">
                  <svg-icon icon-class="money" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                  <div class="card-panel-text">52000.00</div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="40" style="margin-top:50px;">
      <el-col :span="8">
        <el-card class="box-card">
          <div class="component-item">
            <pie-chart/>
            <p class="pie-chart-description"><router-link to="/icon/index">查看详情>></router-link></p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="component-item">
            <pie-chart/>
            <p class="pie-chart-description"><router-link to="/icon/index">查看详情>></router-link></p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="component-item">
            <pie-chart/>
            <p class="pie-chart-description"><router-link to="/icon/index">查看详情>></router-link></p>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PieChart from './components/PieChart'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    PieChart
  },
  data() {
    return {
      demo: {
        title: ''
      },
      value11: '',
      tableData: [{
        account_name: '无限责任有限公司1',
        account_price: '10111100',
        account_time: '2016-05-04'
      }, {
        account_name: '无限责任有限公司2',
        account_price: '10002',
        account_time: '2016-05-04'
      }, {
        account_name: '无限责任有限公司3',
        account_price: '103300',
        account_time: '2016-05-04'
      }, {
        account_name: '无限责任有限公司4',
        account_price: '104124100',
        account_time: '2016-05-04'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.component-item{
  min-height: 251px;
}
.card-panel{
  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }
    .icon-people {
      background: #40c9c6;
    }
    .icon-message {
      background: #36a3f7;
    }
    .icon-money {
      background: #f4516c;
    }
    .icon-shopping {
      background: #34bfa3
    }
  }
  .icon-people {
    color: #40c9c6;
  }
  .icon-message {
    color: #36a3f7;
  }
  .icon-money {
    color: #f4516c;
  }
  .icon-shopping {
    color: #34bfa3
  }
  .card-panel-icon-wrapper {
    // float: left;
    width: 86px;
    margin: 0 auto;
    text-align: center;
    margin-top: 26px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }
  .card-panel-icon {
    // float: left;
    font-size: 48px;
  }
  .card-panel-description {
    // float: right;
    font-weight: bold;
    margin: 26px;
    text-align: center;
    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 32px;
      margin-bottom: 12px;
    }
    .card-panel-num {
      font-size: 20px;
    }
  }
}
.component-item-form-title {
  margin-top: 0;
 a {
  color:#2A93FF;
  cursor:pointer;
  float: right;
  transition: all 0.38s ease-out;
  &:hover {
   color: #66b1ff;
  }
 }
}
.pie-chart-description {
  text-align: center;
  a{
    color:#2A93FF;
    cursor:pointer;
    transition: all 0.38s ease-out;
    &:hover {
      color: #66b1ff;
    }
  }
}
</style>
