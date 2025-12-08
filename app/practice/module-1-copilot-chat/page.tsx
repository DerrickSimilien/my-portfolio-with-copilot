'use client'

import React, { useState } from 'react'

// Provide a minimal JSX namespace so TypeScript can recognize intrinsic elements
// (This is a small shim useful when project JSX types are not configured or @types/react is missing)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

/**
 * MODULE 1: Setup & Orientation
 *
 * This file contains exercises for your first interaction with GitHub Copilot.
 * Look for the bold comments below to know where to practice!
 */

export default function Module1Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 1: First Interaction with Copilot</h1>
          <p className="text-gray-600">Practice explaining code and using Copilot Chat</p>
        </header>

        <div className="space-y-8">
          {/* Exercise 1: Simple Component */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 1: Explain Simple Code</h2>
            <SimpleCounter />
          </section>

          {/* Exercise 2: Data Transformation */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 2: Explain Data Flow</h2>
            <DataTransformer />
          </section>

          {/* ==========================================
           * 📚 LESSON 1.3 - EXERCISE 3: EXPLAIN COMPLEX CODE
           * ==========================================
           *
           * ✅ TODO: HIGHLIGHT THE FUNCTION BELOW AND USE /explain
           *
           * Instructions:
           * 1. Highlight the entire ComplexFilter component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /explain
           * 4. Read Copilot's explanation
           * 5. Try follow-up questions like:
           *    - "Explain it as if I'm new to React"
           *    - "List the steps this function performs"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 3: Explain Complex Code</h2>
            <ComplexFilter />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: USE COPILOT SUGGESTIONS HERE
           * ==========================================
           *
           * ✅ TODO: TRY COPILOT SUGGESTIONS HERE
           *
           * Instructions:
           * 1. Uncomment the component below
           * 2. Start typing inside the function body
           * 3. Watch for gray "ghost text" suggestions
           * 4. Press Tab to accept, Esc to dismiss
           * 5. Try Alt/Option + ] or [ to cycle suggestions
           *
           * Example: Type "const [count" and see what Copilot suggests
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a simple component below and experiment with Copilot suggestions
            </p>
            {/* UNCOMMENT AND PRACTICE HERE:
            
            <YourPracticeComponent />
            
            */}
          </section>
        </div>
      </div>
    </div>
  )
}

// Simple counter component for Exercise 1
function SimpleCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <p className="text-lg">Count: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

// Data transformation component for Exercise 2
const DataTransformer: React.FC<{ multiplier?: number }> = ({ multiplier = 2 }) => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const evenNumbers = React.useMemo(() => numbers.filter((n: number) => n % 2 === 0), [numbers])
  const doubledNumbers = React.useMemo(
    () => evenNumbers.map((n: number) => n * multiplier), // Changed from * 2
    [evenNumbers, multiplier]
  ) // Added multiplier to dependencies
  const sum = React.useMemo(
    () => doubledNumbers.reduce((acc: number, n: number) => acc + n, 0),
    [doubledNumbers]
  )

  return (
    <div className="space-y-2">
      <p>
        <strong>Original:</strong> {numbers.join(', ')}
      </p>
      <p>
        <strong>Even numbers:</strong> {evenNumbers.join(', ')}
      </p>
      <p>
        <strong>Doubled numbers:</strong> {doubledNumbers.join(', ')}
      </p>
      <p>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  )
}

const ComplexFilter: React.FC = () => {
  type Product = {
    id: number
    name: string
    price: number
    category: string
  }

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [minPrice, setMinPrice] = useState<number>(0)

  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 3, name: 'Desk', price: 299, category: 'Furniture' },
    { id: 4, name: 'Chair', price: 199, category: 'Furniture' },
    { id: 5, name: 'Monitor', price: 399, category: 'Electronics' },
  ]

  const filteredProducts = React.useMemo(
    () =>
      products
        .filter(product => {
          return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            product.price >= minPrice
          )
        })
        .sort((a, b) => {
          if (sortOrder === 'asc') {
            return a.price - b.price
          }
          return b.price - a.price
        }),
    [products, searchTerm, minPrice, sortOrder]
  )

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded"
          aria-label="Search products"
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMinPrice(Number(e.target.value) || 0)
          }
          className="px-4 py-2 border rounded"
          aria-label="Minimum price"
        />
        <select
          value={sortOrder}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSortOrder(e.target.value as 'asc' | 'desc')
          }
          className="px-4 py-2 border rounded"
          aria-label="Sort order"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} className="border rounded p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <button
              className="mt-3 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              aria-label={`View ${product.name}`}
            >
              View
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  )
}

// Feedback form component with name, email, and message fields

type FeedbackFormState = {
  name: string
  email: string
  message: string
}

// Refactored feedback form broken into small pieces: hook + presentational inputs

const useFeedbackForm = (initial: FeedbackFormState = { name: '', email: '', message: '' }) => {
  const [form, setForm] = useState<FeedbackFormState>(initial)
  const [submitted, setSubmitted] = useState(false)

  // Stable handler to update any input/textarea by name
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setForm(prev => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real app, send form data to server here
  }, [])

  return { form, submitted, handleChange, handleSubmit, setForm, setSubmitted }
}

