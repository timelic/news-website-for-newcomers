<script lang="ts">
  import Header from "./pages/header.svelte";
  import NewspaperClipping from "./pages/newspaper_clipping.svelte";
  import Part3 from "./pages/part3.svelte";
</script>

<main>
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
  <Part3 />
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
      column-gap: 1rem;
    }
  }
</style>
