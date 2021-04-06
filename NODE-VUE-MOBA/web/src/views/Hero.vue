<template>
  <div class="page-hero" v-if="heroData">
    <div class="py-2 px-3 d-flex ai-center text-white fs-ml bg-grey">
      <img src="../assets/images/logo1.png" height="30">
      <div class="px-2 flex-1">
        <span>DNF</span>
        <span class="ml-2">角色详解</span>
      </div>
      <router-link to="/" tag="div">返回首页 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${heroData.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{heroData.title}}</div>
        <h2 class="my-2">{{heroData.name}}</h2>
        <div class="fs-sm">{{heroData.cate.map(cate => cate.name).join('/')}}</div>
        <div class="d-flex jc-between pt-1 fs-sm">
          <div class="scores d-flex ai-center" v-if="heroData.scores">
            <span>难度</span>
            <span class="badge bg-light">{{heroData.scores.difficulty}}</span>
            <span>升级</span>
            <span class="badge bg-blue">{{heroData.scores.skill}}</span>
            <span>伤害</span>
            <span class="badge bg-yellow">{{heroData.scores.attack}}</span>
            <span>血量</span>
            <span class="badge bg-danger">{{heroData.scores.survive}}</span>
          </div>
          <span class="text-grey fs-sm" @click="showSkin = true">时装：{{heroData.skins.length}} &gt;</span>
        </div>
      </div>
    </div>
    <div class="main p-2">
      <div class="tip2" v-if="heroData.skills.length ==0">
        <img class="" src="../assets/images/hero/tip.png" alt="">
      </div>
      <div class="hero-video d-flex jc-between">
        <span @click="showVideo = true">
          <i class="i-video"></i> 角色介绍视频
        </span>
        <span @click="showPhoto = true">
          <i class="i-photo"></i> 角色图文
        </span>
      </div>
      <!-- 技能图标 -->
      <ul class="hero-skills my-3">
        <li :class="{active: currentIndex == i}" v-for="(item,i) in heroData.skills" :key="item._id" @click="currentIndex = i">
          <img class="w-100 h-100" :src="item.icon" />
        </li>
      </ul>
      <!-- 技能介绍 -->
      <div class="skill-info">
        <h3>
          <span class="mr-4">{{currentSkill.name}}</span>
          <span class="text-lightGray fs-sm">(冷却值：{{currentSkill.delay}}消耗：{{currentSkill.cost}})</span>
        </h3>
        <p>{{currentSkill.desc}}</p>
        <p class="text-lightGray fs-sm">小提示：{{currentSkill.tips}}</p>
      </div>
    </div>
    <div class="panel px-2 pb-2">
      <div>
        <div class="icon-l mr-2"></div>
        <h3>装备搭配</h3>
      </div>
      <div class="hero_equipment text-primary">
        <div>
          <span class="fs-sl">格斗推荐</span>
          <ul class="d-flex jc-between py-3 text-center">
            <li v-for="item in heroData.downWind.equipment" :key="item._id">
              <img :src="item.icon" alt />
              <div class="fs-sm">{{item.name}}</div>
            </li>
          </ul>
          <span class="fs-sm">小提示：{{heroData.downWind.tips}}</span>
        </div>
        <hr>
        <div class="mt-3">
          <span class="fs-sl">打团推荐</span>
          <ul class="d-flex jc-between py-3 text-center">
            <li v-for="item in heroData.upWind.equipment" :key="item._id">
              <img :src="item.icon" alt />
              <div class="fs-sm">{{item.name}}</div>
            </li>
          </ul>
          <span class="fs-sm">小提示：{{heroData.upWind.tips}}</span>
        </div>
      </div>
    </div>
    <div class="panel px-2 pb-2">
      <div>
        <div class="icon-2 mr-2"></div>
        <h3>使用技巧</h3>
      </div>
      <span>{{heroData.usageTips}}</span>
    </div>
    <div class="panel px-2 pb-2">
      <div>
        <div class="icon-3 mr-2"></div>
        <h3>对抗技巧</h3>
      </div>
      <span>{{heroData.battleTips}}</span>
    </div>
    <div class="panel px-2 pb-2">
      <div>
        <div class="icon-4 mr-2"></div>
        <h3>团战技巧</h3>
      </div>
      <span>{{heroData.teamTips}}</span>
    </div>
    <div class="panel px-2 pb-2">
      <div>
        <div class="icon-5 mr-2"></div>
        <h3>角色关系</h3>
      </div>
      <div>
        <span>最佳搭档</span>
        <div class="best-partners d-flex py-2 fs-sm text-primary" v-for="item in heroData.partners" :key="item._id">
          <img :src="item.hero.avatar" alt />
          <p class="flex1 pl10">{{item.desc}}</p>
        </div>
      </div>
      <hr>
      <div>
        <span>被谁克制</span>
        <div class="best-partners d-flex py-2 fs-sm text-primary" v-for="item in heroData.restrained" :key="item._id">
          <img :src="item.hero.avatar" alt />
          <p>{{item.desc}}</p>
        </div>
      </div>
      <hr>
      <div>
        <span>克制谁</span>
        <div class="best-partners d-flex py-2 fs-sm text-primary" v-for="item in heroData.restraint" :key="item._id">
          <img :src="item.hero.avatar" alt />
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
    <!-- 角色介绍视频弹层 -->
    <van-popup close-icon="close" position="top" v-model="showVideo">
    <div class="py-2 px-3 d-flex ai-center text-white fs-ml bg-grey">
      <img src="../assets/images/logo1.png" height="30">
      <div class="px-2 flex-1">
        <span>DNF</span>
        <span class="ml-2">角色详解</span>
      </div>
      <router-link to="/" tag="div">返回首页 &gt;</router-link>
    </div>
      <div class="hero-video-container">
        <div class="title d-flex">
          <i class="arrow-l" @click="showVideo = false"></i>
          <strong class="video-title fs-sl">{{heroData.shipin.title}}</strong>
        </div>
        <!-- video -->
        <div class="video">
          <video :src="heroData.shipin.video" controls></video>
        </div>
        <div class="video-info">
          <div class="info1">
            <p class="p-title">{{heroData.shipin.title}}</p>
            <p class=""> 投稿：{{heroData.shipin.submit}} 粉丝：{{heroData.shipin.fan}}</p>
            <p class="">个性签名：</p>
          </div>
        </div>
        <div class="you-like"><span class="icon-related"></span> 猜您喜欢</div>
      </div>
    </van-popup>
    <!-- 一图识角色弹层 -->
    <van-popup position="top" closeable close-icon="close" v-model="showPhoto"><img class="w-100 h-100" :src="heroData.photo"
        alt="" @click="showPhoto = false">
    </van-popup>
    <!-- 角色时装弹层 -->
    <van-popup position="top" v-model="showSkin">
      <div v-if="heroData.skins">
        <div class="skins-container">
          <div class="title d-flex">
            <i class="arrow-l" @click="showSkin = false"></i>
            <strong>{{heroData.name}} ·时装</strong>
          </div>
        </div>
        <van-swipe :autoplay="2000" class="">
          <van-swipe-item class="skin-item" v-for="(item, i) in heroData.skins" :key="`7${i}`">
            <img class="h-100 w-100" :src="item.img" />
            <p class="">{{item.name}}</p>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="tip" v-if="heroData.skins.length ==0">
        <img class="h-100 w-100" src="../assets/images/hero/tip.png" alt="">
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  computed: {
    currentSkill () {
      return this.heroData.skills[this.currentIndex]
    }
  },
  data () {
    return {
      heroData: '',
      currentIndex: 0,
      showPhoto: false, // 是否显示图文介绍弹层
      showSkin: false, // 是否显示时装弹层
      showVideo: false // 是否显示视频介绍弹层
    }
  },
  methods: {
    async fetchHeroById () {
      const res = await this.$http.get(`hero/${this.id}`)
      this.heroData = res.data
    }
  },
  created () {
    this.fetchHeroById()
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: 100%;
  }
}
.info {
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
  .scores {
    .badge {
      margin: 0 0.25rem;
      display: inline-block;
      width: 1rem;
      height: 1rem;
      line-height: 0.9rem;
      text-align: center;
      border-radius: 50%;
      font-size: 0.6rem;
      border: 1px solid rgba(255,255,255,0.2);
    }
  }
}
.main{
  background: #fff;
  border-bottom: 1px solid #d4d9de;
}
   .tip2 {
    height: 63vh;
    display: flex;

    img {
      margin: auto;
    }
  }
  .hero-video {
      span {
        height: 38px;
        vertical-align: middle;
        line-height: 38px;
        width: 176px;
        border: 1px solid #eff1f2;
        border-radius: 6px;
        background-color: #fcfcfc;

        .i-video {
          position: relative;
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 8px;
          background: url("../assets/images/hero/icon_06.png") no-repeat 0 0;
          background-size: 0.8rem;
        }

        .i-photo {
          position: relative;
          display: inline-block;
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 8px;
          background: url("../assets/images/hero/icon_07.png") no-repeat 0 0;
          background-size: 0.8rem;
        }
      }
    }
    .hero-skills {
      display: flex;
      justify-content: space-around;

      li {
        width: 56px;
        height: 56px;

        &.active {
          border: 0.12rem solid #d59b40;
          border-radius: 50%;
        }

        img {
          border-radius: 50%;
        }
      }
    }
    .panel {
    border-top: .78rem solid #ededed;
    border-bottom: 1px solid #d4d9de;
      .icon-l {
      display:inline-block;
      width: 0.98rem;
      height: 0.98rem;
      background: url("../assets/images/hero/icon_11.png") no-repeat 0 0;
      background-size: 0.98rem;
      }
      .icon-2 {
      display:inline-block;
      width: 0.98rem;
      height: 0.98rem;
      background: url("../assets/images/hero/icon_12.png") no-repeat 0 0;
      background-size: 0.98rem;
      }
      .icon-3 {
      display:inline-block;
      width: 0.98rem;
      height: 0.98rem;
      background: url("../assets/images/hero/icon_14.png") no-repeat 0 0;
      background-size: 0.98rem;
      }
      .icon-4 {
      display:inline-block;
      width: 0.98rem;
      height: 0.98rem;
      background: url("../assets/images/hero/icon_15.png") no-repeat 0 0;
      background-size: 0.98rem;
      }
      .icon-5 {
      display:inline-block;
      width: 0.98rem;
      height: 0.98rem;
      background: url("../assets/images/hero/icon_08.png") no-repeat 0 0;
      background-size: 0.98rem;
      }
      h3 {
        display:inline-block;
      }
    }
    .hero_equipment {
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
    .best-partners {
      img {
        width: 50px;
        height: 50px;
      }
    }
  .you-like {
    display: flex;
    align-items: center;
    margin-left: 0.1938rem;

    .icon-related {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: url("../assets/images/hero/lin.png") no-repeat left center;
      background-position: 2px 2px;
    }
  }

  .hero-video-container {
    height: 100vh;
    .title {
      height: 1.52rem;
      line-height: 1.52rem;
      color: #4394e4;
      font-size: 0.5385rem;
      border-bottom: 0.04rem solid #d4d4d5;
      .arrow-l {
        display: inline-block;
        width: 1rem;
        height: 100%;
        background: url("../assets/images/hero/backBg.png") no-repeat center center;
        background-size: 0.36rem 0.68rem;
      }
    }
    video {
      width: 100%;
      height: 100%;
    }
    .video-info {
      display: flex;
      margin: 0.3846rem 0.1538rem;
      padding: 0.3846rem 0.1538rem;
      border: 1px solid #d8d5d5;
      .info1 {
        margin-left: 0.7692rem;
        color: #333;
        p {
          line-height: .8rem;
        }
        .p-title {
          font-size: 0.5385rem;
        }
      }
    }
  }
  .skins-container {
    width: 100%;
    height: 100%;
    padding: 0.1rem;
    .title {
      height: 1.52rem;
      line-height: 1.52rem;
      color: #4394e4;
      font-size: 0.5385rem;
      border-bottom: 0.04rem solid #d4d4d5;
      .arrow-l {
        display: inline-block;
        width: 1rem;
        height: 100%;
        background: url("../assets/images/hero/backBg.png") no-repeat center center;
        background-size: 0.36rem 0.68rem;
      }
    }
  }
  .skin-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      padding: 0.9846rem 0;
      font-size: 0.5385rem;
      font-weight: bold;
      color: #333;
    }
  }

</style>
