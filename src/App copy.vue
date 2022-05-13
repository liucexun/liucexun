<template>
  <FistCmpt />
  <hr>

  <DataCmpt />
  <hr>

  <MethodsCmptVue />
  <hr>

  <ComputedCmpt />
  <hr>

  <WatchCmptVue />
  <hr>

  <!-- @的是自定义 event组件中 -->
  <EventCmpt  @dodata="doStn"/>
  <hr>

  <LifeCycleCmptVue />
  <hr>

  <strong>{{stuName}}</strong>
  <PropsCmptVue :stuName="stuName" :stuAddress="stuAddress" />
  <button @click="changeStuName">改变name</button>
  <button @click="changeAddress">改变address</button>

  <hr>
  <RefCmptVue />

  <hr>
  <SetupFirstCmptVue />

  <hr>
  <SetupPropsCmptVue :stuName="stuName" :stuAge="stuAge"/>
  <button @click="changeStuName">点击改变stuName</button>

  <hr>
  <ReactiveCmptVue />

  <hr>
  <h1>表格组件(拆分)</h1>
  <PricticeOneVue/>

  <hr>
  <SetupEmitsVue @click="doStn"/>
</template>

<script setup>
import { ref } from 'vue';
/* 
  setup语法糖：
    - 不再有export default的对象了
    - 组件无需引入，直接引入即可使用
*/
// 引入组件，无需components注册，直接使用即可
import FistCmpt from '@/components/FistCmpt.vue'
import DataCmpt from './components/DataCmpt.vue';
import MethodsCmptVue from './components/MethodsCmpt.vue';
import ComputedCmpt from './components/ComputedCmpt.vue';
import WatchCmptVue from './components/WatchCmpt.vue';
import EventCmpt from './components/EventCmpt.vue';
import LifeCycleCmptVue from './components/LifeCycleCmpt.vue';
import PropsCmptVue from './components/PropsCmpt.vue';
import RefCmptVue from './components/RefCmpt.vue';
import SetupFirstCmptVue from './components/SetupFirstCmpt.vue';
import SetupPropsCmptVue from './components/SetupPropsCmpt.vue';
import ReactiveCmptVue from './components/ReactiveCmpt.vue';
// 表格组件
import PricticeOneVue from './components/PricticeOne/PricticeOne.vue';

import SetupEmitsVue from './components/SetupEmits.vue';


function doStn(data){
  console.log(data);
}

// 定义stuName
const stuName = ref('张三')
const stuAge = ref(18)
const stuAddress = ref('重庆市渝北区')
// 自定义修改方法
function changeStuName() {
  stuName.value = '李四'
}
function changeAddress(){
  stuAddress.value = '重庆市巴南区'
}
</script>



<style lang="scss" scoped>

</style>