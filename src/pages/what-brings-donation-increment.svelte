<script lang="ts">
  import { onSee } from "@utils";
  import { onMount } from "svelte";
  import anime from "animejs";
  import runners from "../assets/runners.gif";
  import timeline from "../assets/timeline.png";
  import greenChannel1 from "../assets/green-channel-1.gif";
  import greenChannel2 from "../assets/green-channel-2.gif";
  import DanmuJs from "danmu.js";
  import organDonate from "../assets/organ-donate.gif";
  import Girl from "../assets/girl.png";
  // git-box
  import GifBox from "../assets/gif-box.gif";
  function textAppear(textElId: string) {
    onMount(() => {
      const client = document.getElementById("app");
      const el = document.getElementById(textElId);
      const text = document.getElementById(`${textElId}-text`);
      const cb = () => {
        if (
          client.scrollTop >=
          el.offsetTop - screen.height + el.offsetHeight
        ) {
          text.style.opacity = "1";
          text.classList.add("animate__zoomInDown");
          client.removeEventListener("scroll", cb);
        }
      };
      client.addEventListener("scroll", cb);
    });
  }
  textAppear("what-brings-donation-increment");
  textAppear("what-difficulty-we-face");
  textAppear("what-else-we-can-do");
  onMount(() => {
    document.getElementById("green-channel-btn").onclick = () => {
      document
        .getElementById("green-channel")
        .setAttribute("style", "--progress: 1");
    };
  });

  onMount(() => {
    document.getElementById("story-btn").onclick = () => {
      document.getElementById("story-btn").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("story-section").style.display = "block";
    };
  });
</script>

<section id="what-brings-donation-increment" style="--progress: 0">
  <div id="what-brings-donation-increment-text" class="animate__animated">
    步履不停：10年间全力护跑
  </div>
</section>

