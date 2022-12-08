<script lang="ts">
  import anime from "animejs";
  import { onMount } from "svelte";
  import HandHoldingHeart from "../assets/HandHoldingHeart.svg";
  import TitleImage from "../assets/heart.svg";
  const battery = {
    cycles: "0",
  };
  onMount(() => {
    const num = document.getElementById("header-num");
    setInterval(() => {
      num.innerText = parseInt(battery.cycles).toString();
    }, (2 * 1000) / 60);
    anime({
      targets: battery,
      cycles: 5580000,
      duration: 1000,
      easing: "linear",
    });
  });
</script>

<div id="header">
  <div id="header-container">
    <div id="title">
      <div class="subtitle">
        数说器官捐献
        <img src="{HandHoldingHeart}" alt="" />
      </div>
      <!-- <h1>７年奔赴</h1> -->
      <h1>一场<underline id="header-num">0</underline>人的生命接力</h1>
    </div>
    <img
      id="title-image"
      class="animate__animated animate__pulse animate__infinite	"
      src="{TitleImage}"
      alt=""
    />
  </div>
</div>

<style lang="scss" global>
  #header {
    background-color: #ffcdc4;
    background-image: url("../assets/pink-bg.webp");
    background-size: contain;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: var(--theme-font);
    align-items: center;
    #header-container {
      // max-width: 1200px;
      // min-width: 1200px;
      // 斜体
      min-width: calc(54rem + 500px);
      display: flex;
      align-items: center;
      #title {
        flex-basis: 54rem;
        flex-shrink: 0;
        // transform: scaleX(0.8);
        font-size: 4.5rem;
        h1 {
          transform: skewX(-8deg) scaleX(0.9);
          transform-origin: 0 50%;
          margin-top: 1rem;
          line-height: 6rem;
          &:last-of-type {
            margin-top: 0.5rem;
          }
        }
      }
      #title-image {
        width: 100%;
        height: 100%;
        max-width: 500px;
        max-height: 500px;
        transform: scale(1.2);
        transform-origin: 50% 50%;
        --animate-duration: 5s;
        margin-left: -1rem;
      }
      .subtitle {
        transform: skewX(-8deg);
        font-size: 2.25rem;
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
        img {
          height: 1.85rem;
          margin-left: 0.5rem;
          transform: skewX(-8deg);
        }
      }
      #divided-line {
        height: 2px;
        width: 50rem;
        background-image: linear-gradient(to right, #fac7c7, #f48f8f00);
        margin: 1rem 0;
      }
      #small-text {
        font-size: 1.2rem;
        line-height: 2.5rem;
      }
    }
  }
</style>
