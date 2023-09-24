import React from 'react'
import { Outlet } from 'react-router-dom'
import  Question  from './Question'

const Quiz = ({title, data}) => {
  return (
    <section>
      <div>
        {title ? title : 'Title'}
      </div>

      <Question data={data}/>
    </section>
  )
}

export default Quiz