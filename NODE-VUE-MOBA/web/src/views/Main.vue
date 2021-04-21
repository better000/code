<template>
  <div>
    <!-- 顶部 -->
    <Top></Top>
    <!-- 轮播图 -->
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in swipeList"
                        :key="index">
          <img class="w-100"
               v-lazy="image.img"
               @click="clickImg(image.url)" />
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
                <span>{{category.news_list[0].title}}</span>
              </ul>
              <router-link tag="ul"
                           :to="`/articles/${news._id}`"
                           v-for="(news, i) in category.news_list"
                           :key="i">
                <span class="news_date">{{news.createdAt | date}}</span>
                <span class="news_name"
                      :class="{news_name_color1:news.cate_name==='公告', news_name_color2:news.cate_name==='社区', news_name_color3:news.cate_name==='赛事'}">{{news.cate_name}}</span>
                <span class="mx-1">{{news.title}}</span>
              </router-link>
            </div>
          </template>
        </Navbar>
        <van-button class="see_more w-100 fs-sl mt-2 mb-5 text-primary">查看更多资讯</van-button>
      </div>
      <!-- 活动中心 -->
      <Menu title="活动中心">
        <Navbar :categories="actioncenter"
                class="actions_center">
          <template #items="{category}">
            <div class="list_title mb-5">
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
                <van-swipe-item v-for="(actions, i) in category.activite_list"
                                :key="i">
                  <li class="text-center w-100 text-primary">
                    <p>{{actions.title}}</p>
                    <p>
                      <img src="@/assets/images/activity1.png" />
                      <!--                       <img src="@/assets/images/activity1.png" />
                      <img src="@/assets/images/activity1.png" />
                      <img src="@/assets/images/activity1.png" /> -->
                    </p>
                    <p class="text-light">{{actions.enddate}}</p>
                    <p><img src="@/assets/images/sprite4.png"
                           @click="clickImg(actions.url)" /></p>
                  </li>
                </van-swipe-item>
                <template #indicator>
                  <div class="list_details_indicator">
                    <div class="list_details_indicator_actives"></div>
                  </div>
                </template>
              </van-swipe>
            </div>
          </template>
        </Navbar>
      </Menu>
      <!-- 游戏角色 -->
      <Menu title="游戏角色">
        <Navbar :categories="heros" class="actions_center text-primary">
          <template #items="{category}">
            <ul class="clearfix">
              <li class="hero mx-1 text-center"
                  v-for="item in category.hero_list"
                  :key="item._id"
                  @click="heroClick(item._id)">
                <div class="avatar-container w-100">
                  <img class="hero-avatar  w-100"
                       :src="item.avatar" />
                </div>
                <h3>{{item.name}}</h3>
              </li>
            </ul>
          </template>
        </Navbar>
      </Menu>
      <!-- 视频推荐 -->
      <Menu title="视频推荐">
        <Navbar :categories="shipings" class="actions_center">
          <template #items="{category}">
          <div class="mb-3">
            <ul v-for="(item, index) in category.shiping_list" :key="index">
              <img class="w-100 pt-1 pb-1"
                   :src="item.imgs">
              <span class="fs-sl text-primary">{{item.title}}</span>
              <div class="video_rec pt-2 fs-sm">
                <span><em></em>{{item.data}}</span>
              </div>
            </ul>
          </div>
          </template>
        </Navbar>
      </Menu>
      <!-- 图文推荐 -->
      <Menu title="图文推荐">
        <div>
          <ul class="tw_list mb-3"
              v-for="(images, i) in TextImgList"
              :key="i">
            <img class="w-100"
                 :src="images.img">
            <div class="tw_text">
              <span class="tw_text_title text-white fs-ll mb-3">女神枪手三次觉醒百科</span>
              <span class="fs-sl text-tint my-3">配装加点一应俱全</span>
              <span class="tw_text_btn text-center text-light my-2"
                    @click="clickImg(images.url)">查看</span>
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
                 src="@/assets/images/picture6.jpg">
            <div class="star_text w-100 text-center py-4">
              <van-image class="mt-2"
                         width="7rem"
                         height="7rem"
                         round
                         :src="require('@/assets/images/picture3.jpg')" />
              <p class="fs-ll text-white my-3">男弹药银狐</p>
              <p class="star_heat text-lightWhite mt-3">热度：368373</p>
              <p class="star_go text-center bg-brown text-light">直播中</p>
            </div>
          </ul>
        </div>
        <div class="mode">
          <ul class="mode_pic d-flex jc-between">
            <img class="w-49"
                 v-for="(images, i) in anchorAds"
                 :key="i"
                 :src="images.img"
                 @click="clickImg(images.url)">
          </ul>
          <ul class="mode_news my-4 text-primary">
            <li class="mode_news_list mb-3">永恒大陆巨龙副本小技巧总结，知道这些做装备更轻松</li>
            <li class="mode_news_list mb-3">黑鸦之境QA：你想知道的都在这里</li>
            <li class="mode_news_list mb-3">【起源第八季】狂战士职业玩法解析</li>
          </ul>
        </div>
      </Menu>
      <!-- 品牌专区 -->
      <Menu title="品牌专区">
        <div class="brand">
          <img class="w-100"
               v-for="(images, i) in Brandlist"
               :key="i"
               :src="images.img"
               @click="clickImg(images.url)">
        </div>
      </Menu>
      <!-- 底部 -->
      <div class="foot text-center fs-sm">
        <p>COPYRIGHT © 1998 - 2021 TENCENT.ALL RIGHTS RESERVED.</p>
        <p>腾讯公司 版权所有</p>
      </div>
    </div>
    <div @click="showPopup" class="service">
      <img class="ml-3" w-100 src="@/assets/images/service.png" />
      <div class="text-light">服务中心</div>
    </div>
    <van-popup v-model="show" round closeable :style="{ height: '42%', width: '80%' }"><log></log></van-popup>
  </div>
