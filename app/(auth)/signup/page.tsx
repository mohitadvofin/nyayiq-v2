'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [designation, setDesignation] = useState('Advocate')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name, designation },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div style={styles.layout}>
        <div style={styles.formSide}>
          <Link href="/" style={styles.logo}>
            <div style={styles.logoMark}>N</div>
            Nyay<span style={{ color: 'var(--orange-deep)', fontStyle: 'italic' }}>IQ</span>
          </Link>
          <div style={styles.successBox}>
            <div style={styles.successIcon}>✉</div>
            <h1 style={styles.title}>Check your <em style={{ color: 'var(--orange-deep)' }}>inbox.</em></h1>
            <p style={styles.subtitle}>
              We&apos;ve sent a verification link to <strong>{email}</strong>.
              Click the link to activate your account.
            </p>
            <p style={{ fontFamily: 'EB Garamond, serif', color: 'var(--ink-3)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem' }}>
              Didn&apos;t receive it? Check your spam folder.
            </p>
          </div>
        </div>
        <div style={styles.visualSide}>
          <VisualPanel />
        </div>
      </div>
    )
  }

  return (
    <div style={styles.layout}>
      <div style={styles.formSide}>
        <div style={styles.formHeader}>
          <Link href="/" style={styles.logo}>
            <div style={styles.logoMark}>N</div>
            Nyay<span style={{ color: 'var(--orange-deep)', fontStyle: 'italic' }}>IQ</span>
          </Link>
          <Link href="/login" style={styles.switchLink}>
            Already have an account? <strong style={{ color: 'var(--orange-deep)' }}>Log in</strong>
          </Link>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.kicker}>◆ GET STARTED</div>
          <h1 style={styles.title}>Create your <em style={{ color: 'var(--orange-deep)' }}>account.</em></h1>
          <p style={styles.subtitle}>Start with 5 free AI summaries every month. No credit card required.</p>

          {error && (
            <div style={styles.errorBox}>{error}</div>
          )}

          <form onSubmit={handleSignup}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name *</label>
              <input style={styles.input} type="text" value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Adv. Ramesh Kumar" required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address *</label>
              <input style={styles.input} type="email" value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password *</label>
              <input style={styles.input} type="password" value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Minimum 8 characters" required minLength={8} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Designation</label>
              <select style={styles.input} value={designation}
                onChange={e => setDesignation(e.target.value)}>
                <option>Advocate</option>
                <option>Chartered Accountant</option>
                <option>Tax Consultant</option>
                <option>Company Secretary</option>
                <option>In-house Counsel</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? 'Creating account...' : 'Create account →'}
            </button>
          </form>
        </div>

        <div style={styles.formFooter}>
          By signing up you agree to our{' '}
          <Link href="/terms" style={{ color: 'var(--orange-deep)' }}>Terms</Link> and{' '}
          <Link href="/privacy" style={{ color: 'var(--orange-deep)' }}>Privacy Policy</Link>
        </div>
      </div>
      <div style={styles.visualSide}>
        <VisualPanel />
      </div>
    </div>
  )
}

function VisualPanel() {
  return (
    <div style={{
      background: 'var(--ink)', color: 'var(--cream)',
      padding: '3rem', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', height: '100%', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase' }}>
        ◆ BUILT BY A PRACTICING TAX ADVOCATE
      </div>
      <blockquote style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.2, fontStyle: 'italic' }}>
        The law doesn&apos;t lack good judgements. It lacks a good way to{' '}
        <em style={{ color: 'var(--gold)' }}>find and understand them quickly.</em>
        <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '0.95rem', marginTop: '1.5rem', color: 'var(--cream-3)', fontStyle: 'normal' }}>
          <span style={{ fontFamily: 'Fraunces, serif', color: 'var(--gold)', fontStyle: 'italic', display: 'block', marginBottom: '0.2rem' }}>Adv. Mohit Jain</span>
          Founder · 10+ years · Delhi HC, ITAT
        </div>
      </blockquote>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,236,217,0.15)' }}>
        {[['500+', 'Judgements'], ['27', 'Courts'], ['0.8s', 'Query time']].map(([n, l]) => (
          <div key={l}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: '2rem', color: 'var(--gold)', fontWeight: 500 }}>{n}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: 'var(--cream-3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  layout: { minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1.2fr' },
  formSide: { padding: '3rem', display: 'flex', flexDirection: 'column', background: 'var(--cream)' },
  visualSide: { minHeight: '100vh' },
  formHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' },
  logo: { fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: '1.35rem', textDecoration: 'none', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '0.6rem' },
  logoMark: { width: 30, height: 30, background: 'var(--orange-deep)', borderRadius: 5, display: 'grid', placeItems: 'center', color: 'var(--cream)', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 700, fontSize: '0.9rem' },
  switchLink: { fontFamily: 'Inter Tight, sans-serif', fontSize: '0.88rem', color: 'var(--ink-2)', textDecoration: 'none' },
  formContainer: { maxWidth: 420, width: '100%', margin: '2rem auto' },
  kicker: { fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--orange-deep)', letterSpacing: '0.25em', marginBottom: '1rem' },
  title: { fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '2.8rem', lineHeight: 1, letterSpacing: '-0.025em', marginBottom: '0.75rem' },
  subtitle: { fontFamily: 'EB Garamond, serif', fontSize: '1.05rem', color: 'var(--ink-2)', fontStyle: 'italic', marginBottom: '2rem' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--ink-2)', marginBottom: '0.5rem', fontWeight: 500 },
  input: { width: '100%', padding: '0.85rem 1rem', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 4, fontFamily: 'EB Garamond, serif', fontSize: '1rem', color: 'var(--ink)', outline: 'none' },
  submitBtn: { width: '100%', padding: '1rem 1.5rem', background: 'var(--orange-deep)', color: 'var(--cream)', border: 'none', borderRadius: 4, fontFamily: 'Inter Tight, sans-serif', fontSize: '0.95rem', fontWeight: 500, cursor: 'pointer', marginTop: '0.5rem' },
  errorBox: { background: 'rgba(160,62,46,0.1)', border: '1px solid var(--red)', borderRadius: 4, padding: '0.85rem 1rem', fontFamily: 'EB Garamond, serif', color: 'var(--red)', marginBottom: '1.25rem', fontSize: '0.95rem' },
  successBox: { maxWidth: 420, margin: '4rem auto', textAlign: 'center' as const },
  successIcon: { width: 88, height: 88, borderRadius: '50%', background: 'rgba(184,138,62,0.12)', border: '1px solid var(--gold)', display: 'grid', placeItems: 'center', margin: '0 auto 2rem', fontFamily: 'Fraunces, serif', fontSize: '2.5rem', color: 'var(--gold)' },
  formFooter: { marginTop: 'auto', paddingTop: '2rem', textAlign: 'center' as const, fontFamily: 'EB Garamond, serif', fontSize: '0.85rem', color: 'var(--ink-3)' },
}
