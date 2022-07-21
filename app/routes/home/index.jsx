import React, { useState, useEffect } from 'react'

import { useLoaderData } from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'

export async function loader() {
    try{
        let response = await fetch('http://localhost:3000/api/users/', {
            method: 'GET',
        });
        return response.json()
    } catch(err) {
        console.error(err);
        return(err)
    }
}

const index = () => {
    
    let users = useLoaderData()

    console.log(users)


    return (
        <div>
            {users[0].name}
        </div>
    )
}

export default index