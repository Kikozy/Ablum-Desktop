<template>
  <div class="info-card">
    <img class="img-preview" src="@/assets/img/DSC_4597.jpg" alt="" ref="imgPreview" />
    <input type="text" class="photo-name-input" v-model="infoAll.imgInfo.name" />
    <!-- <input type="text" class="photo-name-mark" /> -->

    <div class="photo-info">
      <p class="titile">图片信息</p>
      <p class="info-item">
        <span class="info-name">评分: </span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">尺寸: </span>
        <span class="info-content">{{ infoAll.imgInfo.width }} X {{ infoAll.imgInfo.heigth }}</span>
      </p>
      <p class="info-item">
        <span class="info-name">设备: </span>
        <span class="info-content">{{ infoAll.imgInfo.model }}</span>
      </p>
      <p class="info-item">
        <span class="info-name">镜头: </span>
        <span class="info-content">{{ infoAll.imgInfo.lens }}</span>
      </p>
      <p class="info-item">
        <span class="info-name">焦距: </span>
        <span class="info-content">{{ infoAll.imgInfo.focalLength }}</span>
      </p>
      <p class="info-item">
        <span class="info-name">光圈: </span>
        <span class="info-content">{{ infoAll.imgInfo.fNumber }}</span>
      </p>
      <p class="info-item">
        <span class="info-name">ISO: </span>
        <span class="info-content">{{ infoAll.imgInfo.iso }}</span>
      </p>

      <p class="info-item">
        <span class="info-name">大小: </span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">格式</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">时间</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
      <p class="info-item">
        <span class="info-name">其他</span>
        <span class="info-content">*****</span>
      </p>
    </div>

    <button class="" @click="loadPhotoInfo">来一下？</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import ExifReader from 'exifreader'

const imgPreview = ref(null)

const infoAll = reactive({
  imgInfo: {
    name: '',
    width: '',
    heigth: '',
    iso: '',
    focalLength: '',
    fNumber: '',
    lens: '',
    model: '',
  },
})

async function loadPhotoInfo() {
  console.log(imgPreview.value.currentSrc)
  let temp = await ExifReader.load(imgPreview.value.currentSrc)
  console.log(temp)
  infoAll.imgInfo = {
    width: temp['Image Width'].value,
    heigth: temp['Image Height'].value,
    iso: temp['ISOSpeedRatings'].value,
    focalLength: temp['FocalLength'].description,
    fNumber: temp['FNumber'].description,
    lens: temp['LensModel'].description,
    model: temp['Model'].description,
    name: temp['PreservedFileName'].description,
  }
  console.log(infoAll.imgInfo)
}
</script>

<style lang="scss" scoped>
.info-card {
  box-sizing: border-box;
  padding: 10px 20px;
  min-width: 240px;
  background-color: #333333;
  min-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 5px 0;
  .img-preview {
    width: auto;
    max-height: 150px;
    object-fit: contain;
  }

  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #262626;
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
    border-radius: 10px;
    background: transparent;
  }
}

.photo-name-input {
  font-size: 16px;
  text-indent: 10px;
  border: 1px solid #383838;
  border-radius: 3px;
  background-color: #292929;
  color: #bfbfbf;
  height: 30px;
  line-height: 30px;
}
</style>
