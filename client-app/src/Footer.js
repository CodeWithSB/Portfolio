import React from 'react'

export default function Footer() {
    return (
        <div className="w-full flex justify-center items-center bg-white p-6 text-green-500 font-semibold dark:bg-gray-900">
            <p> &copy; John Doe, {(new Date()).getFullYear()}</p>
        </div>
    )
}