</template>

<script>
import Top from '../components/topTitle.vue'
import Menu from '../components/menuTitle.vue'
import Navbar from '../components/navigationBar.vue'
import dayjs from 'dayjs'
import log from './Login.vue'
export default {
  components: {
    Top,
    Menu,
    Navbar,
    log
  },
  filters: {
    date (val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data () {
    return {
      show: false,
      active: 0,
      newsInformation: [],
      swipeList: '',
      anchorAds: '',
      Brandlist: '',
      TextImgList: '',
      actioncenter: [],
      heros: [],
      shipings: [
        {
          name: '热门推荐',
          shiping_list: [
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：告诉我，你们的梦想有多大？无限大！',
              data: '1天以前'
            },
            {
              imgs: require('../assets/images/picture2.jpg'),
              title: 'DNF：神 雕 瞎 侣',
              data: '1天以前'
            }
          ]
        },
        {
          name: '官方视频',
          shiping_list: [
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：守护者三觉-帕拉丁技能展示',
              data: '1天以前'
            },
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：再靠近一点，我想要和你在一起',
              data: '1天以前'
            }
          ]
        },
        {
          name: '攻略视频',
          shiping_list: [
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：守护者三觉-帕拉丁技能展示',
              data: '1天以前'
            },
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：再靠近一点，我想要和你在一起',
              data: '1天以前'
            }
          ]
        },
        {
          name: '赛事视频',
          shiping_list: [
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：守护者三觉-帕拉丁技能展示',
              data: '1天以前'
            },
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：再靠近一点，我想要和你在一起',
              data: '1天以前'
            }
          ]
        },
        {
          name: '娱乐杂谈',
          shiping_list: [
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：守护者三觉-帕拉丁技能展示',
              data: '1天以前'
            },
            {
              imgs: require('../assets/images/picture1.png'),
              title: 'DNF：再靠近一点，我想要和你在一起',
              data: '1天以前'
            }
          ]
        }
      ]
    }
  },

  methods: {
    // 获取新闻信息
    async fetchNewsCats () {
      const res = await this.$http.get('news')
      this.newsInformation = res.data
    },

    // 获取轮播图信息
    async fetchSwipe () {
      const res = await this.$http.get('ads')
      const data = res.data.find((item) => item.name === '轮播图')
      this.swipeList = JSON.parse(JSON.stringify(data.items))
    },

    // 点击图片跳转外部链接
    clickImg (src) {
      window.location.href = src
    },

    // 点击跳转角色详情页
    heroClick (id) {
      this.$router.push(`/hero/${id}`)
    },

    // 获取主播栏广告信息
    async fetchAnchorAds () {
      const res = await this.$http.get('ads')
      const data = res.data.find((item) => item.name === '主播栏广告')
      this.anchorAds = JSON.parse(JSON.stringify(data.items))
    },

    // 获取品牌专区信息
    async fetchBrandAds () {
      const res = await this.$http.get('ads')
      const data = res.data.find((item) => item.name === '品牌专区')
      this.Brandlist = JSON.parse(JSON.stringify(data.items))
    },

    // 获取图文推荐信息
    async fetchTextImg () {
      const res = await this.$http.get('ads')
      const data = res.data.find((item) => item.name === '图文推荐')
      this.TextImgList = JSON.parse(JSON.stringify(data.items))
    },

    // 获取活动中心信息
    async fetchActivity () {
      const res = await this.$http.get('activite')
      this.actioncenter = res.data
    },

    // 获取游戏角色信息
    async fetchHero () {
      const res = await this.$http.get('heros')
      this.heros = res.data
      console.log(this.heros)
    },

    // 服务中心弹出层
    showPopup () {
      this.show = true
    }
  },

  created () {
    this.fetchNewsCats()
    this.fetchSwipe()
    this.fetchBrandAds()
    this.fetchAnchorAds()
    this.fetchTextImg()
    this.fetchActivity()
    this.fetchHero()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main';
</style>
