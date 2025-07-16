import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  { name: 'Liana', userName: 'lia', isFollowing: true },
  { name: 'Juana', userName: 'juana', isFollowing: false },
  { name: 'Tere', userName: 'tere', isFollowing: true }
]

export function App() { 
  return (
    <section className="App">
      {
      users.map(user => {
        const { name, userName, isFollowing } = user
        return (
        <TwitterFollowCard 
        userName={userName}
        initialIsFollowing={isFollowing}
        key={userName}
        >
        
      </TwitterFollowCard>
      )
      })
    }
    </section>   
  )
}
