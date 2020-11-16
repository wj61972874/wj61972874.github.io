import React from "react"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"
import QueueAnim from "rc-queue-anim"
import { Link } from "gatsby"

export default () => (
  <QueueAnim delay={500} duration={2000} opacity={[1, 0]}>
    <div className={indexStyles.container} key="demo1">
      <div>
        <div className={indexStyles.avatars}>
          <img
            className={indexStyles.avatarsImg}
            src="http://m.qpic.cn/psc?/V519aaEB2IYU2d0puSD52LCS9S0Bsmzj/Sc7wZG8Q0BUeMz.O80ebfNHvoebaicynlLLSZhSMap*uW9YV8RcSCvuenXDKpbIkf2T68ZyK6.PNqNbFvKKu45ffuO6noRG9I1I4UYLd7T8!/b&bo=gAKAAgAAAAABFzA!&rf=viewer_4"
          />
        </div>
        <div className={indexStyles.nickname}>一只大大的杰哥</div>
      </div>
      <div style={{width:'50%',paddingLeft:'100px'}}>
        <div className={indexStyles.motto}>
          人生在世，你只要知道两件事。这世上绝对存在不需要读书也很聪明，不需要努力也过得很好的人。那个人绝对不是你。然后，你要做的就是乐观并坚持努力，让每一天的自己更出色一点。
        </div>
        <div style={{paddingTop:'24px'}}>
          <Link to="/main">进入主页</Link>
        </div>
      </div>
    </div>
  </QueueAnim>
)
