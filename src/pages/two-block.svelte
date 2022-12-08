<script lang="ts"></script>

<section>
  <div class="t-top">自2015年公民志愿捐献成为我国器官移植唯一合法来源以来</div>
  <div class="t-bottom">
    <div>
      <div class="t-left">2015-2021年，我国完成公民逝世后器官捐献累计</div>
      <div class="t-right" style="width: 200px">34606例</div>
    </div>
    <div>
      <div class="t-left">我国器官捐献数量每年平均增长</div>
      <div class="t-right" style="width: 100px">20%</div>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 4rem;
    background: var(--pink-bg);
    .t- {
      &top {
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
        margin-top: 200px;
      }
      &bottom {
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        column-gap: 2rem;
        & > div {
          box-shadow: 0 0 3rem 0rem rgba(0, 0, 0, 0.1);
          background-color: white;
          padding: 1.5rem 2rem;
          border-radius: 1rem;
          // width: 45%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;

          .t-left {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            flex-grow: 1;
            max-width: 200px;
          }
          .t-right {
            color: #f85353;
            text-align: right;
            flex-grow: 0;
            font-size: 3rem;
            font-weight: bold;
            text-align: center;
            margin: 0;
            padding: 0;
            &:first-of-type {
              width: 200px;
            }
          }
        }
      }
    }
  }
</style>
