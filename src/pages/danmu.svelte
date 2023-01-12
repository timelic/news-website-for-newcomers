<script lang="ts">
  import { onMount } from "svelte";
  import DanmuJs from "danmu.js";
  import { danmuList } from "./data-danmu";

  onMount(() => {
    let danmu = new DanmuJs({
      container: document.getElementById("last"), //弹幕容器，该容器发生尺寸变化时会自动调整弹幕行为
      containerStyle: {
        //弹幕容器样式
        // zIndex: 100,
      },
      // area: {
      //   //弹幕显示区域
      //   start: 0, //区域顶部到播放器顶部所占播放器高度的比例
      //   end: 1, //区域底部到播放器顶部所占播放器高度的比例
      //   lines: undefined, // 弹幕虚拟轨道显示行数。当指定行数时，显示范围 start/end 不生效；当弹幕字体大小超过所需要的总虚拟轨道数时，弹幕也不会出现在轨道上，因此请设置好弹幕fontSize及影响弹幕高度的其他样式，让弹幕和轨道高度匹配
      // },
      channelSize: 20, // 轨道大小
      mouseControl: true, // 打开鼠标控制, 打开后可监听到 bullet_hover 事件。danmu.on('bullet_hover', function (data) {})
      mouseControlPause: false, // 鼠标触摸暂停。mouseControl: true 生效
      //bOffset: 1000, //可调节弹幕横向间隔（毫秒）
    });
    // const danmus = [
    //   "“虽然心里会难过，但也是为国家做贡献，医学发达后，受益的是子孙后代。”",
    //   "“或许通过这种方式，能将妹妹的善良美好继续留在人间，也希望妹妹以这种方式‘活着’。”",
    //   "“我们正经历失去亲人的痛苦，虽有万分不舍，但希望小桐的生命能够得到另一种方式的延续，为其他深受疾病折磨的家庭带去生的希望。”",
    //   "“没有捐献，哪有国家医疗水平的提升。我们老两口捐献遗体，也是想百年后能为党和国家做最后一点贡献。”",
    //   "“母亲一生朴素，非常善良、有爱心，邻里关系非常好。10多年前她就咨询过遗体捐献相关事宜，无偿捐献遗体是母亲一直以来的心愿。”",
    //   "“我也是一名退役军人，很早以前就签了捐献遗体的志愿书，我也一直给我的儿子说，等我不在了你就把我的遗体捐献给国家，不给社会、家庭增加负担，没想到我的儿子却走在了我的前面……”",
    //   "“爸爸，您在我的出生证上签字，我却在您的器官捐献同意书上签字……”",
    //   "“人民育我终一生，情深似海难回报。愿将遗体捐医学，聊为民利尽绵薄。”",
    //   "“人总是有这么一天，其实我也算不上什么奉献，想到哪儿就做到哪儿，就想临终时把遗体捐出去。”",
    //   "“生不带来，死不带去，如果在生命结束后还能为医学献力，难道不是一种最大的圆满？”",
    // ];
    let i = 0;
    function getNextDanmu(): string {
      // if i is the entire length of danmus, set i to 0
      if (i === danmuList.length) {
        i = 0;
      }
      return danmuList[i++];
    }
    setInterval(() => {
      const d = getNextDanmu();
      const style = {
        color: d.startsWith("W") ? "yellow" : "white",
        transform: d.startsWith("W") ? "scale(1.2)" : "scale(0.8)",
      };
      danmu.sendComment({
        //发送弹幕
        duration: 13000,
        id: d + Math.random(),
        txt: d.startsWith("W") ? d.slice(1) : d,
        style,
      });
    }, 100);

    document.getElementById("legal-btn").onclick = () => {
      document.getElementById("legal-btn").style.display = "none";
      const elem = document
        .getElementsByClassName("legal")
        .item(0) as HTMLDivElement;
      elem.style.display = "block";
    };
  });
</script>

<section class="text-align" id="last"></section>

<style lang="scss" global>
  #last {
    position: relative;
    color: white;
    background: none;
    height: 70vh;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../assets/last.jpeg");
      background-size: cover;
      background-position: center;
      filter: brightness(0.3);
      // opacity: 0.8;
      z-index: -1;
    }
  }
  .danmu > * {
    font-family: var(--theme-font-regular);
  }
</style>
