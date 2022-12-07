<script lang="ts">
  import { onMount } from "svelte";
  import { Line, Pie } from "@antv/g2plot";
  import { onSee } from "@utils";
  onMount(() => {
    const client = document.getElementById("app");
    const el = document.getElementById("what-have-we-done");
    const text = document.getElementById("what-have-we-done-text");
    text.style.opacity = "0";
    const cb = () => {
      if (client.scrollTop >= el.offsetTop - screen.height + el.offsetHeight) {
        text.style.opacity = "1";
        text.classList.add("animate__zoomInDown");
        client.removeEventListener("scroll", cb);
      }
    };
    client.addEventListener("scroll", cb);
  });
  const organSourceData = [
    ["product", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    ["肾脏移植", 7040, 9019, 10793, 13029, 12124, 11037, 12039],
    ["肝脏移植", 2620, 3672, 5149, 6279, 6170, 5842, 5834],
    ["心脏移植", 279, 368, 446, 490, 679, 557, 738],
    ["肺脏移植", 118, 204, 299, 403, 489, 513, 775],
  ];

  function getOrganData(
    sourceData: typeof organSourceData
  ): { name: string; year: number; value: number }[] {
    const data = [];
    for (let i = 1; i < sourceData.length; i++) {
      for (let j = 1; j < sourceData[i].length; j++) {
        data.push({
          name: sourceData[i][0],
          year: Number(sourceData[0][j]),
          value: sourceData[i][j],
        });
      }
    }
    return data;
  }
  const organData = getOrganData(organSourceData);
  onMount(() => {
    const linePlot = new Line("organ-line-container", {
      data: organData,
      xField: "year",
      yField: "value",
      xAxis: {
        title: { text: "年均器官移植手术量" },
      },
      seriesField: "name",
      legend: {
        position: "top",
      },
      smooth: true,
      // colorField: 'type', // 部分图表使用 seriesField
      color: ["#E97777", "#FF9F9F", "#C0EEE4", "#FFDDD2"],
    });
    onSee("organ-line-container", () => linePlot.render());
    const organPieData = [
      { type: "肾脏移植", value: 12039 },
      { type: "肝脏移植", value: 5834 },
      { type: "心脏移植", value: 738 },
      { type: "肺脏移植", value: 775 },
    ];

    const piePlot = new Pie("organ-pie-container", {
      appendPadding: 10,
      data: organPieData,
      angleField: "value",
      colorField: "type",
      radius: 0.8,
      label: {
        type: "spider",
        content: "{name} {percentage}",
      },
      color: ["#E97777", "#FF9F9F", "#FF8DC7", "#FFDDD2"],
      interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
    });

    onSee("organ-pie-container", () => piePlot.render());
  });
</script>

<section id="what-have-we-done" style="--progress: 0">
  <div id="what-have-we-done-text" class="animate__animated">
    而我们，做了什么？
  </div>
</section>

<div class="pink-bg">
  <section class="text-align">
    <div>近年来，我国器官捐献数量持续攀升</div>
    <div>涓涓细流，终汇汪洋</div>
    <div>在器官捐献事业的发展中</div>
    <div>我们见证至善至美的大爱</div>
    <div>也奔走在一次次平凡而生动的接力中</div>
  </section>
  <section class="chart">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=c_98cafa44ae20768ee91144b295fda893"
      width="600"
      height="550"
      scrolling="no"
      frameborder="0"
      title=""
      style="margin-bottom: 2rem"></iframe>
    <div style="margin-bottom: 1rem">
      2015-2020年，我国完成公民逝世后器官捐献累计<underline>29334例</underline
      >，
    </div>
    <div>
      每百万人口器官捐献率（PMP）从2015年的2.01升至2021年的<underline
        >3.63</underline
      >
    </div>
  </section>
  <section class="text-align">
    <div>2021年</div>
    <div>我国实施肾脏移手术<underline>12039例</underline></div>
    <div>实施肝脏移植手术<underline>5834例</underline></div>
    <div>肺脏<underline>775例</underline></div>
    <div>心脏<underline>738例</underline></div>
    <div>……</div>
    <div>器官捐献事业又迎来了捐献数量的巨大增长</div>
    <div>在如潮大爱中又登上了一个崭新阶段</div>
  </section>

  <section class="chart">
    <div id="organ-pie-container" class="chart-content"></div>
    <div id="organ-line-container" class="chart-content"></div>
  </section>

  <!-- <section class="chart">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=c_b11b07047f3e83dcc7fae19e0d1b0511"
      width="700"
      height="520"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </section> -->

  <section class="text-align">
    <div>自2015年公民志愿捐献成为</div>
    <div>我国器官移植唯一合法来源以来</div>
    <div>我国器官捐献数量每年平均<underline>增长20%</underline></div>
    <div>在器官捐献、移植数量两项指标</div>
    <div><underline>均居世界第二位</underline></div>
  </section>
</div>

<style lang="scss" global>
  #what-have-we-done {
    --height: 40vh;
    height: var(--height);
    line-height: var(--height);
    background: linear-gradient(
      90deg,
      hsla(211, 96%, 62%, 1) 0%,
      hsla(295, 94%, 76%, 1) 100%
    );
    color: white;
    background-size: cover;
    text-align: center;
    font-size: 4rem;
    font-family: var(--theme-font);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../assets/hands.jpg");
      background-size: cover;
      background-position: center;
      filter: brightness(0.3);
      opacity: 0.8;
    }
  }
  .text-align {
    padding-right: calc((100vw - 851px) / 2) !important;
    padding-left: calc((100vw - 851px) / 2) !important;
    margin: auto;
    text-align: center;
    font-size: 1.5rem;
    font-family: var(--theme-font);
    line-height: 3rem;
    padding: 2rem 0;
  }
  .pink-bg {
    background: var(--pink-bg);
  }
  .chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    iframe,
    .chart-content {
      &:first-of-type {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
      &:last-of-type {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
      overflow: hidden;
      background-color: white;
      width: 800px;
    }
    .chart-content {
      padding: 0 2rem;
      &:first-of-type {
        padding-top: 3rem;
      }
      &:last-of-type {
        padding-bottom: 3rem;
      }
    }
  }
  #organ-line-container {
    height: 500px;
  }
  #organ-pie-container {
    height: 400px;
    padding-bottom: 0;
  }
</style>
