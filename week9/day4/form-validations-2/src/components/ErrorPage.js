import React from 'react'

export default function ErrorPage() {
    return (
        <div>
            <img src="data:image/png;base64,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" alt="" />
        </div>
    )
}