<script lang="ts">
  import { onSee, eventbus } from "@utils";
  import anime from "animejs";
  import { onMount } from "svelte";
  const posStaggerDistance = 8;
  onMount(() => {
    anime({
      targets: ".dialog",
      translateX: anime.stagger([-posStaggerDistance, posStaggerDistance]),
      translateY: anime.stagger([-posStaggerDistance, posStaggerDistance]),
      duration: 2000,
      delay: anime.stagger(100),
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    });
    const audio = document.getElementById("stars-audio") as HTMLAudioElement;
    // eventbus.on("start", audio.play);
    onSee("stars", () => {
      audio.currentTime = 0;
      audio.muted = false;

      // play audio
      // audio.play();
      const timestamps = [
        [0, 5000],
        [19000, 25000],
        [25000, 32000],
        [39000, 44000],
      ];
      timestamps.forEach(([start, end], i) => {
        setTimeout(async () => {
          document
            .querySelector(`.dialog:nth-of-type(${i + 1})`)
            ?.classList.add("active");
        }, start);
        setTimeout(async () => {
          document
            .querySelector(`.dialog:nth-of-type(${i + 1})`)
            ?.classList.remove("active");
        }, end);
      });
    });
  });
</script>

<section id="stars">
  <audio
    id="stars-audio"
    style="width: 0; height: 0;"
    src="/a.mp3"
    muted="{true}"
    controls="{false}"></audio>
  <div class="dialog">
    <div class="inner">
      <div>以勇气和真爱</div>
      <div>为他人换取一份希望</div>
    </div>
  </div>
  <div class="dialog">
    <div class="inner">
      <div>每个人略尽绵力</div>
      <div>我相信也是一种震撼的力量</div>
    </div>
  </div>
  <div class="dialog">
    <div class="inner">
      <div>死亡不能改变</div>
      <div>但可以守护遗落在人间的温暖</div>
    </div>
  </div>
  <div class="dialog">
    <div class="inner">
      <div>我认为他不曾离开我</div>
      <div>我也会永远爱他</div>
    </div>
  </div>
  <div class="title">点点星光，终能汇成璀璨星河</div>
</section>

<style lang="scss">
  section {
    --height: 90vh;
    position: relative;
    height: var(--height);
    background: var(--pink-bg);
    .title {
      font-size: 4rem;
      font-weight: 600;
      text-align: center;
      line-height: var(--height);
    }
    .dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      &.active .inner {
        background-color: #ff5656;
        color: white;
        box-shadow: 0 10px 20px -5px rgba(156, 0, 0, 0.397);
      }
      .inner {
        transition: 0.3s;
        transform: translate(-50%, -50%);
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 2rem;
      }
      font-size: 1.5rem;
      line-height: 1.75rem;
      width: max-content;
      &:nth-of-type(1) {
        margin: -8rem -20rem;
        .inner {
          border-bottom-right-radius: 0;
        }
      }
      &:nth-of-type(2) {
        margin: -8rem 22rem;
        .inner {
          border-bottom-left-radius: 0;
        }
      }
      &:nth-of-type(3) {
        margin: 8rem -20rem;
        .inner {
          border-top-right-radius: 0;
        }
      }
      &:nth-of-type(4) {
        margin: 8rem 17rem;
        .inner {
          border-top-left-radius: 0;
        }
      }
    }
  }
</style>
