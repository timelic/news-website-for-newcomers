<script lang="ts">
  import Loading from "./pages/loading.svelte";
  import Header from "./pages/header.svelte";
  import NewspaperClipping from "./pages/newspaper_clipping.svelte";
  import NumOfVolunteers from "./pages/num_of_volunteers.svelte";
  import Part3 from "./pages/part3.svelte";

  // 下载字体资源 svelte居然不允许顶层await
  let hasLoadedFont = false;
  (async () => {
    const CACHE_NAME = "cache";
    const getFontBuffer = async () => {
      const cache = await caches.open(CACHE_NAME);
      const resp = await cache.match(
        "https://qiniu-1.lfcky.com/SmileySans-Oblique.ttf.woff2"
      );
      if (resp) {
        return await resp.arrayBuffer();
      } else {
        const _resp = await fetch(
          "https://qiniu-1.lfcky.com/SmileySans-Oblique.ttf.woff2"
        );
        // 丢缓存里面去
        await cache.put(
          "https://qiniu-1.lfcky.com/SmileySans-Oblique.ttf.woff2",
          _resp
        );
        return await _resp.arrayBuffer();
      }
    };
    const fontface = new FontFace("Smiley Sans", await getFontBuffer());
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
  <!-- 剪报 -->
  <NewspaperClipping />
  <NumOfVolunteers />
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
