<script lang="ts">
  import { Line } from "@antv/g2plot";
  import { onMount } from "svelte";
  import { onSee } from "@utils";
  onMount(() => {
    const data = [
      { year: "2010", value: 1087 },
      { year: "2011", value: 1904 },
      { year: "2012", value: 3153 },
      { year: "2013", value: 13269 },
      { year: "2014", value: 22660 },
      { year: "2015", value: 23249 },
      { year: "2016", value: 104538 },
      { year: "2017", value: 206873 },
      { year: "2018", value: 531463 },
      { year: "2019", value: 858096 },
      { year: "2020", value: 2634110 },
      { year: "2021", value: 4292342 },
    ];
    const labelStyle = {
      style: {
        fontSize: 16,
        fontFamily: "Smiley Sans",
      },
    };
    const line = new Line("num-of-volunteers-chart-container", {
      data,
      xField: "year",
      yField: "value",
      smooth: true,
      xAxis: {
        label: labelStyle,
      },
      yAxis: {
        alias: "志愿捐献人数",
        label: labelStyle,
      },
      color: "#ffaeae",
      lineStyle: {
        lineWidth: 3,
      },
      annotations: [
        {
          type: "html",
          html: `<div class="annotations"><div>2010年</div><div>启动公民逝世后器官捐献试点</div></div>`,
          position: [0, 150],
          offsetY: -80,
        },
        {
          type: "html",
          html: `<div class="annotations"><div>2015年</div><div>公民逝世后自愿器官捐献成为器官移植使用的唯一渠道</div></div>`,
          position: [4, 80],
          offsetY: -160,
        },
        {
          type: "html",
          html: `<div class="annotations"><div>2021年</div><div>全国政协委员王海京建议制定《退休和人体器官捐献法》</div></div>`,
          position: [6, 100],
          offsetY: -400,
        },
      ],
      animation: {
        appear: {
          animation: "path-in",
          duration: 5000,
        },
      },
    });

    line.render();

    // 滚动出现文字 并且消失

    const client = document.getElementById("app")!;
    const el = document.getElementById("num-of-volunteers")!;
    const text = document.getElementById("num-of-volunteers-text");
    const cb1 = () => {
      if (client.scrollTop >= el.offsetTop - el.offsetHeight * 0.5) {
        text.style.opacity = "1";
        text.classList.add("animate__fadeInUp");
        client.removeEventListener("scroll", cb1);
        document
          .getElementById("num-of-volunteers-chart-container")
          .setAttribute("style", "--opacity: 0.5");
      }
    };
    client.addEventListener("scroll", cb1);
    const cb2 = () => {
      if (client.scrollTop >= el.offsetTop + el.offsetHeight * 0.1) {
        text.style.opacity = "1";
        text.classList.add("animate__fadeOutUp");
        client.removeEventListener("scroll", cb2);
        document
          .getElementById("num-of-volunteers-chart-container")
          .setAttribute("style", "--opacity: 1");
      }
    };
    // client.addEventListener("scroll", cb2);
  });
</script>

<section id="num-of-volunteers">
  <div id="num-of-volunteers-text-container">
    <div id="num-of-volunteers-text" class="animate__animated bg-card">
      <div>截止到2022年11月</div>
      <div>中国人体器官捐献管理中心登记的</div>
      <div>志愿人数已达<underline>5584251</underline>人</div>
      <div>十多年来，登记人数累计增长<underline>509%</underline></div>
    </div>
    <div style="display: block; height: 150px; width: 100%"></div>
  </div>

  <!-- <div id="num-of-volunteers-chart-container" style="--opacity: 1"></div> -->
  <iframe
    id="num-of-volunteers-chart-container"
    src="https://dycharts.com/xshow/index.html?id=bd7e3698f26e6b320cce38bf4ab645c1"
    width="1000"
    height="450"
    scrolling="no"
    frameborder="0"
    title=""></iframe>
  <!-- <div id="num-of-volunteers-title">志愿登记人数</div> -->
</section>

<style lang="scss" global>
  #num-of-volunteers {
    height: 550px;
    background-color: #fff5f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    background: var(--pink-bg);
    // &:before {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   width: 100%;
    //   height: 100%;
    //   opacity: 0.5;
    //   transition: 0.3s;
    //   background-image: url("../assets/paper.jpg");
    //   background-size: contain;
    // }
    &-chart-container {
      width: 800px;
      // height: 500px;
      margin-bottom: 2rem;
      position: relative;
      opacity: var(--opacity);
      transition: 0.3s;
    }
    &-title {
      font-size: 1rem;
      font-weight: bold;
    }
    &-text-container {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-text {
      opacity: 0;
      background-color: white;
      z-index: 99;
      padding: 1.5rem 8rem;
      font-size: 1.2rem;
      font-family: var(--theme-font);
      line-height: 2.5rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
  .annotations {
    font-family: var(--theme-font);
    line-height: 1.5rem;
    font-size: 1.2rem;
    width: 250px;
    :first-child {
      color: #ffb35d;
    }
  }
</style>
