import React from 'react'

const QUERY_PARAMS =
    '?max-w=1100&max-h=670&fit=crop&ar=16:9&fm=webp&auto=compress'

export default function Image({ ref, src }) {
    return (
        <img
            ref={ref}
            src={`${src}${QUERY_PARAMS}`}
            width="100%"
            height="100%"
            alt="Listing image"
        />
    )
}
