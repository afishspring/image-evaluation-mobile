<template>
    <div class="user-profile">
      <h1>个人信息</h1>
      <div class="user-info">
        <div class="user-avatar">
          <img src="../../public/avatar/image_1.jpg" alt="">
        </div>
        <div class="user-main">
          <h1></h1>
          <span class="info">
            <a href="#">编辑个人资料</a>
          </span>
        </div>
        <ul class="user-more-info">
          <li>
            <div>
              <span>关注</span>
              <strong>77</strong>
            </div>
          </li>
          <li>
            <div>
              <span>粉丝</span>
              <strong>44</strong>
            </div>
          </li>
          <li>
            <div>
              <span>收藏</span>
              <strong>11</strong>
            </div>
          </li>
          <li>
            <div>
              <span>发布图片</span>
              <strong>55</strong>
            </div>
          </li>
        </ul>
      </div>
      <div class="user-info-show">
        <h2>个人作品展示</h2>
        <img src="../../public/avatar/image_2.jpg" alt="">
        <img src="../../public/avatar/image_3.jpg" alt="">
        <img src="../../public/avatar/image_4.jpg" alt="">
        <img src="../../public/avatar/image_5.jpg" alt="">
      </div>
    </div>
</template>

<script setup>

</script>

<style>
h1 {
  text-align: center;
  margin: 20px 0;
}

.user-info {
  height: 210px;
  background-color: #d4afd5;
  display: flex;
}

.user-info .user-avatar {
  width: 210px;
  height: 210px;
}

.user-info .user-avatar img {
  width: 100%;
  height: 100%;
}

.user-info .user-main {
  width: 570px;
  padding: 20px;
  position: relative;
}

.user-main h1 {
  font-size: 24px;
  color: #333;
  line-height: 44px;
}

.user-main .info {
  font-size: 12px;
  line-height: 22px;
  color: #706c6c;
}

.user-main .info a {
  font-size: 18px;
  padding-left: 20px;
  color: #4e4c4c;
}

.user-main .tools {
  position: absolute;
  right: 20px;
  top: 20px;
  vertical-align: top;
}

.user-main .tools a {
  display: inline-block;
  padding: 3px 0;
  width: 50px;
  color: #fff;
  text-align: center;
}

.user-main .tools a.follow-at {
  background-color: #ff3232;
}

.user-main .tools a.no-follow-at {
  background-color: #999;
}

.user-more-info {
  width: 270px;
  overflow: hidden;
  padding-top: 20px;
}

.user-more-info li {
  width: 100px;
  height: 81px;
  border-radius: 32px;
  border-bottom-right-radius: 0;
  margin: 0 20px 20px 0;
  float: left;
}

.user-more-info li div {
  display: block;
  height: 90px;
  width: 120px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05) inset;
  border-radius: 32px;
  border-bottom-right-radius: 0;
}

.user-more-info li div span {
  font-size: 22px;
  color: #230606;
  line-height: 35px;
  display: block;
  padding-left: 20px;
}

.user-more-info li div strong {
  display: block;
  font-size: 20px;
  color: #df1414;
  font-family: Microsoft Yahei;
  padding-left: 20px;
  line-height: 32px;
}

.user-nav {
  margin: 20px 0;
}

.user-info-show {
  height: 380px;
  background-color: #8a96d3;
  line-height: 32px;
  padding-top: 10px;
}

.user-info-show h2{
  text-align: center;
  font-size: 22px;
}

.user-info-show img {
  padding-top: 20px;
  height: 260px;
  width: 240px;
  margin-right: 20px;
}

.user-info-show .info-empty p {
  text-align: center;
  font-size: 12px;
}

.user-info-show .info-empty a {
  text-align: center;
  display: block;
  height: 48px;
  width: 200px;
  line-height: 48px;
  font-size: 14px;
  background: #ff3232;
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
}

.el-tabs__item.is-active {
  color: #ff3232;
}

.el-tabs__active-bar {
  background-color: #ff3232;
}

.el-tabs__nav-wrap::after {
  background-color: transparent;
}

</style>