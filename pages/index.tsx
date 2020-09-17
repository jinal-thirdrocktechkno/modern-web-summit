import { NextPage } from 'next';
import React from 'react'
import Home from '../container/home'
import Head from 'next/head'
import Metas from '../meta'

const IndexPage: NextPage = () => {
  return <>
    <Head>
      {Metas.map((m, i) => <React.Fragment key={i}>{m}</React.Fragment>)}
    </Head>
    <Home />
  </>
}

export default IndexPage;