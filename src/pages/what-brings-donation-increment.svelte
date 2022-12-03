<script lang="ts">
  import { onSee } from "@utils";
  import { onMount } from "svelte";
  import runners from "../assets/runners.gif";
  onMount(() => {
    const client = document.getElementById("app");
    const el = document.getElementById("what-brings-donation-increment");
    const text = document.getElementById("what-brings-donation-increment-text");
    const cb = () => {
      if (client.scrollTop >= el.offsetTop - screen.height + el.offsetHeight) {
        text.style.opacity = "1";
        text.classList.add("animate__zoomInDown");
        client.removeEventListener("scroll", cb);
      }
    };
    client.addEventListener("scroll", cb);
  });
  // onSee("runners", () => {
  //   const img = document.getElementById("runners") as HTMLImageElement;
  //   img.src = runners;
  // });
</script>

<section id="what-brings-donation-increment" style="--progress: 0">
  <div id="what-brings-donation-increment-text" class="animate__animated">
    是什么带来了捐献数量的增长？
  </div>
</section>

<section class="text-align">
  <!-- 1 -->
  <h2>1. 扩大的“奔跑团”：各地协调员的普及与规范</h2>
  <div>
    实践真知，同向奔赴。器官捐献事业，是爱心的传递，更是生命的接力。而作为生与重生间奔跑的协调员，他们见证爱，也传递爱。
  </div>
  <div>
    十年间，全国人体器官捐献协调员队伍不断壮大，由最初的不足一百人逐渐实现数十倍的增长。
  </div>
  <div>而更值得欣慰的是，</div>
  <div>“奔跑团”不断壮大的同时，也逐渐走上了规范管理、严格培训的道路。</div>
  <div>
    2010年6月，中国红十字会总会和卫生部在深圳联合举办了第一期人体器官捐献协调员培训班。
  </div>
  <div>
    此后，各地也定期开展规范化培训，截止到2022年8月，全国已成功开办三十余期全国人体器官捐献协调员培训班。
  </div>
  <img id="runners" src="{runners}" alt="" srcset="" />
  <div>
    2021年，中国人体器官捐献管理中心完成年度新增人体器官捐献协调员综合测评工作，共431名学员通过综合测评，取得培训合格证书。
  </div>
  <div>
    同时，全国共有2252名协调员通过中国人体器官捐献管理中心的年度考核完成注册。
  </div>
  <div>
    2022年，中国人体器官捐献管理中心首次向全国所有在册人体器官捐献协调员发放工具包、工作服装和新版工作证件。
  </div>
  <div>越来越多热情、规范的“生命摆渡人”加入了“为爱赶路”的“奔跑团”中。</div>
  <!-- 2 -->
  <h2>2. 通畅的“奔赴路”：有关部门构建联合协调机制</h2>
  <div>
    为爱赶路，从不堵车。2016年，国家卫生计生委会同公安部、交通运输部、民航局、铁路总公司、中国红十字会总会等有关部门和单位建立人体捐献器官转运绿色通道的协调机制，统筹协调并指导落实相关工作。同时，通过24小时应急电话保障快速通关、优先承运。
  </div>
  <div>
    在这种联动机制的配合下，有关部门第一时间响应，最大程度配合。在各方的共同努力下，捐献器官共享半径大大扩展，数以千计的终末期器官衰竭患者得到救治机会。绿色通道建立以来，器官转运时间平均缩短1至1.5小时，截止到2020年，省内总体共享率上升两个百分点，全国共享率上升六个百分点。这条爱心之路不断开阔、通畅，保障人体捐献器官转运绿色通道便捷、畅通，也在更大程度上促进全国器官资源的流通调配。
  </div>
  <!-- 3 -->
  <h2>3. 坚实的“承重墙”：医疗技术的提升</h2>
  <div>
    随着移植技术和医疗水平的不断完善，具有器官移植资质的医院数量不断增加，能够进行的器官移植项目也在不断完善，部分医院逐渐从仅能完成单一器官移植逐渐发展成为多器官移植机构。
  </div>
  <div>
    与此同时，为了更大程度激发捐献器官的医疗价值，许多医疗团队不断攻坚克难，器官移植医疗质量也不断完善，器官保存于供体器官维护技术不断改进，术后配套技术也不断完善，1年和5年术后存活率已达世界先进水平之列。
  </div>
  <!-- 4 -->
  <h2>4.坚实的“保护网”：相关法律法规的完善和落实</h2>
  <div>
    作为一项伦理性、法律性较强的公共事业，我国的器官捐献工作正逐渐形成内外并举的规范合力。
  </div>
  <div>
    对外，严厉打击，肃正风气。自2012年起，我国裁判文书网中“组织出卖人体器官罪”一词条收纳的相关判决文书份数已达980份，年度判卷文书更从每年不足10份迅速增长至每年241份。这表明，我国法律管制力度明显增强，对器官非法买卖行为和“黑作坊”重拳出击，绝不容忍。
  </div>
  <div>
    对内，加强管理，规范流程。曾经，由于移植器官来源的敏感性，器官捐献行业曾经是个“灰色地带”。但自2015年1月1日起，我国全面停止使用死囚器官，公民自愿器官捐献成为器官移植的唯一合法渠道，我国器官捐献与移植事业取得历史性进步，标志着中国器官移植走上法制轨道。
  </div>
  <div>
    七年以来，我们在党中央和国务院支持下，在医疗事业中持续进行“壮士断腕”、“刮骨疗毒”的深入改革，不断在观察中积累经验、在实践中维护正义。
  </div>
  <div>
    而在此之后，国家层面的法律法规和地方性管理办法、有关条例等都在不断发展完善。
  </div>
  <div>
    2017年5月，《中华人民共和国红十字会法》修订，明确要推动器官捐献工作，探索了慈善机构等发展人道主义救助机制。同时规定，“各级红十字会设立监事会”在建设监事会制度过程中，各级红十字会依法对监事会制度模式、履职方式和组织构成等方面进行了有益探索。鼓励各级红十字会按照“两公开、两透明”的自律规定，不断提高社会公信力和影响力，为红十字事业发展注入新的活力。
  </div>
  <div>
    2020年5月28日，十三届全国人大三次会议表决通过了《中华人民共和国民法典》，宣告中国“民法典时代”正式到来。其中，人格权独立成编，在第二章生命权、身体权和健康权中对遗体和人体器官、人体组织捐献做出明确规定，明确禁止人体买卖，是民法典中的亮点，也为器官捐献事业的发展又加固一层坚实的保护网。
  </div>
</section>

<style lang="scss">
  #what-brings-donation-increment {
    --height: 40vh;
    height: var(--height);
    line-height: var(--height);
    background: linear-gradient(
      90deg,
      hsla(211, 96%, 62%, 1) 0%,
      hsla(295, 94%, 76%, 1) 100%
    );
    color: white;
    background-size: cover;
    text-align: center;
    font-size: 4rem;
    font-family: var(--theme-font);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../assets/hands.jpg");
      background-size: cover;
      background-position: center;
      filter: brightness(0.3);
      opacity: 0.8;
    }
  }
  .text-align {
    font-size: 1.25rem;
    background: var(--pink-bg);
  }
  img {
    max-width: 800px;
    mix-blend-mode: darken;
    border-radius: 1rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
    &:not(:first-of-type) {
      margin-top: 4rem;
    }
  }
</style>
