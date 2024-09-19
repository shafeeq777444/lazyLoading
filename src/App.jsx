import React from 'react'
import{lazy,Suspense} from 'react'
// import Book from './Book'
const Books=lazy(()=>import ('./Authors'))

function App() {
  return (
    <div>
        <Suspense fallback={<h1>loading...</h1>}>
      <Books/>
      </Suspense>
    </div>
  )
}

export default App
/* inspect->network->3g->relod :we can see that loading time output */