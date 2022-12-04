<script lang="ts">
  import { onMount } from "svelte";
  import people_handle_heart from "../assets/statistical-data/people_handle_heart.png";
  import p1 from "../assets/statistical-data/1.png";
  import p2 from "../assets/statistical-data/2.png";
  import p3 from "../assets/statistical-data/3.png";
  import p4 from "../assets/statistical-data/4.png";
  import anime from "animejs";

  onMount(() => {
    const client = document.getElementById("app");
    const el = document.getElementById("statistical-data");
    const cb = () => {
      const start = el.offsetTop - window.innerHeight;
      const end = el.offsetTop;
      const scrollTop = client.scrollTop;
      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - start) / (end - start))
      );
      const text = document.getElementById("statistical-data-text");
      document
        .getElementById("statistical-data")
        .setAttribute("style", `--progress: ${progress};`);
      let pass = false;
      if (progress > 0 && progress < 1 / 2 && !pass) {
        anime({
          targets: "#statistical-data img",
          opacity: 1,
          delay: anime.stagger(50), // increase delay by 100ms for each elements.
        });
        pass = true;
      }
      if (progress >= 1 / 3 && progress < 1) {
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

<section id="statistical-data">
  <div id="statistical-data-text" class="animate__animated bg-card">
    <div>截至2021年底</div>
    <div>我国累计完成捐献<underline>3.7万余例</underline></div>
    <div>捐献器官<underline>11.3万余个</underline></div>
    <div>挽救了<underline>11万余名器</underline>官衰竭患者的生命</div>
  </div>
  <div id="statistical-data-image-container">
    <div>
      <div class="left">
        {#each new Array(18) as _}
          <img src="{people_handle_heart}" alt="" srcset="" />
        {/each}
      </div>
      <div>2010年至2021年， 我国累计完成捐献3.7万余例</div>
    </div>
    <div>
      <div class="right">
        {#each new Array(5) as _}
          <img src="{p1}" alt="" srcset="" />
        {/each}
        {#each new Array(5) as _}
          <img src="{p2}" style="transform: scale(0.8)" alt="" srcset="" />
        {/each}
        {#each new Array(3) as _}
          <img src="{p3}" alt="" srcset="" />
        {/each}
        {#each new Array(2) as _}
          <img src="{p4}" alt="" srcset="" />
        {/each}
      </div>
      <div>2010年至2021年， 我国累计完成捐献器官11.3万余个</div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    // align-items: center;
    padding-top: 10vh;
    height: 60vh;
    position: relative;
    background: var(--pink-bg);
  }
  #statistical-data- {
    &image-container {
      display: flex;
      column-gap: 4rem;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 3rem;
      }
      img {
        opacity: 0;
      }
      .left {
        height: 20rem;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 2rem;
        row-gap: 1.5rem;
        img {
          width: 3rem;
        }
      }
      .right {
        place-items: center;
        height: 20rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1rem;
        img {
          height: 3.5rem;
        }
      }
    }
    &text {
      position: absolute;
      opacity: 0;
      top: 20vh;
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
