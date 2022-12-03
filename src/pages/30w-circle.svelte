<script lang="ts">
  import { onMount } from "svelte";
  import img1 from "../assets/30万小圈圈/30万小圈圈.png";
  import img2 from "../assets/30万小圈圈/30万小圈圈 爱心版亮色.png";
  import img3 from "../assets/30万小圈圈/30万小圈圈 爱心版.png";

  onMount(() => {
    const client = document.getElementById("app");
    const el = document.getElementById("circle-30w");
    const imgs = document.querySelectorAll<HTMLImageElement>("#circle-30w img");
    const cb = () => {
      const start = el.offsetTop - window.innerHeight;
      const end = el.offsetTop;
      const scrollTop = client.scrollTop;
      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - start) / (end - start))
      );
      const text = document.getElementById("circle-30w-text");
      document
        .getElementById("circle-30w")
        .setAttribute("style", `--progress: ${progress};`);
      if (progress >= 1 / 2 && progress < 3 / 4) {
        imgs[0].style.opacity = "0";
        imgs[1].style.opacity = "1";
        if (!text.classList.contains("animate__fadeInUp"))
          text.classList.add("animate__fadeInUp");
      } else if (progress >= 1) {
        imgs[1].style.opacity = "0";
        imgs[2].style.opacity = "1";
        document.getElementById("circle-30w-title").style.opacity = "1";
        if (!text.classList.contains("animate__fadeOutUp"))
          text.classList.add("animate__fadeOutUp");
        client.removeEventListener("scroll", cb);
      }
    };
    client.addEventListener("scroll", cb);
  });
</script>

<section id="circle-30w">
  <div id="circle-30w-title">这儿需要加一个标题 不然不好看</div>
  <div id="circle-30w-text" class="animate__animated bg-card">
    <div>在中国</div>
    <div>每年有30万患者可以通过器官移植重获新生</div>
    <div>但目前</div>
    <div>每年只能进行2万多例器官移植手术</div>
  </div>
  <div id="circle-30w-image-container">
    <img src="{img1}" class="animate__animated" alt="30万小圈圈" />
    <img src="{img2}" class="animate__animated" alt="30万小圈圈 爱心版" />
    <img src="{img3}" class="animate__animated" alt="30万小圈圈 爱心版亮色" />
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    position: relative;
    background: var(--pink-bg);
  }
  #circle-30w- {
    &title {
      position: absolute;
      top: 5vh;
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
      --width: 650px;
      width: var(--width);
      height: calc(var(--width) * 14 / 19);
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
