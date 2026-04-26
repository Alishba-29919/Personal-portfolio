import { useEffect, useRef, useState } from 'react'

export default function Custompointer() {
  const ringRef = useRef({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    // Ring smoothly follow kare
    let animId
    function animRing() {
      ringRef.current.x += (pos.x - ringRef.current.x) * 0.12
      ringRef.current.y += (pos.y - ringRef.current.y) * 0.12
      setRingPos({ ...ringRef.current })
      animId = requestAnimationFrame(animRing)
    }
    animId = requestAnimationFrame(animRing)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId)
    }
  }, [pos.x, pos.y])

  return (
    <>
      {/* Dot */}
      <div
        className="fixed w-5 h-5 bg-orange-400 rounded-full pointer-events-none z-[9999]"
        style={{ left: pos.x, top: pos.y, transform: 'translate(-50%,-50%)' }}
      />
      {/* Ring */}
      <div
        className="fixed w-12 h-12 border border-orange-400/50 rounded-full pointer-events-none z-[9998]"
        style={{ left: ringPos.x, top: ringPos.y, transform: 'translate(-50%,-50%)' }}
      />
    </>
  )
}