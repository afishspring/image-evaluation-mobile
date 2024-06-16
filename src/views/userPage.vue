<template>
    <div class="user-profile">
        <h1>个人信息</h1>
        <div class="user-info">
      <div class="user-avatar">
        <img src="https://via.placeholder.com/50" alt="">
      </div>
      <div class="user-main">
        <h1></h1>
        <span class="info">
          <!-- <router-link :to="{name:'edit'}" >编辑个人资料</router-link> -->
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
      <router-view ></router-view>
    </div>
    </div>
</template>

<script setup>

</script>

<style>
.space h1 {
  text-align: center;
  margin: 20px 0;
}

.space .user-info {
  height: 210px;
  background-color: #fff;
  display: flex;
}

.space .user-info .user-avatar {
  width: 210px;
  height: 210px;
}

.space .user-info .user-avatar img {
  width: 100%;
  height: 100%;
}

.space .user-info .user-main {
  width: 570px;
  padding: 20px;
  position: relative;
}

.space .user-main h1 {
  font-size: 24px;
  color: #333;
  line-height: 44px;
}

.space .user-main .info {
  font-size: 12px;
  line-height: 22px;
  color: #999;
}

.space .user-main .info a {
  color: #999;
}

.space .user-main .tools {
  position: absolute;
  right: 20px;
  top: 20px;
  vertical-align: top;
}

.space .user-main .tools a {
  display: inline-block;
  padding: 3px 0;
  width: 50px;
  color: #fff;
  text-align: center;
}

.space .user-main .tools a.follow-at {
  background-color: #ff3232;
}

.space .user-main .tools a.no-follow-at {
  background-color: #999;
}

.space .user-more-info {
  width: 190px;
  overflow: hidden;
  padding-top: 20px;
}

.space .user-more-info li {
  width: 81px;
  height: 81px;
  border-radius: 32px;
  border-bottom-right-radius: 0;
  margin: 0 8px 8px 0;
  float: left;
}

.space .user-more-info li div {
  display: block;
  height: 81px;
  width: 81px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05) inset;
  border-radius: 32px;
  border-bottom-right-radius: 0;
}

.space .user-more-info li div span {
  color: #999;
  line-height: 20px;
  display: block;
  padding-left: 14px;
  padding-top: 14px;
}

.space .user-more-info li div strong {
  display: block;
  font-size: 18px;
  color: #ff3232;
  font-family: Microsoft Yahei;
  padding-left: 14px;
  line-height: 32px;
}

.space .user-nav {
  margin: 20px 0;
}

.space .user-info-show {
  min-height: 300px;
  background: #fff;
  padding-top: 20px;
}

.space .user-info-show .info-empty {
  width: 100%;
  min-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.space .user-info-show .info-empty p {
  text-align: center;
  font-size: 12px;
}

.space .user-info-show .info-empty a {
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

.space .el-tabs__item.is-active {
  color: #ff3232;
}

.space .el-tabs__active-bar {
  background-color: #ff3232;
}

.space .el-tabs__nav-wrap::after {
  background-color: transparent;
}

</style>