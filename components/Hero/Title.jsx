"use client";

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

export default function Title({ icon, name, sub, id }) {
    return (
        <div className="hero-title-box" id={id ? id : name}>
            {createIcons(icon)}
            <div className="hero-name">
                <h3 className="hero-title-text">{name}</h3>
                <p className="hero-sub">
                    {sub}
                </p>
                {createIcons(icon)}
            </div>
        </div>
    )
}
