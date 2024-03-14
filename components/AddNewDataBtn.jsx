import React from 'react'
import Link from 'next/link'

const AddNewDataBtn = (props) => {
    const {text} = props

    return (
        <Link href={`add_${text.toLowerCase()}`} passHref className='px-6 py-4 border border-1 border-black rounded-full font-bold text-base'>Add {text}</Link>
    )
}
export default AddNewDataBtn;