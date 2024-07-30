import React from 'react'
import SideBar from '../Components/SideBar'
import Body from '../Components/Body'

function page() {
  return (
    <div className='flex'>
     <SideBar/>
     <Body/>
    </div>
  )
}

export default page