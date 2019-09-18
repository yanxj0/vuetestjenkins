<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="item">
      <Input class="input"
             size="default"
             v-model="key" />部门编号
      <Button type="primary"
              @click="butClick">查询</Button>
    </div>
    <Table :columns='columns'
           :dataSource="list"
           :pagination="false"
           :key="index"></Table>
  </div>
</template>
<script>
import { getData } from '../service/about'
import Vue from 'vue'
import { Table, Button, Input } from 'ant-design-vue'
Vue.use(Table)
Vue.use(Button)
Vue.use(Input)

export default {
  name: 'about',
  data: () => {
    return {
      list: [],
      key: '',
      columns: [
        {
          title: '编号',
          dataIndex: 'no'
        },
        {
          title: '编号1',
          dataIndex: 'no1'
        },
        {
          title: '编号2',
          dataIndex: 'no2'
        },
        {
          title: '编号3',
          dataIndex: 'no3'
        }
      ]    }
  },
  components: {
    Table,
    Button,
    Input
  },
  methods: {
    butClick (e) {
      // getPeople()
      let t = +new Date()
      this.list = [
        { 'no': t, 'no1': t + 1, 'no2': t + 2, 'no3': t + 3 }
      ]
    },
    async getPeople () {
      const result = await getData({ deptno: 10 })
      console.log(result)
    }
  }
}
</script>
<style scoped>
.about {
  width: 500px;
  margin: auto;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.input {
  width: 250px;
}
</style>