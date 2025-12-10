'use client'

import React from 'react'

/**
 * MODULE 4: Project Rules (Teaching Copilot Your Style)
 *
 * This page helps you define, test, and refine your Copilot rules.
 * Copilot reads `.github/copilot-instructions.md` and follows your preferred coding patterns automatically.
 *
 * This module is RULES-FOCUSED and uses AGENT MODE tasks (bigger, goal-driven prompts).
 * No "suggestions" training here — you'll direct Copilot to scaffold real components/features that must follow your rules.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type LoginCredentials = {
  email: string
  password: string
}

interface NotificationBadgeProps {
  count: number
  maxCount?: number
  size?: 'sm' | 'md' | 'lg'
  ariaLabel?: string
}

interface ProgressBarProps {
  value: number
  label?: string
  ariaLabel?: string
}

interface ModalDialogProps {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

// ============================================================================
// COMPONENT DEFINITIONS
// ============================================================================

const LoginForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const fd = new FormData(form)
    const creds: LoginCredentials = {
      email: String(fd.get('email') ?? ''),
      password: String(fd.get('password') ?? ''),
    }

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
    if (submitBtn) {
      submitBtn.disabled = true
      const prevText = submitBtn.textContent
      submitBtn.textContent = 'Signing in...'
      setTimeout(() => {
        alert(`Demo sign-in for ${creds.email}`)
        submitBtn.disabled = false
        submitBtn.textContent = prevText
        form.reset()
      }, 800)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Sign in to your account</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-describedby="email-help"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
          <p id="email-help" className="text-xs text-gray-500 mt-1">
            We'll never share your email.
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            aria-describedby="password-help"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter at least 8 characters"
          />
          <p id="password-help" className="text-xs text-gray-500 mt-1" role="note">
            Minimum 8 characters.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60"
            aria-label="Sign in"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={() => alert('Password reset flow (demo)')}
            className="text-sm text-blue-600 hover:underline ml-4"
            aria-label="Forgot password"
          >
            Forgot?
          </button>
        </div>
      </form>
    </div>
  )
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  maxCount = 99,
  size = 'md',
  ariaLabel,
}) => {
  const display = count > maxCount ? `${maxCount}+` : String(count)

  const sizeClasses =
    size === 'sm'
      ? 'text-xs px-2 h-5 min-w-[1.25rem]'
      : size === 'lg'
      ? 'text-sm px-3 h-7 min-w-[1.75rem]'
      : 'text-sm px-2.5 h-6 min-w-[1.5rem]'

  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={ariaLabel ?? `${display} notifications`}
      className={`inline-flex items-center justify-center rounded-full bg-red-600 text-white font-semibold ${sizeClasses}`}
    >
      {display}
    </span>
  )
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, ariaLabel }) => {
  const percent = React.useMemo(() => Math.max(0, Math.min(100, Math.round(value))), [value])

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm text-gray-600">{percent}%</span>
        </div>
      )}

      <div className="w-full bg-gray-200 rounded-md h-3 overflow-hidden">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-label={ariaLabel ?? label ?? `Progress ${percent}%`}
          style={{ width: `${percent}%` }}
          className="h-full bg-blue-600 transition-all duration-300"
        />
      </div>
    </div>
  )
}

const ModalDialog: React.FC<ModalDialogProps> = ({ open, onClose, title, children }) => {
  const overlayRef = React.useRef<HTMLDivElement | null>(null)
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
    return
  }, [open])

  React.useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus()
    }
  }, [open])

  if (!open) return null

  const onOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      onMouseDown={onOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      aria-hidden={false}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className="bg-white w-full max-w-lg rounded-lg shadow-lg ring-1 ring-black/5"
      >
        <div className="flex items-start justify-between p-4 border-b">
          {title ? (
            <h3 id="modal-title" className="text-lg font-semibold text-gray-800">
              {title}
            </h3>
          ) : (
            <span />
          )}
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="ml-4 inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05 5.05 3.636 10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

const ModalExample = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])

  return (
    <div className="mt-2">
      <div className="flex items-center space-x-2">
        <button
          onClick={open}
          className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          Open Modal
        </button>

        <button
          onClick={() => alert('Another action')}
          className="px-3 py-2 rounded-md border text-gray-700"
        >
          Another action
        </button>
      </div>

      <ModalDialog open={isOpen} onClose={close} title="Example Modal">
        <p className="text-sm text-gray-700">
          This modal demonstrates open/close state, a visible close button, overlay click-to-close,
          and Escape handling.
        </p>

        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={close}
            className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              alert('Confirmed (demo)')
              close()
            }}
            className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </ModalDialog>
    </div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Module4Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 4: Project Rules</h1>
          <p className="text-gray-600">
            Teach Copilot to follow your coding voice and style (Agent Mode)
          </p>
        </header>

        {/* LESSON 4.1 - Create Rules File */}
        <section className="bg-white p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.1 - Setting Up Your Rules File</h2>
          <p className="text-gray-700 mb-4">
            Your project rules live in <code>.github/copilot-instructions.md</code>. Once created,
            Copilot automatically uses these instructions whenever you write or edit code in this
            repo.
          </p>

          <div className="bg-gray-50 p-4 rounded border text-sm text-gray-800 mb-4">
            <p className="font-semibold mb-2">Recommended rules:</p>
            <pre className="bg-white p-4 rounded border text-sm text-gray-800 overflow-x-auto">
              {`# Copilot Instructions

- Use React functional components with arrow functions.
- Write TypeScript types or interfaces for component props and state.
- Style with Tailwind CSS; avoid inline styles.
- Keep components small, clean, and modular; extract helpers if a function grows large.
- Add concise comments for non-obvious logic.
- Prefer accessibility-first HTML (semantic elements; label interactive controls).
`}
            </pre>
          </div>

          <p className="text-gray-700">
            Save your rules file, then move on to the next section to validate that Copilot follows
            them in Agent Mode.
          </p>
        </section>

        {/* LESSON 4.2 - Test Rules with Agent Mode */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-blue-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.2 - Testing Your Rules (Agent Mode)
          </h2>
          <p className="text-gray-700 mb-4">
            Use the practice area below to direct Copilot (Agent Mode) to scaffold real features.
            Each task should naturally follow your rules: arrow functions, TypeScript types,
            Tailwind classes, and minimal, purposeful comments.
          </p>

          <div className="border-2 border-blue-400 rounded p-4 bg-blue-50">
            <h3 className="font-semibold mb-2 text-gray-800">Practice Area - Agent Tasks</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add a comment below and run the task with Copilot (Agent Mode):
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              <li>
                <code>
                  Scaffold a LoginForm with email, password, and submit button. Client-side
                  validation, Tailwind styling, accessible labels.
                </code>
              </li>
              <li>
                <code>
                  Build a ProfileCard with avatar image, name, bio, and a Contact button. Keep
                  layout responsive and concise.
                </code>
              </li>
              <li>
                <code>
                  Create a PrimaryButton component (props: children, onClick, type?). Apply our
                  standard Tailwind button style.
                </code>
              </li>
              <li>
                <code>
                  Implement a simple SearchBar with input, clear button, and debounced onChange
                  callback (300ms).
                </code>
              </li>
            </ul>

            <p className="text-sm text-gray-600 mb-2">Expected (based on your rules):</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Arrow-function components</li>
              <li>TypeScript props/interfaces</li>
              <li>Tailwind classes (no inline styles)</li>
              <li>Small, focused structure + brief comments for non-obvious logic</li>
              <li>Accessible markup for inputs and controls</li>
            </ul>

            <LoginForm />
          </div>
        </section>

        {/* LESSON 4.3 - Consistency Across Multiple Components */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-green-400">
          <h2 className="text-2xl font-semibold mb-4">
            Lesson 4.3 - Consistency Across Components
          </h2>
          <p className="text-gray-700 mb-4">
            Generate multiple components and verify that Copilot keeps your rules consistent across
            different feature shapes.
          </p>

          <div className="border-2 border-green-400 rounded p-4 bg-green-50">
            <p className="text-sm text-gray-700 mb-4">Agent tasks to try one-by-one:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
              <li>
                <code>
                  Create a NotificationBadge (props: count, maxCount?) that displays 99+ when over
                  max.
                </code>
              </li>
              <li>
                <code>
                  Create a ProgressBar (props: value 0-100, label?). Include accessible markup for
                  screen readers.
                </code>
              </li>
              <li>
                <code>
                  Create a ModalDialog (props: open, onClose, title). Include a close button and
                  focus trap note in comments.
                </code>
              </li>
              <li>
                <code>
                  Create a DataTable shell (columns prop, rows prop). Responsive table layout with
                  Tailwind utilities.
                </code>
              </li>
            </ul>

            <p className="text-sm text-gray-700">
              After each generation, check for rule adherence (arrow functions, typed props,
              Tailwind rhythm, minimal comments). If anything drifts, adjust{' '}
              <code>.github/copilot-instructions.md</code> and retry the task.
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Messages</span>
              <NotificationBadge count={3} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Alerts</span>
              <NotificationBadge count={120} maxCount={99} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Tasks</span>
              <NotificationBadge count={42} size="lg" />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <ProgressBar label="Upload" value={18} />
            <ProgressBar label="Processing" value={64} />
            <ProgressBar label="Finalizing" value={100} />

            <ModalExample />
          </div>
        </section>

        {/* LESSON 4.4 - Refining and Expanding Rules */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-purple-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.4 - Refining and Expanding Rules</h2>
          <p className="text-gray-700 mb-4">
            As your project grows, evolve your rules with specific, reusable patterns so Agent Mode
            drafts match your voice without reminders.
          </p>

          <p className="text-gray-700 mb-4">Examples you can add to your rules file:</p>
          <pre className="bg-gray-50 p-4 rounded border text-sm text-gray-800 overflow-x-auto mb-4">
            {`- Primary button style: 'px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60'.
- Form inputs: use label + id + aria-describedby; include error text with role="alert".
- Components over ~25 lines: extract helpers; keep render paths simple and readable.
- Prefer composition over prop drilling; create small utilities/hooks for repeated logic.
`}
          </pre>

          <p className="text-gray-700">
            Keep the file updated as your standards change. Copilot will follow the latest version
            across all Agent Mode tasks.
          </p>
        </section>

        {/* SUMMARY */}
        <section className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Define once, follow everywhere.</strong> Copilot reads your rules
              automatically.
            </li>
            <li>
              <strong>Direct with Agent Mode.</strong> Use bigger tasks to see your rules applied
              in realistic code.
            </li>
            <li>
              <strong>Refine as you go.</strong> When you see drift, clarify the rule and retry.
            </li>
            <li>
              <strong>Keep it modular.</strong> Small components + typed props + Tailwind rhythm =
              consistent output.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}