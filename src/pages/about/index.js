import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>Abe Choi | About</title>
      </Helmet>
      <div className={styles.about}>
        <div>
          <StaticImage
            src="../../images/profile.png"
            alt="profile-pic"
            placeholder="blurred"
          />
          <div>
            <p>Abraham Jong-Hae Choi</p>
            <p>abraham.choi@icloud.com</p>
            <p>Chapman University</p>
            <p>Computer Science B.S</p>
            <p>Web Developer</p>
            <p>USAF Veteran</p>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <h2>Hello, World!</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;My name is Abraham Choi, and my Korean name
            is Choi Jong-Hae. I was born in New York, raised in New Jersey. I
            joined the United States Air Force at the age of 20, and was
            stationed in Louisiana. After being honorably discharged, I went
            back to New Jersey to attend Middlesex County College, where I had
            received my Associate's degree in Computer Science. Then, I moved to
            Orange, California where I received my Bachelor's degree in Computer
            Science from Chapman University. Currently, I live and work in
            Irvine, at a Managed Service Provider where I perform network
            operations, maintain servers, and provide helpdesk support.
          </p>
          <h2>How I Spend My Free Time</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I typically spend a lot of my free time
            coding. React is my most comfortable framework, if you haven't
            noticed. When I'm not coding, I have an <strong>array</strong> of
            hobbies and interests, such as weight-training, kayaking, hiking,
            dancing, singing, reading, and the list goes on. The older I get,
            the more interests I seem to pick up, and now I'm very open-minded
            to trying and learning new things, or even revisiting things that I
            was once deterred away from. My new mentality has been paramount for
            my web dev journey, as there are so many things to learn. While I'm
            still trying to reach my full potentional as a developer, I know
            that if I keep moving forward and strive to be better each day, I'll
            get there one day.
          </p>
        </div>
      </div>
    </Layout>
  )
}