type InputFieldProps = {
  id: string
  name: keyof FeedbackFormState
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  ariaLabel?: string
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  ariaLabel,
}) => (
  <div>
    <label htmlFor={id} className="block mb-1 font-medium">
      {label}
    </label>
    <input
      id={id}
      name={String(name)}
      type={type}
      className="w-full px-3 py-2 border rounded"
      value={value}
      onChange={onChange}
      required={required}
      aria-label={ariaLabel ?? label}
    />
  </div>
)

type TextAreaWithCountProps = {
  id: string
  name: keyof FeedbackFormState
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  maxLength: number
  rows?: number
}

const TextAreaWithCount: React.FC<TextAreaWithCountProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  maxLength,
  rows = 4,
}) => {
  // Compute remaining chars and color hint
  const remaining = React.useMemo(() => maxLength - value.length, [maxLength, value.length])
  const countColor = React.useMemo(
    () => (remaining <= 20 ? 'text-red-600' : remaining <= 100 ? 'text-yellow-600' : 'text-gray-600'),
    [remaining]
  )

  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={String(name)}
        className="w-full px-3 py-2 border rounded"
        rows={rows}
        value={value}
        onChange={onChange}
        required
        aria-label={label}
        aria-describedby={`${id}-count`}
        maxLength={maxLength}
      />
      <p id={`${id}-count`} className={`mt-1 text-sm ${countColor}`} role="status" aria-live="polite">
        {value.length} / {maxLength} characters
      </p>
    </div>
  )
}

const FeedbackForm: React.FC = () => {
  const MAX_MESSAGE_LENGTH = 500
  const { form, submitted, handleChange, handleSubmit } = useFeedbackForm()

  return (
    <form
      className="space-y-4 max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow"
      onSubmit={handleSubmit}
      aria-label="Feedback form"
      noValidate // Prevent default browser validation
    >
      <h2 className="text-xl font-semibold mb-2">Feedback Form</h2>

      <InputField
        id="name"
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
        required
        ariaLabel="Your name"
        pattern="^[A-Za-z\s]+$" // Regex pattern for name validation
        title="Please enter a valid name (letters and spaces only)." // Tooltip for invalid input
      />

      <InputField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
        required
        ariaLabel="Your email"
        pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" // Regex pattern for email validation
        title="Please enter a valid email address." // Tooltip for invalid input
      />

      <TextAreaWithCount
        id="message"
        name="message"
        label="Message"
        value={form.message}
        onChange={handleChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
        maxLength={MAX_MESSAGE_LENGTH}
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        aria-label="Submit feedback"
      >
        Submit
      </button>

      {submitted && (
        <p className="text-green-600 mt-2" role="status">
          Thank you for your feedback!
        </p>
      )}
    </form>
  )
}

// Pricing card component: title, price, description
const PricingCard: React.FC<{
  title: string
  price: number | string
  description?: string
  featured?: boolean
}> = ({ title, price, description, featured = false }) => {
  // Format numeric prices as USD currency; leave strings as-is
  const formattedPrice = React.useMemo(() => {
    if (typeof price === 'number') {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(price)
    }
    return String(price)
  }, [price])

  return (
    <article
      className={`border rounded-lg p-4 md:p-6 shadow-sm bg-white flex flex-col justify-between h-full transition-transform transform ${
        featured ? 'ring-2 ring-blue-600 md:scale-105' : 'hover:scale-[1.01]'
      }`}
      aria-label={`${title} pricing card ${featured ? '(featured)' : ''}`}
    >
      <div>
        {featured && (
          <span className="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Most Popular
          </span>
        )}

        <header className="mb-3">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </header>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl md:text-3xl font-bold leading-none">{formattedPrice}</span>
          <span className="text-sm md:text-base text-gray-500">/ month</span>
        </div>

        {description && <p className="text-sm md:text-base text-gray-700 mb-6">{description}</p>}
      </div>

      <div>
        <button
          className={`w-full py-3 rounded focus:outline-none focus:ring-2 text-sm md:text-base ${
            featured
              ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300'
          }`}
          aria-label={`Select ${title} plan`}
        >
          Choose plan
        </button>
      </div>
    </article>
  )
}

// Responsive usage example with Pro plan highlighted
const PricingPlans: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PricingCard title="Starter" price={29} description="For individuals" />
      <PricingCard title="Pro" price={79} description="For growing teams" featured={true} />
      <PricingCard title="Enterprise" price="Custom" description="For large organizations" />
    </div>
  </div>
)

/* ==========================================
 * 💡 ADDITIONAL PRACTICE SUGGESTIONS
 * ==========================================
 *
 * After completing the exercises above, try these:
 *
 * 1. Highlight any function and ask: "What are potential bugs here?"
}
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  )
 * 2. Highlight SimpleCounter and ask: "How can I optimize this?"
 * 3. Highlight ComplexFilter and ask: "What accessibility improvements can I make?"
 * 4. Create your own component and use Copilot suggestions to help
 *
 * Remember: The more you interact with Copilot, the better you'll get at
 * prompting it effectively!
 *
 * ========================================== */
