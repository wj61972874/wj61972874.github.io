import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth:'85%', padding: `0 1rem`,position:'relative' }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/main/" style={{ textShadow: `none`, backgroundImage: `none`,display:'flex',alignItems:'center',width:'20%' }}>
        {/* <h1 style={{ display: `inline` }}>Go bing, or go home</h1> */}
        <img className={layoutStyles.avatarsImg} src="http://m.qpic.cn/psc?/V519aaEB2IYU2d0puSD52LCS9S0Bsmzj/Sc7wZG8Q0BUeMz.O80ebfNHvoebaicynlLLSZhSMap*uW9YV8RcSCvuenXDKpbIkf2T68ZyK6.PNqNbFvKKu45ffuO6noRG9I1I4UYLd7T8!/b&bo=gAKAAgAAAAABFzA!&rf=viewer_4"/>
        <span className={layoutStyles.name}>A Cool Jay</span>
      </Link>
        
      <Link to="/" className={layoutStyles.home}>
        <img src="/assets/home.svg"/>
      </Link>
      {/* <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul> */}
    </header>
    {children}
  </div>
)