<section class="text-align text-left">
  <!-- 1 -->
  <h2 class="red">1. 扩大的“奔跑团”：各地协调员的普及与规范</h2>
  <div>
    实践真知，同向奔赴。器官捐献事业，是爱心的传递，更是生命的接力。而作为生与重生间奔跑的协调员，他们见证爱，也传递爱。
  </div>
  <div>
    十年间，全国人体器官捐献协调员队伍不断壮大，<underline
      >由最初的不足一百人逐渐实现数十倍的增长。</underline
    >
  </div>
  <div>
    而更值得欣慰的是，“奔跑团”不断壮大的同时，也逐渐走上了规范管理、严格培训的道路。
  </div>
  <div>
    2010年6月，中国红十字会总会和卫生部在深圳联合举办了第一期人体器官捐献协调员培训班。
  </div>
  <div>
    此后，各地也定期开展规范化培训，截止到2022年8月，全国已成功开办<underline
      >三十余</underline
    >期全国人体器官捐献协调员培训班。
  </div>
  <img id="runners" src="{runners}" alt="" srcset="" />
  <!-- <div style="text-align: center; font-size: 1.2rem;">
    全国器官捐献协调员培训情况
  </div> -->
  <div>
    2021年，中国人体器官捐献管理中心完成年度新增人体器官捐献协调员综合测评工作，共<underline
      >431</underline
    >名学员通过综合测评，取得培训合格证书。 同时，全国共有<underline
      >2252</underline
    >名协调员通过中国人体器官捐献管理中心的年度考核完成注册。
  </div>
  <div>
    2022年，中国人体器官捐献管理中心首次向全国所有在册人体器官捐献协调员发放工具包、工作服装和新版工作证件。
  </div>
  <div>越来越多热情、规范的“生命摆渡人”加入了“为爱赶路”的“奔跑团”中。</div>
  <!-- 2 -->
  <h2 class="red">2. 通畅的“奔赴路”：有关部门构建联合协调机制</h2>
  <div>
    为爱赶路，从不堵车。2016年，国家卫生计生委会同公安部、交通运输部、民航局、铁路总公司、中国红十字会总会等有关部门和单位建立<underline
      >人体捐献器官转运绿色通道的协调机制</underline
    >，统筹协调并指导落实相关工作。同时，通过<underline
      >24小时应急电话</underline
    >保障快速通关、优先承运。
  </div>
  <div>
    在这种联动机制的配合下，有关部门第一时间响应，最大程度配合。在各方的共同努力下，捐献器官共享半径大大扩展，数以千计的终末期器官衰竭患者得到救治机会。绿色通道建立以来，<underline
      >器官转运时间平均缩短1至1.5小时，截止到2020年，省内总体共享率上升两个百分点，全国共享率上升六个百分点</underline
    >。这条爱心之路不断开阔、通畅，保障人体捐献器官转运绿色通道便捷、畅通，也在更大程度上促进全国器官资源的流通调配。
  </div>
  <div id="green-channel" style="--progress: 0">
    <img src="{greenChannel1}" alt="" srcset="" />
    <img src="{greenChannel2}" alt="" srcset="" />
    <div id="green-channel-btn">点击切换绿色通道</div>
  </div>
  <!-- 3 -->
  <h2 class="red">3. 坚实的“承重墙”：医疗技术的提升</h2>
  <div>
    随着移植技术和医疗水平的不断完善，<underline
      >具有器官移植资质的医院数量不断增加</underline
    >，能够进行的器官移植项目也在不断完善，部分医院逐渐从仅能完成单一器官移植逐渐发展成为多器官移植机构。
  </div>
  <!-- <div class="chart" id="silk">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=c_de9ab65860b6586ba6cc51aabf83b5d2"
      width="600"
      height="350"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
    <iframe
      src="https://dycharts.com/xshow/index.html?id=c_235b347e2f1979a45c0576657e0a2a5a"
      width="600"
      height="350"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </div> -->
  <div class="chart">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=63a2a1c15502293b608087c97e988683"
      width="1920"
      height="280"
      scrolling="no"
      frameborder="0"
      title=""
      style="transform: scale(1.1);"></iframe>
  </div>
  <div>
    与此同时，为了更大程度激发捐献器官的医疗价值，许多医疗团队不断攻坚克难，器官移植医疗质量也不断完善，器官保存于供体器官维护技术不断改进，术后配套技术也不断完善，<underline
      >1年和5年术后存活率已达世界先进水平之列</underline
    >。
  </div>

  <!-- 4 -->
  <h2 class="red">4.坚实的“保护网”：相关法律法规的完善和落实</h2>
  <div>
    作为一项伦理性、法律性较强的公共事业，我国的器官捐献工作正逐渐形成内外并举的规范合力。
  </div>
  <div>
    对外，严厉打击，肃正风气。自2012年起，我国裁判文书网中“组织出卖人体器官罪”一词条收纳的相关判决文书份数已达<underline
      >980</underline
    >份，年度判卷文书更从每年不足10份迅速增长至每年<underline>241</underline
    >份。这表明，我国法律管制力度明显增强，对器官非法买卖行为和“黑作坊”重拳出击，绝不容忍。
  </div>
  <div class="chart">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=2a2c7eddc63d6f1e46ef3088e77ddf25"
      width="1920"
      height="500"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </div>
  <div>
    对内，加强管理，规范流程。曾经，由于移植器官来源的敏感性，器官捐献行业曾经是个“灰色地带”。<underline
      >但自2015年1月1日起，我国全面停止使用死囚器官，公民自愿器官捐献成为器官移植的唯一合法渠道</underline
    >，我国器官捐献与移植事业取得历史性进步，标志着中国器官移植走上法制轨道。
  </div>
  <div>
    七年以来，我们在党中央和国务院支持下，在医疗事业中持续进行“壮士断腕”、“刮骨疗毒”的深入改革，不断在观察中积累经验、在实践中维护正义。
    而在此之后，国家层面的法律法规和地方性管理办法、有关条例等都在不断发展完善。
  </div>
  <!-- <div>
    2017年5月，《中华人民共和国红十字会法》修订，明确要推动器官捐献工作，探索了慈善机构等发展人道主义救助机制。同时规定，“各级红十字会设立监事会”在建设监事会制度过程中，各级红十字会依法对监事会制度模式、履职方式和组织构成等方面进行了有益探索。鼓励各级红十字会按照“两公开、两透明”的自律规定，不断提高社会公信力和影响力，为红十字事业发展注入新的活力。
  </div>
  <div>
    2020年5月28日，十三届全国人大三次会议表决通过了《中华人民共和国民法典》，宣告中国“民法典时代”正式到来。其中，人格权独立成编，在第二章生命权、身体权和健康权中对遗体和人体器官、人体组织捐献做出明确规定，明确禁止人体买卖，是民法典中的亮点，也为器官捐献事业的发展又加固一层坚实的保护网。
  </div> -->
  <img id="timeline" src="{timeline}" alt="" />
  <div id="legal-btn">《中华人民共和国民法典》</div>
  <div class="legal">
    <div class="legal-title">第一千零六条</div>
    完全民事行为能力人有权依法自主决定无偿捐献其人体细胞、人体组织、人体器官、遗体。任何组织或者个人不得强迫、欺骗、利诱其捐献。
    完全民事行为能力人依据前款规定同意捐献的，应当采用书面形式，也可以订立遗嘱。
    自然人生前未表示不同意捐献的，该自然人死亡后，其配偶、成年子女、父母可以共同决定捐献，决定捐献应当采用书面形式。
    <div class="legal-title">第一千零七条</div>
    禁止以任何形式买卖人体细胞、人体组织、人体器官、遗体。 违反前款规定的买卖行为无效。
    <div style="text-align: right">——《中华人民共和国民法典》</div>
  </div>
  <!-- <div>
    2021年5月，中国人体器官捐献管理中心与公安部全国公民身份证号码查询服务中心签署协议，在人体器官捐献志愿登记系统开通姓名和身份证号真实性核验功能。
  </div>
  <div>
    2022年9月1日，据国家卫生健康委员会网站消息，国家卫生健康委近期答复政协第十三届全国委员会第五次会议委员《关于制定人体器官捐献法的提案》时表示，《人体器官捐献法》修订取得实质性进展，《条例》拟更名为《人体器官捐献与移植条例》，也将于近期颁布实施。
  </div> -->
  <div>
    据深圳大学法学院讲师段礼乐老师介绍：“修订草案从审批管理权限的分配、活体器官移植的知情同意、器官移植的登记报告等方面完善了器官移植管理制度，形成明确的判断标准和完善的程序规则，既能约束医疗机构和医务人员的行为，也能加强对相关主体的保护，减少器官移植中的医疗风险、法律风险和伦理风险。”
  </div>
  <div>
    七年来，相关法律法规及管理条例积极调整、不断完善，着力弥补人体器官移植相关环节的制度漏洞，并实现与刑法等相关法律规范的衔接和协调，规范人体器官捐献、分配、移植等行为，为器官捐献事业的发展保驾护航。
  </div>
