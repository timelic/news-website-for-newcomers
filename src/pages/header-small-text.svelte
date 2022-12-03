<script lang="ts">
  // 导入text-align组件
  import TextAlign from "./text-align.svelte";
  const text =
    "叶沙，一个热爱篮球的16岁少年，2017年4月27日因突发脑溢血去世\n然而，他的梦想并没有就此消失\n2019年，“接受”叶沙器官的五个人组成的球队\n登上了国际篮联篮球世界杯开幕式的舞台\n“一个人的球队”幸运地收到了生命的礼物\n也奋力追逐那个16岁少年的篮球梦\n生命的活力又一次在爱的擎举中迸发出崭新的张力\n而2022年6月13日，“一个人的球队”中的成员周海不幸离世\n家人按照他的遗愿，签署了《人体器官捐献亲属确认登记表》，他也最终捐献了自己的眼角膜\n在“重生”之路上，生命的礼物再次奔赴\n这次奔赴，是奇遇，是延续，更是新生";
  const text2 =
    "而这条奔赴新生的路上\n始终有人，心怀大爱\n让生命突破了生与死的藩篱\n让爱连通白昼与黑夜";
</script>

<TextAlign text="{text}" fontSize="small" bg="b" paddingBottom="0" />
<TextAlign text="{text2}" fontSize="small" bg="b" />
