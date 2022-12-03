<script lang="ts">
  import Loading from "./pages/loading.svelte";
  import Header from "./pages/header.svelte";
  import NewspaperClipping from "./pages/newspaper_clipping.svelte";
  import NumOfVolunteers from "./pages/num_of_volunteers.svelte";
  import WhatHaveWeDone from "./pages/what_have_we_done.svelte";
  import HeaderSmallText from "./pages/header-small-text.svelte";
  import StatisticalData from "./pages/statistical-data.svelte";
  import WaitingForOrgan from "./pages/waiting-for-organ.svelte";
  import Stars from "./pages/stars.svelte";
  import Part3 from "./pages/part3.svelte";

  import ThirtyWCircle from "./pages/30w-circle.svelte";

  // 下载字体资源 svelte居然不允许顶层await
  let hasLoadedFont = false;
  (async () => {
    const CACHE_NAME = "cache";
    const FONT_URL = "https://qiniu-1.lfcky.com/SourceHanSansCN-Medium.ttf";
    const getFontBuffer = async () => {
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
    const fontface = new FontFace("方正兰亭黑", await getFontBuffer());
    document.fonts.add(fontface);
    hasLoadedFont = true;
  })();
</script>

<main>
  {#if !hasLoadedFont}
    <Loading />
  {/if}

  <div id="navigator">
    <div class="left">
      <span>首页</span>
      <span>占位</span>
      <span>占位</span>
    </div>
    <div class="right">
      <span>数据来源</span>
    </div>
  </div>
  <!-- 头图 -->
  <Header />
  <HeaderSmallText />
  <!-- 剪报 -->
  <NumOfVolunteers />
  <StatisticalData />
  <ThirtyWCircle />
  <WaitingForOrgan />
  <WhatHaveWeDone />
  <NewspaperClipping />
  <Stars />
  <!-- <Part3 /> -->
  <div style="background-color: white; height: 200vh"></div>
</main>

<style lang="scss" global>
  // 漂亮的下划线
  underline {
    background-image: linear-gradient(120deg, #fac784 0%, #f48f8f 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.2s;
    &:hover {
      background-size: 100% 88%;
    }
    &.sky {
      background-image: linear-gradient(120deg, #84d5fa 0%, #8fa2f4 100%);
    }
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
    span {
      cursor: pointer;
    }
  }
</style>
