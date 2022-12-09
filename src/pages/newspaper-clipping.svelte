<script lang="ts">
  import { onSee } from "@utils";
  import { onMount } from "svelte";
  onMount(() => {
    const audio = document.getElementById(
      "newspaper-clipping-audio"
    ) as HTMLAudioElement;
    onSee("newspaper-clipping-audio", () => {});
    const client = document.getElementById("app");
    const el = document.getElementById("newspaper-clipping");
    const imgs = document.querySelectorAll<HTMLImageElement>(
      "#clippings-container img"
    );
    const texts = document.querySelectorAll<HTMLImageElement>("#text div");
    // change NodeList to HTMLElement[]
    const textsArr: HTMLImageElement[] = Array.prototype.slice.call(texts);
    let audioPlayed = false;
    const scrollCb = () => {
      const scrolled = client.scrollTop;
      if (scrolled >= el.offsetTop - window.innerHeight && !audioPlayed) {
        audio.currentTime = 0;
        audio.muted = false;
        audioPlayed = true;
      }
      imgs.forEach((img, i) => {
        const step = (el.offsetHeight * 0.6) / 13;
        const start = el.offsetTop - window.innerHeight * 0.8 + step * i,
          end = el.offsetTop - window.innerHeight * 0.8 + step * (i + 1);
        const progress = Math.min(
          1,
          Math.max(0, (scrolled - start) / (end - start))
        );
        if (progress >= 1 && !img.classList.contains("animate__fadeInUp")) {
          img.classList.add("animate__fadeInUp");
          img.style.display = "block";
        }
      });
      if (scrolled >= el.offsetTop) {
        client.removeEventListener("scroll", scrollCb);
        imgs.forEach((img) => {
          img.classList.remove("animate__fadeInUp");
          img.classList.add("animate__fadeOutUp");
        });
        document.getElementById("text").style.opacity = "1";
        // texts.classList.add("animate__fadeInUp");
        textsArr.forEach((text, i) => {
          setTimeout(() => {
            text.classList.add("animate__fadeInUp");
          }, 200 * i);
        });
      }
    };
    client.addEventListener("scroll", scrollCb);
  });
</script>

<audio
  id="newspaper-clipping-audio"
  style="width: 0; height: 0;"
  src="/b.mp3"
  controls="{false}"
  muted></audio>
<div id="newspaper-clipping">
  <div id="clippings-container">
    {#each new Array(13) as _, i}
      <img
        class="clipping animate__animated"
        src="/newspaper-clipping/{i + 1}.jpg"
        alt=""
        srcset=""
      />
    {/each}
    <div id="text" class="animate__animated">
      <div class="animate__animated">大爱如潮 无碍奔涌</div>
      <div class="animate__animated">在一次次的生命接力中</div>
      <div class="animate__animated">在一次次奔走传递间</div>
      <div class="animate__animated">
        越来越多人以<underline class="sky">勇气和真诚</underline>去奉献
      </div>
      <div class="animate__animated">最无价的生命之礼</div>
    </div>
  </div>
</div>

<style lang="scss">
  #newspaper-clipping {
    display: flex;
    height: 90vh;
    background-color: #ffaeae;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: 0.3s;
      background-image: url("../assets/bg.jpg");
      background: var(--pink-bg);
      background-size: cover;
    }
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
      box-shadow: rgb(66 0 0 / 65%) 0px 25px 50px -12px, #a3a3a3 0 0 5px -2px;
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
      font-family: var(--theme-font);
      font-size: 1.2rem;
      line-height: 2rem;
      color: black;
      scale: 0.95 1;
      // text-shadow: 0 0 5px #ff525294;
      // opacity: 0;
      display: flex;
      flex-direction: column;
      transition: 0.2s;
      justify-content: center;
      div {
        opacity: 0;
      }
    }
  }
</style>
