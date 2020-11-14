import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
// import detailsStyles from "./details.module.css"
import QueueAnim from "rc-queue-anim"

export default ({ location }) => {
    console.log("***",location);
  useEffect(() => {
    document.getElementById("detailBody").innerHTML = location.state.node.html
  })

  return (
    <Layout>
      <QueueAnim key="queueAnim" delay={2000} duration={2000} opacity={[1, 0]}>
        <div>{location.state.node.frontmatter.title}</div>
        <div id="detailBody"></div>
      </QueueAnim>
    </Layout>
  )
}