</section>

<section id="what-difficulty-we-face" style="--progress: 0">
  <div id="what-difficulty-we-face-text" class="animate__animated">
    道阻意坚：No.48的漫漫长路
  </div>
</section>

<section class="text-align text-left">
  <div>
    在各方的努力下，目前我国器官捐献事业取得了长足的进步，器官捐献、移植数量两项指标均居世界第<underline
      >二</underline
    >位，但是每百万人口器官捐献率（PMP）却仅为世界第<underline>四十八</underline
    >位。
  </div>
  <div>
    2020年，<underline
      >作为中国PMP最高的省份，北京市PMP数值仅为22.66，相当于美国的一半左右</underline
    >。而其余绝大部分省份PMP数值均低于4。推进器官捐献事业，还需要更长期的努力与改进和更广泛的认可与支持。
  </div>
  <div class="chart">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=73a2b5979999c30b1840bed8a778af19"
      width="1920"
      height="420"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </div>

  <h2 class="red">1.传统观念的影响</h2>
  <div>
    既往研究表明，中国PMP低很大程度上源于传统观念的影响。在中国传统观念中，死者应当入土为安，代代相传的传统观念成为维系家庭的情感联系，也在人们心中烙下深深的印记。所以很多人对于捐献自己的器官尚有不小的顾虑。而对于亲属的意愿，让刚失去亲人的家属接受则是难上加难。
  </div>
  <h2 class="red">2.地区分布不均</h2>
  <div>
    与此同时，全国各地具有移植资质的医院数量也分布不均。根据中华人民共和国国家卫生健康委员会2022年8月发布的数据，<underline
      >全国共有183家具备器官移植资格的医院</underline
    >，但是在数量上却存在显著的地区差异。
  </div>
  <div>
    一些经济较为发达的地区拥有较多的具备器官移植资格的医院，而欠发达地区则相对来说比较少。<underline
      >北京具备移植资质的医院有17所，为全国最多</underline
    >。上海、山东、广东等省份也均有十家以上的医院具备器官移植资格。而<underline
      >内蒙古、吉林、黑龙江、西藏、宁夏等省份，仅有不超过两所具备器官移植资质的医院</underline
    >。
  </div>
  <div class="chart">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=c_b11b07047f3e83dcc7fae19e0d1b0511"
      width="1920"
      height="450"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </div>

  <div>
    除地区医疗水平分布不平衡外，国内器官捐献还面临<underline>技术瓶颈</underline
    >和<underline>专业人士缺乏</underline>等难题。
  </div>
  <div>
    器官捐献流程繁多，且需要有专业的协调员来从事潜在器官供体搜查、家属心理辅导等工作。在美国，每百万人口配备7~12名协调员，在西班牙相应人口配备7名协调员。虽然中国协调员工作发展成效显著，但就<underline
      >中国目前的协调员数量远远不足</underline
    >。导致不少潜在器官供体还有待发现，器官供需矛盾仍然是我国面临的主要困境。
  </div>
  <div>
    而我们能做的，除了我们看到，推动我国器官移植事业发展之路道阻且长，提升器官移植整体水平、建设器官移植强国需要多端发力。
  </div>
  <div class="methods">
    <div>第一，准入更多的优质供体器官用于合法人体器官捐献事业。</div>
    <div>第二，进一步提升移植手术质量，提升器官捐献利用率。</div>
    <div>第三，补充完善相关条例，建立中国模式的管理方案。</div>
    <div>第四，正视差距，补齐短板，形成全国器官捐献一张网。</div>
  </div>
