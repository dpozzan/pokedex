import Link from 'next/link'
import React from 'react'
import ProductCard from '../components/ProductCard'

interface User {
    id: string,
    name: string
}

const UsersPage = async () => {

  const resp = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store"});
  const users: User[] = await resp.json()

  return (
    <div>

        <h1>UsersPage</h1>

        {users.map(user => <p key={user.id}>{user.name}</p>)}

        <ProductCard></ProductCard>
        
        <Link href="/">Home</Link>
        <Link href="/users/new">New User</Link>
    </div>

  )
}

export default UsersPage