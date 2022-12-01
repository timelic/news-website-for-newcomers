<script lang="ts">
  import { onMount } from "svelte";
  onMount(() => {
    const client = document.getElementById("app")!;
    const el = document.getElementById("newspaper-clipping");
    const imgs = document.querySelectorAll<HTMLImageElement>(
      "#clippings-container img"
    );
    const text = document.getElementById("text")!;
    const scrollCb = () => {
      const scrollTop = client.scrollTop;
      const scrolled = Math.min(1, Math.max(0, scrollTop / el.offsetTop));

      const startPos = 0.2,
        endPos = 0.8;

      imgs.forEach((img, i) => {
        const step = (endPos - startPos) / 13;
        const start = startPos + step * i,
          end = startPos + step * (i + 1);
        const progress = Math.min(
          1,
          Math.max(0, (scrolled - start) / (end - start))
        );
        if (progress >= 1 && !img.classList.contains("animate__fadeInUp")) {
          img.classList.add("animate__fadeInUp");
          img.style.display = "block";
        }
      });
      if (scrolled >= 1) {
        client.removeEventListener("scroll", scrollCb);
        imgs.forEach((img) => {
          img.classList.remove("animate__fadeInUp");
          img.classList.add("animate__fadeOutUp");
        });
        text.style.opacity = "1";
        text.classList.add("animate__fadeInUp");
        client.scrollTo({ top: el.offsetTop - 50 }); // ?
        // setTimeout(() => {
        //   el.setAttribute("style", "position: static !important");
        // }, 100);
      }
    };
    client.addEventListener("scroll", scrollCb);
  });
</script>

<div id="newspaper-clipping">
  <div id="clippings-container">
    <!-- 生成100个div -->
    {#each new Array(13) as _, i}
      <img
        class="clipping animate__animated"
        src="/newspaper-clipping/{i + 1}.jpg"
        alt=""
        srcset=""
      />
    {/each}
    <div id="text" class="animate__animated">
      <div>大爱如潮 无碍奔涌</div>
      <div>在一次次的生命接力中</div>
      <div>在一次次奔走传递间</div>
      <div>越来越多人以勇气和真诚去奉献</div>
      <div>最无价的生命之礼</div>
    </div>
  </div>
</div>

<style lang="scss">
  #newspaper-clipping {
    // position: sticky;
    // top: 0;
    display: flex;
    height: 100vh;
    background-color: rgb(255, 174, 174);
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  #clippings-container {
    max-width: 1200px;
    min-width: 1200px;
    position: relative;
    height: 820px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    img.clipping {
      display: none;
      max-width: 500px;
      position: absolute;
      top: 0;
      left: 0;
      opacity: var(--progress);
      box-shadow: rgb(0 0 0 / 25%) 0px 25px 50px -12px, #a3a3a3 0 0 5px -2px;
      border-radius: 5px;
      border: 1px solid snow;
      &:nth-of-type(1) {
        left: 300px;
        top: 30px;
      }
      &:nth-of-type(2) {
        left: 70px;
        top: 101px;
      }
      &:nth-of-type(3) {
        left: 500px;
        top: 133px;
      }
      &:nth-of-type(4) {
        left: 605px;
        top: 230px;
      }
      &:nth-of-type(5) {
        left: 133px;
        top: 246px;
      }
      &:nth-of-type(6) {
        left: 401px;
        top: 321px;
      }
      &:nth-of-type(7) {
        left: 530px;
        top: 380px;
      }
      &:nth-of-type(8) {
        left: 0px;
        top: 400px;
      }
      &:nth-of-type(9) {
        left: 300px;
        top: 446px;
      }
      &:nth-of-type(10) {
        left: 100px;
        top: 480px;
      }
      &:nth-of-type(11) {
        left: 600px;
        top: 520px;
      }
      &:nth-of-type(12) {
        left: 560px;
        top: 560px;
      }
      &:nth-of-type(13) {
        left: 300px;
        top: 600px;
      }
    }

    #text {
      font-family: Smiley Sans;
      font-size: 4rem;
      line-height: 5.5rem;
      color: white;
      text-shadow: 0 0 5px #ff525294;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
