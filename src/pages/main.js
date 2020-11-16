import React from "react"
import Layout from "../components/layout"
import Carousel3d from "../components/carousel"
import mainStyles from "./main.module.css"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import QueueAnim from "rc-queue-anim"

export default ({ data }) => {
    // console.log("*******",data)
  const children = data.allMarkdownRemark.edges.map((node, i) => (
     console.log("*******",node),
    <div
      key={i.toString()}
      className={mainStyles.imgWrapper}
      style={{
        backgroundImage: `url(${node.node.frontmatter.mainImage})`,
      }}
      onClick={event => {
        event.preventDefault()
        // TODO: do something with form values
        navigate("/blog-Detail", {
          state: node,
        })
      }}
    />
  ))

  return (
    <Layout>
    <QueueAnim className="demo-page" key="page" type="bottom">
    <h1 key="title" className={mainStyles.motto}>Go big or go home</h1>
      <div key="carouse" className={mainStyles.carouselDemoWrapper}>
        <Carousel3d className={mainStyles.carouselDemo} childMaxLength={6}>
          {children}
        </Carousel3d>
      </div>
      {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
      <div key="blog" className={mainStyles.blogContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <QueueAnim key="queueAnim">
            <div
              key={node.id}
              className={mainStyles.blogItem}
              onClick={event => {
                event.preventDefault()
                // TODO: do something with form values
                navigate("/blog-Detail", {
                  state: { node },
                })
              }}
            >
              <div className={mainStyles.blogLeft}>
                <img
                  src={node.frontmatter.mainImage}
                  className={mainStyles.mainImage}
                />
              </div>
              <div className={mainStyles.blogRight}>
                <h3 className={mainStyles.blogTitle}>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p className={mainStyles.shortText}>{node.excerpt}</p>
              </div>
            </div>
          </QueueAnim>
        ))}
      </div>
    </QueueAnim>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            tags
            author
            mainImage
          }
          html
          excerpt
          id
        }
      }
    }
  }
`
