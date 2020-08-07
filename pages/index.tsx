import { NextPage } from 'next';
import Home from '../container/home'

const IndexPage : NextPage = () => {
    return <div className="p-4 shadow rounded bg-white">
      <Home />
  </div>
}

export default IndexPage;