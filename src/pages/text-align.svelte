<script lang="ts">
  import classnames from "classnames";
  export let text: string;
  export let fontSize: "small" | "medium" | "large" = "medium";
  $: fontSizeClass = `text-${fontSize}`;
  export let bg: "a" | "b" | "c" = "a";
  $: bgClass = `bg-${bg}`;
  export let paddingBottom: string = "2rem";
  export let noBg: boolean = false;
  $: noBgClass = noBg ? "no-bg" : "";
</script>

<section
  class="{classnames(bgClass, noBgClass)}"
  style="--paddingBottom: {paddingBottom}"
>
  <div class="{fontSizeClass}">
    {text}
  </div>
  <slot />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    padding-bottom: var(--paddingBottom);
    &.bg- {
      &a {
        background-color: #ffaeae;
      }
      &b {
        background: var(--pink-bg);
      }
      &c {
        background-color: #f5f5f5;
      }
    }

    div {
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-align: center;
      white-space: pre-wrap;
    }
    .text- {
      &small {
        font-size: 1.2rem;
        line-height: 2rem;
      }
      &medium {
        font-size: 1.5rem;
        line-height: 2.5rem;
      }
      &large {
        font-size: 1.8rem;
        line-height: 3rem;
      }
    }
  }
</style>
