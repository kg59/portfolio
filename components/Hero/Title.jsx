import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function createIcons(icon) {
    if (icon != undefined) {
        return (
            <div className="hidden md:table-cell flex-row">
                <div><FontAwesomeIcon icon={icon} className="hero-star" size="4x" /></div>
            </div>
        )
    } else {
        return;
    }
}

export default function Title({ icon, name, sub }) {
    return (
        <div className="hero-box">
            {createIcons(icon)}
            <div className="hero-name">
                <span>{name}</span>
                <div className="hero-sub">
                    {sub}
                </div>
                {createIcons(icon)}
            </div>
        </div>
    )
}
