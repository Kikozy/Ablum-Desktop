<script setup lang="ts">
import { reactive } from 'vue'
const filesList = reactive([
  {
    id: '1-1',
    filesName: '文件夹1',
    color: '#000',
    children: {
      filesName: '文件夹1-1',
      color: '#000',
    },
  },
  {
    id: '2-1',
    filesName: '文件夹2',
    color: '#000',
    children: {
      filesName: '文件夹1-1',
      color: '#000',
    },
  },
  {
    id: '3',
    filesName: '文件夹3',
    color: '#000',
    children: {
      filesName: '文件夹1-1',
      color: '#000',
    },
  },
])
</script>

<template>
  <div class="global-menu">
    <ul class="menu">
      <li>预览</li>
    </ul>

    <ul class="files-list">
      <li class="files-item-1st" v-for="filesItem1st of filesList">
        <img class="files-icon" src="@/assets/iocn/files_icon.svg" alt="" />
        <span class="files-name">{{ filesItem1st.filesName }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.global-menu {
  min-width: 240px;
  background-color: #333333;
  height: 100vh;
}
.files-list {
  list-style: none;
  padding: 0;
  margin: 0;
  .files-icon {
    height: 24px;
    width: 24px;
  }
  .files-item-1st {
    font-size: 16px;
    line-height: 16px;
    color: #fd6874;
    display: flex;
    align-items: center;
  }
}
</style>