</section>

<section id="what-else-we-can-do" style="--progress: 0">
  <div id="what-else-we-can-do-text" class="animate__animated">
    生死摆渡：6分钟内的同向竞速
  </div>
</section>

<div class="text-align" id="k" style="position: relative;">
  <div>提及器官捐献</div>
  <div>有人觉得这是奉献，大爱无疆</div>
  <div>有人认为应该延续传统，入土为安</div>
  <div>……</div>
  <div>在签署知情同意书那一刻</div>
  <div>我们总会以此作为最后的道别而哀痛万分</div>
  <div></div>
  <div>犹豫、彷徨、不舍、悲痛</div>
  <div>……</div>
  <div>是放下手中的笔，留住最后的不舍</div>
  <div>还是擦干泪水，尊重这份最后的爱传递下去</div>
  <div>一个又一个家属做出了他们的决定</div>
  <img id="girl" src="{Girl}" alt="" srcset="" />
  <img id="gift-box" src="{GifBox}" alt="" />
  <div id="story-btn">点击查看小溪外公的捐献故事</div>
</div>
<section class="text-align" id="story-section">
  <div>
    <div class="italic">
      2020年，小溪的外公因为脑梗不幸去世。病情凶险又发展迅速，加上老人之前就有高血压等老年疾病，送到医院就收到了病危通知书，即便送到了杭州的省级医院也无力回天。整个家被这份突如其来的沉痛打击紧紧裹挟着。哀痛、不舍、痛哭，疾病和死亡似乎像一把无情的剪刀将亲人间灯火可温的血脉联系残忍剪断，家人们一时间都难以接受。
    </div>
    <div class="italic">
      悲痛中，舅舅突然想起外公生前几次在看新闻报道时提出捐献器官的想法都被家人打断了。
    </div>
    <div class="italic">
      “您现在不是挺健康的嘛？怎么想起说这个？”“好好的，说这话干什么？”
    </div>
    <div class="italic">
      而作为儿子，除了痛苦和悲伤，他也想帮父亲完成最后的心愿。他觉得，这是对逝者最后的尊重，更是生者唯一能做的事。所以，当父亲去世后，他决定代父亲正式向家人提出器官捐献的请求。
    </div>
    <div class="italic">
      起初，受宗教信仰和传统观念的影响，外婆并不同意舅舅的请求。除了彼时失去伴侣的无助和悲伤，让她更不能接受与看似与传统观念和佛教信仰中遗体应该完整的观念相悖的事。
    </div>
    <div class="italic">
      而此刻，和很多器官捐献志愿者家属一样，小溪一家面临两难的抉择，一端是传统与情感，一端是尊重与大爱。对于如何决定，究竟如何守护这份亲情，大家都在沉思......
    </div>
    <div class="italic">
      提到外公，小溪总是感觉这位长者是很安心、温暖的依靠。“他生前便是个老好人，我们家旁边住着外来务工的人，外公总是拿些海鲜、肉什么的送过去，来不及照看小孩的时候他们也会把孩子放在我们家。街坊邻居都说他是个好人。他更是一个信仰坚定的老共产党员，外公说自己是抗美援朝时就是党员了，即便是退休了也始终‘为人民服务’。平日，外公就教导我，要乐于助人、多做好事。”
    </div>
    <div class="italic">
      小溪清楚地记得，外公总是在看到有人需要帮助时慷慨解囊，2008年的汶川地震、2011年洪水......不会使用智能手机的外公总是拿着信封郑重地送上他的爱心善款。我想，外公在生命的最后时刻，也在用身体力行教导我，去做好人，多做善事。”
    </div>
    <div class="italic">
      最后，舅舅还是说服了家人，外婆也选择尊重外公的心愿，因为她和外公一样，“希望能救一个是一个”。在全家达成帮助外公奔赴这场接力的共识后，舅舅第一时间与医院取得了联系。
    </div>
    <div class="italic">
      虽然外公生前只是在新闻上看到有关器官捐献的报道，也只是在生前口头表达过关于器官捐献的强烈意愿，本人并没有确认签署志愿协议。但是舅舅还是在医院和工作人员的帮助下，完成评估、登记、确认等一系列流程，帮外公完成了最后的心愿。
    </div>
    <div class="italic">
      最后，小溪外公的眼角膜成功帮助一位患者重见光明。这位慈祥、温暖的长者也如愿在生命的最后为世界留下了一抹光亮。
    </div>
  </div>
