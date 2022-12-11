<script lang="ts">
  import Loading from "./pages/loading.svelte";
  import Header from "./pages/header.svelte";
  import NewspaperClipping from "./pages/newspaper-clipping.svelte";
  import NumOfVolunteers from "./pages/num-of-volunteers.svelte";
  import WhatHaveWeDone from "./pages/what-have-we-done.svelte";
  import HeaderSmallText from "./pages/header-small-text.svelte";
  import StatisticalData from "./pages/statistical-data.svelte";
  import WaitingForOrgan from "./pages/waiting-for-organ.svelte";
  import Stars from "./pages/stars.svelte";
  import WhatBringsDonationIncrement from "./pages/what-brings-donation-increment.svelte";
  import Footer from "./pages/footer.svelte";

  import ThirtyWCircle from "./pages/30w-circle.svelte";

  import Danmu from "./pages/danmu.svelte";
  // two-block
  import TwoBlock from "./pages/two-block.svelte";
  import TextAlign from "./pages/text-align.svelte";

  import MenuSvg from "./assets/MenuOutline.svg";

  // love-and-bravery
  import LoveAndBravery from "./pages/love-and-bravery.svelte";

  import { onMount } from "svelte";
  import { eventbus } from "@utils";
  // 下载字体资源 svelte居然不允许顶层await
  let hasLoadedFont = false;
  (async () => {
    const CACHE_NAME = "cache";
    const FONT_URL = "https://qiniu-1.lfcky.com/SourceHanSansCN-Medium.otf";
    const FONT_URL2 = "https://qiniu-1.lfcky.com/SourceHanSansCN-Regular.otf";
    const FONT_URL3 =
      "https://qiniu-1.lfcky.com/%E6%80%9D%E6%BA%90%E9%BB%91%E4%BD%93%20CN%20RegularItalic.ttf";
    const getFontBuffer = async (FONT_URL: string) => {
      const cache = await caches.open(CACHE_NAME);
      const resp = await cache.match(FONT_URL);
      if (resp) {
        return await resp.arrayBuffer();
      } else {
        const _resp = await fetch(FONT_URL);
        const _resp_clone = _resp.clone();
        // 丢缓存里面去
        await cache.put(FONT_URL, _resp_clone);
        return await _resp.arrayBuffer();
      }
    };
    const fontface = new FontFace(
      "方正兰亭黑 Medium",
      await getFontBuffer(FONT_URL)
    );
    const fontface2 = new FontFace(
      "方正兰亭黑 Regular",
      await getFontBuffer(FONT_URL2)
    );
    const fontface3 = new FontFace(
      "方正兰亭黑 Regular Italic",
      await getFontBuffer(FONT_URL3)
    );
    document.fonts.add(fontface).add(fontface2).add(fontface3);
    hasLoadedFont = true;
  })();

  // 下拉菜单
  onMount(() => {
    const menu = document.getElementById("menu");
    const dropdown = document.getElementById("dropdown");
    menu.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
      console.warn("click");
    });
  });
  // 点击页面其他地方 关闭下拉菜单
  onMount(() => {
    const dropdown = document.getElementById("dropdown");
    const menu = document.getElementById("menu");
    document.addEventListener("click", (e) => {
      if (e.target !== dropdown && e.target !== menu) {
        dropdown.classList.add("hidden");
      }
    });
  });

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    const top = el.offsetTop;
    const client = document.getElementById("app");
    client.scrollTo(0, top);
    document.getElementById("menu").classList.toggle("hidden");
  }
</script>

<main>
  <Loading loaded="{hasLoadedFont}" />

  <div id="navigator">
    <div class="left">
      <img id="menu" src="{MenuSvg}" alt="" />
      <div id="dropdown" class="hidden">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="item" on:click="{() => scrollTo('app')}">首页</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="item" on:click="{() => scrollTo('what-have-we-done')}">
          成就 · 滴水成河
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="item"
          on:click="{() => scrollTo('what-brings-donation-increment')}"
        >
          规范 · 步履不停
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="item"
          on:click="{() => scrollTo('what-difficulty-we-face')}"
        >
          挑战 · 道阻意坚
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="item" on:click="{() => scrollTo('what-else-we-can-do')}">
          流程 · 生死摆渡
        </div>
      </div>
    </div>
    <div class="right">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click="{() => scrollTo('footer')}">数据来源</span>
    </div>
  </div>
  <!-- 头图 -->
  <Header />
  <HeaderSmallText />
  <Danmu />
  <TwoBlock />
  <TextAlign
    text="{`「一对角膜、两个肾脏、一个肝脏、一颗心、两叶肺、一个胰腺」\n这是一个人可以捐出的器官，也可能让9个人接受器官，成就9段重生的奇迹。`}"
    bg="b"
    outerStyle="height: 20rem"
  />
  <!-- 剪报 -->
  <NumOfVolunteers />
  <StatisticalData />
  <ThirtyWCircle />
  <WaitingForOrgan />
  <WhatHaveWeDone />
  <NewspaperClipping />
  <WhatBringsDonationIncrement />
  <TextAlign
    text="{`严谨为路，八方奔赴。随着我国器官捐献事业的不断发展、流程不断规范，越来越多的志愿者自愿加入器官捐献志愿者的行列。这场生命的接力，不断壮大，也留下了感动的声音，我们欣喜地发现，点点星光，连成了一道星河。`}"
    bg="b"
    outerStyle="height: 12rem; margin-bottom: -2rem;"
    innerStyle="max-width: 851px"
  />
  <Stars />
  <LoveAndBravery />
  <Footer />
</main>

<style lang="scss" global>
  // 漂亮的下划线
  underline {
    color: #b90000;
    // background-image: linear-gradient(120deg, #fac784 0%, #f48f8f 100%);
    // background-repeat: no-repeat;
    // background-size: 100% 0.2em;
    // background-position: 0 88%;
    // transition: background-size 0.2s;
    // &:hover {
    //   background-size: 100% 88%;
    // }
    // &.sky {
    //   background-image: linear-gradient(120deg, #84d5fa 0%, #8fa2f4 100%);
    // }
  }
  #navigator {
    height: 4rem;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    font-size: 0.9rem;
    font-weight: bold;
    .left {
      margin-right: auto;
      display: flex;
      column-gap: 1.5rem;
    }
    .right {
      background-color: rgba(255, 255, 255, 0.473);
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }
    z-index: 9999999;
    span {
      cursor: pointer;
    }
    // mix-blend-mode: difference;
  }
  #menu {
    --width: calc(20px + 1rem);
    width: var(--width);
    height: var(--width);
    cursor: pointer;
    padding: 0.5rem;
    transition: 0.2s;
    background-color: rgba(255, 255, 255, 0.473);
    border-radius: 50%;
    &:hover {
      background-color: white;
    }
  }
  #dropdown {
    position: absolute;
    top: 3.5rem;
    // left: 1rem;
    transform: translateX(0.5rem);
    background: white;
    padding: 0.5rem 0;
    line-height: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: 0.3s;
    transform: scaleY(1);
    transform-origin: 0 0;
    & > div {
      padding: 0 1rem;
      cursor: pointer;
      &:hover {
        background-color: #fafafa;
      }
    }
    &.hidden {
      transform: scaleY(0);
      opacity: 0;
    }
  }
</style>
