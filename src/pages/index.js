import React from "react"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"
import QueueAnim from "rc-queue-anim"

export default () => (
  <QueueAnim delay={500} duration={2000} opacity={[1, 0]}>
    <div className={indexStyles.container} key="demo1">
      <div>
        <div className={indexStyles.avatars}>
          <img
            className={indexStyles.avatarsImg}
            src="http://chuantu.xyz/t6/741/1605176351x-1404755629.jpg"
          />
        </div>
        <div className={indexStyles.nickname}>一只大大的杰哥</div>
      </div>
      <div className={indexStyles.motto}>
        人生在世，你只要知道两件事。这世上绝对存在不需要读书也很聪明，不需要努力也过得很好的人。那个人绝对不是你。然后，你要做的就是乐观并坚持努力，让每一天的自己更出色一点。
      </div>
    </div>
  </QueueAnim>
)
