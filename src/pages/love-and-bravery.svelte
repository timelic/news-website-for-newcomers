<section id="love-and" class="text-align">
  <div>爱与勇气，颠扑不破</div>
  <div>上苍用疾病与死亡考验我们</div>
  <div>我们用大爱和勇气诠释生命的意义</div>
  <div>而我们也始终相信</div>
  <div>爱有回音，爱与勇气</div>
  <div>同频搏动，定会战胜疾病</div>
</section>

<style lang="scss">
  #love-and {
    // background: url("../assets//bg-n.jpg");
    // 通过::before伪元素来设置背景
    position: relative;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.432);
    color: white;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background: url("../assets/bg-n.jpg");
      background-color: black;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -1;
      opacity: 1;
      filter: brightness(0.8) contrast(1.1) blur(1px);
    }
  }
</style>
