import React from 'react'
import './SidebarRow.css'

function SidebarRow({ Icon, title }) {
    return (
        <div className='sidebarRow'>
            {Icon && <Icon />}
            <p className='sidebarRow__title'>{title}</p>
        </div>
    )
}

export default SidebarRow