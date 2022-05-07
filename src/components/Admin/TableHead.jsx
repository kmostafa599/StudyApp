import React from 'react'

export default function TableHead() {
    return (
        <thead>
            <tr>
                <th
                    scope="col"
                    className="px-2 py-5 text-left text-[13px] font-medium text-gray-400 uppercase tracking-wider"
                >
                    #
                </th>
                <th
                    scope="col"
                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                >
                    Name
                </th>
                <th
                    scope="col"
                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                >
                    City
                </th>
                <th
                    scope="col"
                    className="px-6 py-5 text-left text-[13px] font-medium text-gray-400 capitalize tracking-wider"
                >
                    Email
                </th>
                
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                </th>
            </tr>
        </thead>
    )
}
