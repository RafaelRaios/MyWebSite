import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { demo, demoAsk, queries, techQuery, type Query } from '../content'
import '../styles/demo.css'

const KEYWORDS = /\b(SELECT|FROM|WHERE|AND|OR|LIKE|AS|UNION ALL|IS NOT NULL|NULL|ORDER BY|DESC|ASC)\b/g

type WindowState = 'open' | 'minimized' | 'maximized' | 'closed'

function highlight(line: string) {
  const parts: ReactNode[] = []
  let last = 0
  for (const m of line.matchAll(KEYWORDS)) {
    if (m.index! > last) parts.push(line.slice(last, m.index))
    parts.push(
      <span className="kw" key={m.index}>
        {m[0]}
      </span>,
    )
    last = m.index! + m[0].length
  }
  parts.push(line.slice(last))
  return parts
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function QueryDemo() {
  const [active, setActive] = useState(0)
  const [typed, setTyped] = useState(0)
  const [lines, setLines] = useState(0)
  const [rows, setRows] = useState(0)
  const [win, setWin] = useState<WindowState>('open')
  // Bumped whenever the window comes back, so the replay starts over.
  const [run, setRun] = useState(0)
  const [custom, setCustom] = useState<Query | null>(null)
  const [draft, setDraft] = useState('')

  const q = custom ?? queries[active]
  const sqlLines = useMemo(() => q.sql.split('\n'), [q])
  const visible = win === 'open' || win === 'maximized'

  useEffect(() => {
    if (!visible) return
    if (prefersReducedMotion()) {
      setTyped(q.question.length)
      setLines(sqlLines.length)
      setRows(q.rows.length)
      return
    }
    setTyped(0)
    setLines(0)
    setRows(0)
    const timers: number[] = []
    let t = 300
    for (let i = 1; i <= q.question.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), t))
      t += 28
    }
    t += 350
    for (let i = 1; i <= sqlLines.length; i++) {
      timers.push(window.setTimeout(() => setLines(i), t))
      t += 160
    }
    t += 300
    for (let i = 1; i <= q.rows.length; i++) {
      timers.push(window.setTimeout(() => setRows(i), t))
      t += 120
    }
    return () => timers.forEach(clearTimeout)
  }, [q, sqlLines, visible, run])

  useEffect(() => {
    if (win !== 'maximized') return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setWin('open')
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [win])

  function ask(e: FormEvent) {
    e.preventDefault()
    const query = techQuery(draft)
    if (query.label) setCustom(query)
  }

  function reopen() {
    setWin('open')
    setRun((n) => n + 1)
  }

  if (win === 'closed') {
    return (
      <div className="demo-closed">
        <span>query.sql was closed.</span>
        <button type="button" className="pick" onClick={reopen}>
          Reopen the demo
        </button>
      </div>
    )
  }

  const typing = typed < q.question.length

  return (
    <>
      {win === 'maximized' && <div className="demo-backdrop" onClick={() => setWin('open')} />}
      <figure className="demo" data-state={win} aria-label="Text-to-SQL demo">
        <div className="demo-bar">
          <div className="lights">
            <button type="button" className="light light-close" aria-label="Close demo" onClick={() => setWin('closed')}>
              <span aria-hidden="true">×</span>
            </button>
            <button
              type="button"
              className="light light-min"
              aria-label={win === 'minimized' ? 'Restore demo' : 'Minimize demo'}
              onClick={() => (win === 'minimized' ? reopen() : setWin('minimized'))}
            >
              <span aria-hidden="true">−</span>
            </button>
            <button
              type="button"
              className="light light-max"
              aria-label={win === 'maximized' ? 'Exit full screen' : 'Full screen'}
              onClick={() => {
                if (win === 'minimized') setRun((n) => n + 1)
                setWin(win === 'maximized' ? 'open' : 'maximized')
              }}
            >
              <span aria-hidden="true">+</span>
            </button>
          </div>
          <span className="demo-title">rafael.db — query.sql</span>
        </div>

        {visible && (
          <div className="demo-body">
            <div className="demo-picks" role="group" aria-label="Pick a question">
              {queries.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  className="pick"
                  aria-pressed={!custom && i === active}
                  onClick={() => {
                    setCustom(null)
                    setActive(i)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <form className="demo-ask" onSubmit={ask}>
              <label className="sr-only" htmlFor="demo-ask-input">
                {demoAsk.label}
              </label>
              <span className="demo-ask-prompt" aria-hidden="true">
                ?
              </span>
              <input
                id="demo-ask-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={demoAsk.placeholder}
                maxLength={30}
                autoComplete="off"
                spellCheck={false}
              />
              <button type="submit" className="pick" disabled={!draft.trim()}>
                {demoAsk.button}
              </button>
            </form>

            <p className="demo-question">
              <span className="sr-only">{q.question}</span>
              <span aria-hidden="true">
                {q.question.slice(0, typed)}
                <span className={typing ? 'caret' : 'caret caret-idle'} />
              </span>
            </p>

            <pre className="demo-sql" aria-label="Generated SQL">
              <code>
                {sqlLines.map((line, i) => (
                  <span key={i} className="sql-line" data-shown={i < lines}>
                    {highlight(line)}
                    {'\n'}
                  </span>
                ))}
              </code>
            </pre>

            <div className="demo-result">
              <table>
                <thead>
                  <tr>
                    {q.columns.map((c) => (
                      <th key={c} scope="col">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {q.rows.map((r, i) => (
                    <tr key={r.join()} data-shown={i < rows}>
                      {r.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="demo-count" data-shown={rows === q.rows.length}>
                {q.rows.length} rows
              </p>
            </div>

            <figcaption>{demo.caption}</figcaption>
          </div>
        )}
      </figure>
    </>
  )
}
