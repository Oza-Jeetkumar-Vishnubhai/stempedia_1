import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export default function ComponentA() {
  return (
    <div className='componentA'>
      <ComponentB />
      <ComponentC />
    </div>
  )
}
