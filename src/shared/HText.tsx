import { ChildProcess } from 'child_process'
import React, { Children } from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1
                className='basis-3/5 font-montserrat text-3xl font-bold text-yellow-500'
            >
                {children}
            </h1>
  )
}

export default HText