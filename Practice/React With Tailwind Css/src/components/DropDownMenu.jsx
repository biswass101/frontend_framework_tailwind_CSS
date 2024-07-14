import React from 'react'

const DropDownMenu = ({dropPos, setDropPos}) => {
    // console.log(dropPos.l, dropPos.t)
  return (
    <div style={dropPos} className={`w-28 goru rounded-md`}>
        <div className='relative bg-transparent h-4 w-28'>
            <div className='absolute right-[10px] bottom-[-12px] rotate-45 bg-slate-300 h-6 w-6'></div>
        </div>
        <ul onClick={() => {
            setDropPos({})
        }} className=' listtt bg-slate-300 ml-4 p-2 rounded-md'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default DropDownMenu