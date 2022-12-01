<script lang="ts">
  import HandHoldingHeart from "../assets/HandHoldingHeart.svg";
</script>

<div id="header">
  <div id="header-container">
    <div id="title">
      <div class="subtitle">
        数说器官捐献
        <img src="{HandHoldingHeart}" alt="" />
      </div>
      <h1>７年奔赴</h1>
      <h1>
        一场
        <underline>5580000</underline>
        人的生命接力
      </h1>
    </div>
    <div id="divided-line"></div>
    <div id="small-text">
      <div>叶沙，一个热爱篮球的16岁少年，2017年4月27日因突发脑溢血去世。</div>
      <div>然而，他的梦想并没有就此消失。</div>
      <div>
        2019年，“接受”叶沙器官的五个人组成的球队，登上了国际篮联篮球世界杯开幕式的舞台
      </div>
      <div>
        <underline>“一个人的球队”</underline>
        幸运地收到了生命的礼物，也奋力追逐那个16岁少年的篮球梦
      </div>
      <div>生命的活力又一次在爱的擎举中迸发出崭新的张力</div>
      <div>而2022年6月13日，“一个人的球队”中的成员周海不幸离世</div>
      <div>
        家人按照他的遗愿，签署了<underline
          >《人体器官捐献亲属确认登记表》</underline
        >，他也最终捐献了自己的眼角膜
      </div>
      <div>
        在“重生”之路上，生命的礼物再次奔赴.这次奔赴，是奇遇，是延续，更是新生
      </div>
    </div>
  </div>
</div>

<style lang="scss" global>
  #header {
    background-color: #ffcdc4;
    background-image: url("../assets/pink-bg.webp");
    background-size: contain;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: var(--theme-font);
    align-items: center;
    #header-container {
      max-width: 1200px;
      min-width: 1200px;
      #title {
        font-size: 5rem;
        h1 {
          margin-top: 1rem;
          &:last-of-type {
            margin-top: 0.5rem;
          }
        }
      }
      .subtitle {
        font-size: 2.25rem;
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
        img {
          height: 1.85rem;
          margin-left: 0.5rem;
          transform: skewX(-8deg);
        }
      }
      #divided-line {
        height: 2px;
        width: 50rem;
        background-image: linear-gradient(to right, #fac7c7, #f48f8f00);
        margin: 1rem 0;
      }
      #small-text {
        font-size: 1.2rem;
        line-height: 2.5rem;
      }
    }
  }
</style>
