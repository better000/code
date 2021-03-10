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
        <Navbar :categories="newsInformation">
          <template #items="{category}">
            <div class="news mt-4 text-primary">
              <ul class="news_bulletin my-3 bg-lightTint text-center fs-ml">
                <span>{{category.titleName}}</span>
              </ul>
              <ul v-for="(news, i) in category.newList" :key="i">
                <span class="news_date">{{news.date}}</span>
                <span class="news_name" :class="{news_name_color1:news.categoryName==='公告', news_name_color2:news.categoryName==='社区', news_name_color3:news.categoryName==='赛事'}">{{news.categoryName}}</span>
                <span class="mx-1">{{news.title}}</span>
              </ul>
            </div>
          </template>
        </Navbar>
        <van-button class="see_more w-100 fs-sl mt-2 mb-5 text-primary">查看更多资讯</van-button>
      </div>
      <!-- 活动中心 -->
      <Menu title="活动中心">
        <Navbar :categories="newsInformation">
          <div class="list_title mb-3">
            <div class="list_details_title bg-whiteTint text-primary my-3 text-center">
              <span>活动名称</span>
              <span>主要奖励</span>
              <span>结束时间</span>
              <span></span>
            </div>
            <van-swipe class="list_details"
                       style="height: 200px;"
                       :loop="false"
                       :height="42"
                       vertical>
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
                <div class="list_details_indicator">
                  <div class="list_details_indicator_actives"></div>
                </div>
              </template>
            </van-swipe>
          </div>
        </Navbar>
      </Menu>
      <!-- 视频推荐 -->
      <Menu title="视频推荐">
        <Navbar :categories="newsInformation">
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
      <Menu title="图文推荐">
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
      <Menu title="明星主播">
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
      <Menu title="品牌专区">
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
      active: 0,
      newsInformation: [
        {
          name: '综合',
          titleName: '[2021年2月]盛开！天界玫瑰 女神枪手三觉登场！',
          newList: new Array(6).fill(1).map((v) => ({
            categoryName: '公告',
            title: '3月4日 早5点停机更新公告',
            date: '03/03'
          }))
        },
        {
          name: '公告',
          titleName: '3月4日 早5点停机更新公告',
          newList: new Array(6).fill(1).map((v) => ({
            categoryName: '公告',
            title: '3月4日 早5点停机更新公告',
            date: '03/03'
          }))
        },
        {
          name: '活动',
          titleName: '国潮许愿开启，国风装扮、镜花水月光环限时抢！',
          newList: new Array(6).fill(1).map((v) => ({
            categoryName: '活动',
            title: '好礼天天见 每天签到就有+7增幅券和纯净黄金书拿！',
            date: '02/24'
          }))
        },
        {
          name: '社区',
          titleName: '新版本回归勇士福利一览，快速跟上版本步伐不是问题!',
          newList: new Array(6).fill(1).map((v) => ({
            categoryName: '社区',
            title: '永恒大陆特殊奖励不知在哪拿，这份阿拉德探险记攻略请收好',
            date: '02/08'
          }))
        },
        {
          name: '赛事',
          titleName: '嗨战冬日，巅峰对决!虎牙大师杯电竞赛火热来袭',
          newList: new Array(6).fill(1).map((v) => ({
            categoryName: '赛事',
            title: '2020DNF嘉年华落地武汉 F1天王赛即将开战',
            date: '12/10'
          }))
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';
</style>
