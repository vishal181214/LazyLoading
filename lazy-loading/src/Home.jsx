import React from 'react'
// import About from './About'

const  About = React.lazy(() => import('./About'));
function Home() {
  return (
    <div>
      <h1>Home Page Component</h1>
      <About/>
    </div>
  )
}

export default Home
