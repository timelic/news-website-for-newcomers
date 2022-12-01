<script lang="ts">
  import { onMount } from "svelte";
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
</script>

<section id="what-have-we-done" style="--progress: 0">
  <div id="what-have-we-done-text" class="animate__animated">
    而我们，做了什么？
  </div>
</section>

<div class="pink-bg">
  <section class="text-align">
    <div>2021年</div>
    <div>我国实施肾脏移手术12039例</div>
    <div>实施肝脏移植手术5834例</div>
    <div>肺脏775例</div>
    <div>心脏738例</div>
    <div>……</div>
    <div>器官捐献事业又迎来了捐献数量的巨大增长</div>
    <div>在如潮大爱中又登上了一个崭新阶段</div>
  </section>
  <section class="iframe">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=c_b11b07047f3e83dcc7fae19e0d1b0511"
      width="700"
      height="520"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </section>

  <section class="text-align">
    <div>2021年</div>
    <div>我国实施肾脏移手术12039例</div>
    <div>实施肝脏移植手术5834例</div>
    <div>肺脏775例</div>
    <div>心脏738例</div>
    <div>……</div>
    <div>器官捐献事业又迎来了捐献数量的巨大增长</div>
    <div>在如潮大爱中又登上了一个崭新阶段</div>
  </section>
</div>

<style lang="scss" global>
  #what-have-we-done {
    --height: 40vh;
    height: var(--height);
    line-height: var(--height);
    background-image: url("../assets/what-have-we-done.jpg");
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
  }
  .text-align {
    text-align: center;
    font-size: 2rem;
    font-family: var(--theme-font);
    line-height: 3rem;
    padding: 2rem 0;
  }
  .pink-bg {
    background: linear-gradient(
      90deg,
      hsla(298, 68%, 90%, 1) 0%,
      hsla(30, 82%, 91%, 1) 100%
    );
  }
  .iframe {
    display: flex;
    align-items: center;
    justify-content: center;
    iframe {
      border-radius: 0.5rem;
      overflow: hidden;
    }
  }
</style>
