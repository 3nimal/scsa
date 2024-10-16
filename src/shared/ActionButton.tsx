import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className='text-blue-950 font-bold text-lg bg-secondary-500 px-10 py-2 hover:bg-yellow-300 hover:text-blue-600'
        onClick={ () => setSelectedPage(SelectedPage.ContactUs) }
        href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton