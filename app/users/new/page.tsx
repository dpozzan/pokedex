import Link from 'next/link'
import React from 'react'

const NewUserPage = () => {
  return (
    <div>
        <h1>NewUserPage</h1>
        <Link href="/users">Users</Link>
    </div>
  )
}

export default NewUserPage