</section>

<!-- <section class="text-align">
  <div style="text-align: center">
    <div class="red-ques">这个决定意味着什么？</div>
    <div>「一对角膜、两个肾脏、 一个肝脏、</div>
    <div>一颗心、两叶肺、一个胰腺」</div>
    <div>这是一个人可以捐出的器官</div>
    <div>也可能让9个人接受器官，</div>
    <div>成就<underline>9段重生的奇迹</underline>。</div>
  </div>

  <div style="text-align: center">
    <div class="space"></div>
    <div class="red-ques">这些人是如何接受器官的呢？</div>
    <div>在中国</div>
    <div>器官捐献的完成不只需要本人生前的移植意愿</div>
    <div>也需要在进行手术前完成一系列的流程</div>
    <div>确保这份重生的礼物能够真正递送到需要的人身边</div>
  </div>
</section> -->
<section class="text-align text-left">
  <div>
    而亲友这份期待留给世界的最后一份礼物，却无法承担太久的等候。事实上，器官捐献不仅是一场爱的接力，更是一场时间的赛跑。
  </div>
  <div>
    医学上，<underline>通常以“热缺血时间”表示脑死亡后器官可存活的时间</underline
    >。从器官捐献者心脏停跳到将器官切取完成，进行冷灌注（捐献器官用器官保存液进行灌注，利于保持移植物的活性）这段时间称为热缺血时间。
  </div>
  <div>
    热缺血时，虽然血流中断但移植物的组织细胞仍继续代谢，期间最易发生移植物缺血的严重后果。所以，在我们犹豫不决的时候，正是进行移植手术的黄金时间。
  </div>
  <div class="chart" style="transform: scale(0.7); margin: -140px 0;">
    <iframe
      src="https://dycharts.com/xshow/index.html?id=f11a7130c67897a2b81cb663e06fe030"
      width="1920"
      height="750"
      scrolling="no"
      frameborder="0"
      title=""></iframe>
  </div>
  <div>
    所以，在我们犹豫不决的时候，正是进行移植手术的黄金时间。<underline
      >晚一分钟，死者器官的评估结果就多一分不确定性，也就有一个等待者可能会失去重生的机会。</underline
    >
  </div>
  <div>
    器官移植手术黄金时间虽短，流程却必须规范。在中国，器官捐献的完成不只需要本人生前的移植意愿，也需要在进行手术前完成一系列的流程，确保这份重生的礼物能够真正递送到需要的人身边。
  </div>
  <div>
    在时间短、流程长的情况下，便需要定点医院、红十字会、中国人体器官捐献管理中心等相关机构共同协作，同向竞速，为顺利进行器官移植手术保驾护航。
  </div>
  <img
    src="{organDonate}"
    style="max-width: 851px; background: white;"
    alt=""
    srcset=""
  />
