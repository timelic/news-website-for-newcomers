<script lang="ts">
  import { onMount } from "svelte";
  import img1 from "../assets/waiting-for-organ/等待者1.png";
  import img2 from "../assets/waiting-for-organ/等待者2.png";

  onMount(() => {
    const client = document.getElementById("app");
    const el = document.getElementById("waiting");
    const imgs = document.querySelectorAll<HTMLImageElement>("#waiting img");
    const cb = () => {
      const start = el.offsetTop - window.innerHeight;
      const end = el.offsetTop;
      const scrollTop = client.scrollTop;
      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - start) / (end - start))
      );
      const text = document.getElementById("waiting-text");
      document
        .getElementById("waiting")
        .setAttribute("style", `--progress: ${progress};`);
      if (progress >= 1 / 2 && progress < 3 / 4) {
        imgs[0].style.opacity = "0";
        imgs[1].style.opacity = "1";
        if (!text.classList.contains("animate__fadeInUp"))
          text.classList.add("animate__fadeInUp");
      } else if (progress >= 1) {
        if (!text.classList.contains("animate__fadeOutUp"))
          text.classList.add("animate__fadeOutUp");
        client.removeEventListener("scroll", cb);
      }
    };
    client.addEventListener("scroll", cb);
  });
</script>

<section id="waiting">
  <!-- <div id="waiting-title">这儿需要加一个标题 不然不好看</div> -->
  <div id="waiting-text" class="animate__animated bg-card">
    <div>数据统计结果显示</div>
    <div>每1例成功的器官移植背后</div>
    <div>就有<underline>29个</underline>在等待的人</div>
  </div>
  <div id="waiting-image-container">
    <img src="{img1}" class="animate__animated" alt="" />
    <img src="{img2}" class="animate__animated" alt="" />
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    position: relative;
    background: var(--pink-bg);
    padding-bottom: 5vh;
  }
  #waiting- {
    &title {
      position: absolute;
      top: -2vh;
      left: 10vw;
      font-size: 1.25rem;
      // opacity: 0;
      transition: 0.5s;
      &::before {
        content: "";
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: rgb(255, 102, 0);
        margin-right: 1rem;
        margin-bottom: 0.25rem;
      }
    }
    &image-container {
      --width: 800px;
      width: var(--width);
      height: calc(var(--width) * 810 / 1440);
      position: relative;
      img {
        &:not(:first-child) {
          opacity: 0;
        }
        transition: 0.6s;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }
    }
    &text {
      position: absolute;
      opacity: 0;
      background-color: white;
      z-index: 99;
      padding: 1rem;
      font-size: 1.1rem;
      font-family: var(--theme-font);
      line-height: 2rem;
      border-radius: 1rem;
      text-align: center;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
</style>
