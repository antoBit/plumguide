import React from 'react'
import '../scss/_info.scss'
import mock from '../mockData'

export default function Info() {
    const { name, features, location, directions, stairs } = mock

    return (
        <div className="info">
            <h1>{name}</h1>
            <div className="features">
                {features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))}
            </div>
            <div className="location">
                <p>
                    <i className="icon-location" />
                    {location}
                </p>
                <p>
                    <i className="icon-travel-bus" /> {directions}
                </p>
                {stairs ? (
                    <p>
                        <i className="icon-stairs" /> Stairs
                    </p>
                ) : null}
            </div>
        </div>
    )
}
