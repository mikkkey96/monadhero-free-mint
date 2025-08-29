'use client'

import { useState, useEffect } from 'react'

const HEROES = [
  {
    id: 1,
    name: "Brave Hero",
    icon: "🛡️", 
    color: "#10b981",
    description: "Defender of the blockchain"
  },
  {
    id: 2,
    name: "Epic Hero", 
    icon: "⚡",
    color: "#fbbf24",
    description: "Master of smart contracts"
  },
  {
    id: 3,
    name: "Legendary Hero",
    icon: "🦸‍♂️",
    color: "#7c3aed", 
    description: "Ultimate blockchain warrior"
  }
]

export default function Home() {
  const [selectedHero, setSelectedHero] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const selectedHeroData = HEROES.find(h => h.id === selectedHero)!

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 10px 0' }}>
          🦸‍♂️ MonadHero
        </h1>
        <p style={{ fontSize: '16px', opacity: '0.9' }}>
          Mint your free Hero NFT badge on Monad
        </p>
      </div>

      {/* Hero Selection */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Choose Your Hero
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {HEROES.map(hero => (
            <div
              key={hero.id}
              onClick={() => setSelectedHero(hero.id)}
              style={{
                background: selectedHero === hero.id 
                  ? `linear-gradient(135deg, ${hero.color}, ${hero.color}dd)`
                  : 'rgba(255,255,255,0.1)',
                border: selectedHero === hero.id 
                  ? `2px solid ${hero.color}`
                  : '1px solid rgba(255,255,255,0.2)',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>
                {hero.icon}  
              </div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>
                {hero.name}
              </h3>
              <p style={{ margin: '0', fontSize: '14px', opacity: '0.8' }}>
                {hero.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Hero Display */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '30px',
        borderRadius: '20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '15px' }}>
          {selectedHeroData.icon}
        </div>
        <h2 style={{ margin: '0 0 10px 0' }}>
          {selectedHeroData.name}
        </h2>
        <p style={{ margin: '0 0 25px 0', opacity: '0.8' }}>
          {selectedHeroData.description}
        </p>
        
        <button
          style={{
            background: `linear-gradient(45deg, ${selectedHeroData.color}, ${selectedHeroData.color}dd)`,
            border: 'none',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '15px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🎖️ Coming Soon - Free Mint!
        </button>
        
        <p style={{ margin: '15px 0 0 0', fontSize: '14px', opacity: '0.7' }}>
          ✅ Wallet integration & smart contract deployment in progress
        </p>
      </div>
    </div>
  )
}