</section>

<section class="text-align text-left">
  严谨为路，八方奔赴。随着我国器官捐献事业的不断发展、流程不断规范，越来越多的志愿者自愿加入器官捐献志愿者的行列。这场生命的接力，不断壮大，也留下了感动的声音，我们欣喜地发现，点点星光，连成了一道星河。
</section>

<!-- <section id="love-and" class="text-align">
  <div>爱与勇气，颠扑不破。</div>
  <div>上苍用疾病与死亡考验我们，</div>
  <div>我们用大爱和勇气诠释生命的意义。</div>
  <div>而我们也始终相信，</div>
  <div>爱有回音，爱与勇气，</div>
  <div>同频搏动，定会战胜疾病。</div>
</section> -->
<style lang="scss">
  #what-brings-donation-increment::before {
    background-image: url("../assets/people.jpg");
  }
  #what-difficulty-we-face::before {
    background-image: url("../assets/people2.jpg");
  }
  #what-else-we-can-do::before {
    background-image: url("../assets/put-heart-in-box.jpg");
  }
  #what-brings-donation-increment,
  #what-difficulty-we-face,
  #what-else-we-can-do {
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
      background-size: cover;
      background-position: center;
      filter: brightness(0.3);
      opacity: 0.8;
    }
    &-text {
      opacity: 0;
    }
  }
  .text-align {
    font-size: 1.2rem;
    background: var(--pink-bg);
    & > div {
      margin: 1rem 0;
    }
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
  .text-left {
    text-align: left !important;
  }
  .legal {
    display: none;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px;
    background-color: white;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-weight: bolder;
    margin: 2rem 0;
    // font-family: "Kaiti", serif;
    font-family: var(--theme-font-regular);
    transition: 0.3s;
    .legal-title {
      font-size: 1.2rem;
      font-family: var(--theme-font);
    }
    &:hover {
      // transform: scale(1.02);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 120px -20px;
    }
  }
  .methods {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    div {
      width: fit-content;
      background-color: white;
      font-size: 1.2rem;
      padding: 0.5rem 2rem;
      border-radius: 2rem;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      @for $i from 0 through 3 {
        &:nth-of-type(#{$i + 1}) {
          margin-left: calc(4.5rem * #{$i});
        }
      }
    }
  }
  .italic {
    // transform: skewX(-5deg);
    // font-family: var(--theme-font-regular-italic);
    font-family: var(--theme-font-regular);
    // font-style: italic;
    font-size: 1.2rem;
    text-align: left;
    color: rgb(0, 0, 0);
  }
  .story {
    font-family: var(--theme-font-regular);
    font-size: 1.2rem;
    & > div {
      // transform: skewX(-5deg);
      font-family: var(--theme-font-regular-italic);
      // font-style: oblique;
    }
  }
  .red-ques {
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 2rem !important;
    font-size: 3rem;
    width: fit-content;
    text-align: center;
    // 文字颜色是红色渐变
    background: linear-gradient(
      90deg,
      rgb(251, 102, 65) 0%,
      rgb(244, 124, 255) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &:not(:first-of-type) {
      margin-top: 2rem !important;
      padding-top: 2rem;
    }
  }

  .space {
    display: block;
    widows: 200px;
    height: 3rem;
  }

  #timeline {
    width: 851px;
    max-width: 851px;
  }
  #green-channel {
    position: relative;
    height: calc(851px * 900 / 1600);
    cursor: pointer;
    img {
      position: absolute;
      width: 851px;
      max-width: 851px;
      transition: 0.3s;
      &:nth-last-of-type(1) {
        opacity: calc(var(--progress));
      }
      &:nth-last-of-type(2) {
        opacity: calc(1 - var(--progress));
      }
    }
    &-btn {
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      // border-radius: 50%;
      width: fit-content;
      height: fit-content;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.788);
      backdrop-filter: blur(10px);
      color: rgb(0, 0, 0);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px -7px;
      z-index: 99;
      cursor: pointer;
      transition: 0.3s;
      opacity: calc(1 - var(--progress));
      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }
  .red {
    background: linear-gradient(
      90deg,
      rgb(251, 102, 65) 0%,
      rgb(244, 124, 255) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  #legal-btn {
    background-color: rgba(255, 255, 255, 0.788);
    width: fit-content;
    border-radius: 1rem;
    cursor: pointer;
    padding: 0 1rem;
    font-size: 1.2rem;
    transition: 0.3s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px -7px;
    }
  }
  #silk {
    display: flex;
    flex-direction: row;
    padding: 0;
    iframe {
      // transform: scale(0.8);
    }
  }
  #story-btn {
    position: absolute;
    bottom: 0;
    // left: -1rem;
    margin-left: -2rem;
    background: white;
    margin-bottom: 2rem;
    padding: 0 1rem;
    background-color: rgba(255, 255, 255, 0.788);
    width: fit-content;
    border-radius: 1rem;
    cursor: pointer;
    padding: 0 1rem;
    font-size: 1.2rem;
    transition: 0.3s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px -7px;
    }
  }
  #story-section {
    display: none;
    & > div {
      width: 851px;
      background: white;
      padding: 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      border-radius: 1rem;
    }
  }
  #k > div:not(:last-of-type) {
    margin: 0;
  }
  #runners {
    transform: scale(0.9);
  }
  #girl {
    width: 120px;
    position: absolute;
    bottom: 0;
    transform: translate(-23rem, -6rem);
  }
  #gift-box {
    width: 350px;
    position: absolute;
    bottom: 0;
    transform: translate(8rem, -6rem);
  }
</style>
