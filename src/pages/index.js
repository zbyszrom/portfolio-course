import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Process from '../components/process'
import Specialize from '../components/specialize'
import Stats from '../components/stats'

const IndexPage = () => (
  <Layout>
    <Specialize/>
    <Stats/>
    <Process />
  </Layout>
)

export default IndexPage
