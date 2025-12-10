'use client'

import { useState } from 'react'

/**
 * MODULE 2: Copilot Chat - Core Agent Features
 *
 * This file contains exercises for:
 * - Fixing broken code (Edit Mode)
 * - Adding new features (Agent Mode)
 * - Writing tests (Agent + Edit Mode)
 * - Freeform conversations (Ask Mode)
 */

export default function Module2Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 2: Core Agent Features</h1>
          <p className="text-gray-600">Fix code, add features, and write tests with Copilot</p>
        </header>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🔧 Lesson 2.1: Fix Broken Code</h2>
            <BrokenCalculator />
          </section>

          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">➕ Lesson 2.2: Add a Feedback Form</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to create a form component below:</p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧪 Lesson 2.3: Write Tests</h2>
            <TestableComponent />
          </section>

          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">💬 Lesson 2.4: Freeform Conversations</h2>
            <UserDashboard />
          </section>

          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Challenge: Pricing Card</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to build a pricing card component:</p>
          </section>
        </div>
      </div>
    </div>
  )
}

function BrokenCalculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  const calculate = () => {
    const sum = Number(num1) + Number(num2)
    setResult(sum)
  }

  const divide = () => {
    const n1 = Number(num1)
    const n2 = Number(num2)
    if (n2 === 0) {
      alert('Cannot divide by zero')
      return
    }
    setResult(n1 / n2)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Number 1"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Number 2"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="space-x-2">
        <button
          onClick={calculate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={divide}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Divide
        </button>
      </div>

      <p className="text-lg">Result: {result}</p>
    </div>
  )
}

function TestableComponent() {
  const [price, setPrice] = useState(100)
  const [discount, setDiscount] = useState(10)

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight the calculateDiscount function and use /tests to generate test cases
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Discount %"
          value={discount}
          onChange={e => setDiscount(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-lg">Final Price: ${calculateDiscount(price, discount)}</p>
      </div>
    </div>
  )
}

function calculateDiscount(price: number, discountPercent: number): number {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return price
  }
  const discountAmount = (price * discountPercent) / 100
  return price - discountAmount
}

function UserDashboard() {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      lastLogin: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      lastLogin: '2024-01-10',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'active',
      lastLogin: '2024-01-16',
    },
  ])

  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = users.filter(user => {
    const matchesFilter = filter === 'all' || user.status === filter
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight this component and ask Copilot about performance, security, or refactoring
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">All Users</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="space-y-2">
        {filteredUsers.map(user => (
          <div key={user.id} className="p-4 border rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {user.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Last login: {user.lastLogin}</p>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 py-8">No users found</p>
      )}
    </div>
  )
}