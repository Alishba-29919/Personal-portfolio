import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], animId
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.size = Math.random() * 1.8 + 0.3
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.pulse = Math.random() * Math.PI * 2
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += 0.02
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        const op = 0.2 + Math.abs(Math.sin(this.pulse)) * 0.35
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249,115,22,${op})`
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      const count = Math.floor((W * H) / 14000)
      for (let i = 0; i < count; i++) particles.push(new Particle())
    }
    init()
    window.addEventListener('resize', init)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(249,115,22,${(1 - d / 100) * 0.1})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // mouse connections
      particles.forEach(p => {
        const d = Math.hypot(p.x - mouseX, p.y - mouseY)
        if (d < 140) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(249,115,22,${(1 - d / 140) * 0.25})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}