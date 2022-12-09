<script lang="ts">
  import basketball from "../assets/basketball.png";
  const text =
    "叶沙，一个热爱篮球的16岁少年，2017年4月27日因突发脑溢血去世\n然而，他的梦想并没有就此消失\n2019年，“接受”叶沙器官的五个人组成的球队\n登上了国际篮联篮球世界杯开幕式的舞台\n“一个人的球队”幸运地收到了生命的礼物\n也奋力追逐那个16岁少年的篮球梦\n生命的活力又一次在爱的擎举中迸发出崭新的张力\n而2022年6月13日，“一个人的球队”中的成员周海不幸离世\n家人按照他的遗愿，签署了《人体器官捐献亲属确认登记表》\n他也最终捐献了自己的眼角膜\n在“重生”之路上，生命的礼物再次奔赴\n这次奔赴，是奇遇，是延续，更是新生";
  const text2 =
    "而这条奔赴新生的路上\n始终有人，心怀大爱\n让生命突破了生与死的藩篱\n让爱连通白昼与黑夜\n奔跑在这条路上的人们\n寄来了他们的书信";
</script>

<section style="padding: 2rem 0; background: var(--pink-bg);">
  <img src="{basketball}" alt="" />
  <div>
    <div>
      2019年，一支特殊的球队登上了国际篮联篮球世界杯开幕式的舞台。
      球队的五名成员都是接受了16岁不幸离世的篮球少年叶沙的器官而重生的。
      2022年6月13日，球队成员周海不幸离世，他也选择捐献自己的器官。
    </div>
    <div>
      在“重生”之路上，生命的礼物再次奔赴。 这次奔赴，是奇遇，是延续，更是新生。
    </div>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    height: 70vh;
    justify-content: center;
    align-items: center;
    column-gap: 4rem;
    img {
      width: 350px;
      height: fit-content;
    }
    & > div {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      width: 650px;
      line-height: 3rem;
      font-size: 1.2rem;
    }
  }
</style>
