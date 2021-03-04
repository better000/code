<template>
  <div>
    <!-- 顶部 -->
    <div class="py-1 px-2 d-flex jc-around">
      <img src="@/assets/images/logo.png"
           height="37"
           style="border-right:1px solid #d4d3d3">
      <img src="@/assets/images/1.png"
           height="37">
    </div>
    <!-- 轮播图 -->
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images"
                        :key="index">
          <img class="w-100"
               v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="mx-1 mt-1">
      <!-- 新闻公告 -->
      <div>
        <Navbar>
          <van-cell-group>
            <van-cell value="[2021年1月]2021新春版本来袭，新玩法新地图新体验！"
                      class="bg-lightTint van-ellipsis py-3" />
          </van-cell-group>
          <van-cell-group class="news my-0"
                          :border="false">
            <van-cell class="news_value my-0"
                      :border="false"
                      title="公告"
                      value="内容" />
            <van-cell class="news_value my-0"
                      :border="false"
                      title="公告"
                      value="内容" />
            <van-cell class="news_value my-0"
                      :border="false"
                      title="公告"
                      value="内容" />
            <van-cell class="news_value my-0"
                      :border="false"
                      title="公告"
                      value="内容" />
            <van-cell class="news_value my-0"
                      :border="false"
                      title="公告"
                      value="内容" />
            <van-cell class="news_value my-0"
                      :border="false"
                      title="公告"
                      value="内容" />
          </van-cell-group>
        </Navbar>
        <van-button class="see_more w-100 fs-sl my-4 text-primary">查看更多资讯</van-button>
      </div>
      <!-- 活动中心 -->
      <Menu>
        <Navbar>
          <div class="list_title mb-3">
            <div class="list_details_title bg-whiteTint text-primary my-3 text-center">
              <span>活动名称</span>
              <span>主要奖励</span>
              <span>结束时间</span>
              <span></span>
            </div>
            <van-swipe class="list_details" style="height: 200px;" :loop="false" :height="42" vertical>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <van-swipe-item>
              <li class="text-center w-100 text-primary">
                <p>2021新春大礼包111111111111111111111111</p>
                <p>
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                  <img src="@/assets/images/activity1.png" />
                </p>
                <p class="text-light">2021新春大礼包111111111111111111111111</p>
                <p><img src="@/assets/images/sprite4.png" /></p>
              </li>
              </van-swipe-item>
              <template #indicator>
                <div class="list_details_indicator"><div class="list_details_indicator_actives"></div></div>
              </template>
            </van-swipe>
          </div>
        </Navbar>
      </Menu>
      <!-- 视频推荐 -->
      <Menu>
        <Navbar>
          <div class="mb-3">
            <ul>
              <img class="w-100 pt-1 pb-1"
                   src="@/assets/images/picture1.png">
              <span class="fs-sl text-primary">DNF20210225版本宣传视频</span>
              <div class="video_rec pt-2 fs-sm">
                <span><em></em>5天以前</span>
              </div>
            </ul>
            <ul>
              <img class="w-100 pt-3 pb-1"
                   src="@/assets/images/picture1.png">
              <span class="fs-sl text-primary">DNF20210225版本宣传视频</span>
              <div class="video_rec pt-2 fs-sm">
                <span><em></em>5天以前</span>
              </div>
            </ul>
          </div>
        </Navbar>
      </Menu>
      <!-- 图文推荐 -->
      <Menu>
        <div>
          <ul class="tw_list mb-3">
            <img class="w-100"
                 src="@/assets/images/picture2.png">
            <div class="tw_text">
              <span class="tw_text_title text-white fs-ll mb-3">女神枪手三次觉醒百科</span>
              <span class="fs-sl text-tint my-3">配装加点一应俱全</span>
              <span class="tw_text_btn text-center text-light my-2">查看</span>
            </div>
          </ul>
          <ul class="tw_list mb-3">
            <img class="w-100"
                 src="@/assets/images/picture2.png">
            <div class="tw_text">
              <span class="tw_text_title text-white fs-ll mb-3">女神枪手三次觉醒百科</span>
              <span class="fs-sl text-tint my-3">配装加点一应俱全</span>
              <span class="tw_text_btn text-center text-light my-2">查看</span>
            </div>
          </ul>
        </div>
      </Menu>
      <!-- 明星主播 -->
      <Menu>
        <div>
          <ul class="star mb-3">
            <img class="star_pic w-100 h-100"
                 src="@/assets/images/picture4.jpg">
            <div class="star_text w-100 text-center py-4">
              <van-image class="mt-2"
                         width="7rem"
                         height="7rem"
                         round
                         :src="require('@/assets/images/picture5.jpg')" />
              <p class="fs-ll text-white my-3">叨叨叨、</p>
              <p class="star_heat text-lightWhite mt-3">热度：680840</p>
              <p class="star_go text-center bg-brown text-light">直播中</p>
            </div>
          </ul>
          <ul class="star mb-3">
            <img class="star_pic w-100 h-100"
                 src="@/assets/images/picture4.jpg">
            <div class="star_text w-100 text-center py-4">
              <van-image class="mt-2"
                         width="7rem"
                         height="7rem"
                         round
                         :src="require('@/assets/images/picture5.jpg')" />
              <p class="fs-ll text-white my-3">叨叨叨、</p>
              <p class="star_heat text-lightWhite mt-3">热度：680840</p>
              <p class="star_go text-center bg-brown text-light">直播中</p>
            </div>
          </ul>
        </div>
        <div class="mode">
          <ul class="mode_pic d-flex jc-between">
            <img class="w-49"
                 src="@/assets/images/picture6.jpg">
            <img class="w-49"
                 src="@/assets/images/picture6.jpg">
          </ul>
          <ul class="mode_news my-4 text-primary">
            <li class="mode_news_list mb-3">永恒大陆巨龙副本小技巧总结，知道这些做装备更轻松</li>
            <li class="mode_news_list mb-3">永恒大陆巨龙副本小技巧总结，知道这些做装备更轻松</li>
            <li class="mode_news_list mb-3">永恒大陆巨龙副本小技巧总结，知道这些做装备更轻松</li>
          </ul>
        </div>
      </Menu>
      <!-- 品牌专区 -->
      <Menu>
        <div class="brand">
          <img class="w-100"
               src="@/assets/images/pic1.jpeg">
          <img class="w-100"
               src="@/assets/images/pic1.jpeg">
        </div>
      </Menu>
      <!-- 底部 -->
      <div class="foot text-center fs-sm">
        <p>COPYRIGHT © 1998 - 2021 TENCENT.ALL RIGHTS RESERVED.</p>
        <p>腾讯公司 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/menuTitle.vue'
import Navbar from '../components/navigationBar.vue'
export default {
  components: {
    Menu,
    Navbar
  },
  data () {
    return {
      images: [
        require('@/assets/images/swipe1.jpeg'),
        require('@/assets/images/swipe2.jpeg'),
        require('@/assets/images/swipe3.jpeg'),
        require('@/assets/images/swipe4.jpeg'),
        require('@/assets/images/swipe5.jpeg'),
        require('@/assets/images/swipe6.jpeg'),
        require('@/assets/images/swipe7.jpeg'),
        require('@/assets/images/swipe8.jpeg'),
        require('@/assets/images/swipe9.jpeg')
      ],
      active: 0
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';
</style>
