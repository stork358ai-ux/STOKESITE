'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="STORK Home">
          <span>STORK</span>
        </Link>

        <button
          className="site-header__toggle"
          aria-expanded={open}
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav${open ? ' site-nav--open' : ''}`} aria-label="global">
          <ul>
            <li><Link href="/#services" onClick={() => setOpen(false)}>サービス</Link></li>
            <li><Link href="/#industries" onClick={() => setOpen(false)}>業界</Link></li>
            <li><Link href="/#process" onClick={() => setOpen(false)}>導入プロセス</Link></li>
            <li><Link href="/#insights" onClick={() => setOpen(false)}>インサイト</Link></li>
            <li><Link href="/#faq" onClick={() => setOpen(false)}>FAQ</Link></li>
            <li><Link href="/#company" onClick={() => setOpen(false)}>会社概要</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
