import React from 'react'
import Card1 from '../components/card/Card1'
import Card2 from '../components/card/Card2'
import Card3 from '../components/card/Card3'


function HomePage() {
  return (
    <div className='container'>

      <div className='cards'>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  )
}

export default HomePage