'use client'

import { useState } from 'react'

/**
 * MODULE 4: Rules & Context
 *
 * This file teaches you how to leverage:
 * - Repo context (existing patterns Copilot learns from)
 * - Project rules (.github/copilot-instructions.md)
 * - Consistent coding style across your project
 */

export default function Module4Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 4: Rules & Context</h1>
          <p className="text-gray-600">Teach Copilot your coding style and preferences</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 📖 LESSON 4.1 - EXERCISE: REPO CONTEXT
           * ==========================================
           *
           * ✅ TODO: CREATE A COMPONENT SIMILAR TO EXISTING ONES
           *
           * Instructions:
           * 1. Look at the ExampleCard component below
           * 2. In the practice area, add a comment:
           *    // Create a component similar to ExampleCard
           * 3. Let Copilot suggest code that mirrors the existing style
           * 4. Notice how it picks up on:
           *    - Tailwind classes
           *    - Arrow function syntax
           *    - Component structure
           *    - Naming patterns
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">📖 Lesson 4.1: Repo Context</h2>
            <p className="text-gray-600 mb-4">
              Copilot learns from your existing code. See how it mirrors the ExampleCard style:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ExampleCard
                title="Example 1"
                description="This is an example card"
                badge="Featured"
              />
              <ExampleCard title="Example 2" description="Another example card" badge="New" />
            </div>

            <div className="border-2 border-blue-500 rounded p-4 bg-blue-50">
              <h3 className="font-semibold mb-2">🎯 Practice Area:</h3>
              <p className="text-sm text-gray-600 mb-4">
                Add a comment below asking Copilot to create a similar card component
              </p>

              {/* 
              
              ⬇️⬇️⬇️ CREATE A SIMILAR COMPONENT HERE ⬇️⬇️⬇️
              
              Example comment to start:
              // Create a ProductCard component similar to ExampleCard but with price and image
              
              */}
            </div>
          </section>

          {/* ==========================================
           * 📋 LESSON 4.2 - EXERCISE: PROJECT RULES
           * ==========================================
           *
           * ✅ TODO: CHECK AND UPDATE COPILOT INSTRUCTIONS
           *
           * Instructions:
           * 1. Open .github/copilot-instructions.md in your workspace
           * 2. Review the rules already defined
           * 3. Add your own preferences (e.g., "Always add loading states")
           * 4. Save the file
           * 5. Come back here and create a new component
           * 6. Notice how Copilot follows your rules automatically!
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">📋 Lesson 4.2: Project Rules</h2>
            <p className="text-gray-600 mb-4">
              Define your coding style once in .github/copilot-instructions.md
            </p>

            <div className="bg-gray-100 p-4 rounded mb-4">
              <h3 className="font-semibold mb-2">Current Rules Include:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Always use arrow functions</li>
                <li>Use React functional components with hooks</li>
                <li>Style with Tailwind CSS</li>
                <li>Add accessibility features</li>
                <li>Include TypeScript types</li>
              </ul>
            </div>

            <div className="border-2 border-green-500 rounded p-4 bg-green-50">
              <h3 className="font-semibold mb-2">🎯 Test Your Rules:</h3>
              <p className="text-sm text-gray-600 mb-4">
                Create a new component below and watch Copilot follow your rules
              </p>

              {/* 
              
              ⬇️⬇️⬇️ CREATE A COMPONENT FOLLOWING YOUR RULES ⬇️⬇️⬇️
              
              Try asking for:
              - "Create a LoginForm component"
              - "Build a UserProfile card"
              - "Make a SearchBar with filters"
              
              Copilot should automatically:
              - Use arrow functions
              - Apply Tailwind classes
              - Add TypeScript types
              - Include aria-labels
              
              */}
            </div>
          </section>

          {/* ==========================================
           * 🔄 LESSON 4.3 - EXERCISE: CONSISTENCY CHECK
           * ==========================================
           *
           * ✅ TODO: CREATE MULTIPLE COMPONENTS AND CHECK CONSISTENCY
           *
           * Instructions:
           * 1. Ask Copilot to create 2-3 different components below
           * 2. Compare their style, structure, and patterns
           * 3. Notice how they all follow your rules consistently
           * 4. If something doesn't match, update your rules file
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🔄 Lesson 4.3: Consistency Matters</h2>
            <p className="text-gray-600 mb-4">
              Create multiple components and see how rules keep them consistent
            </p>

            <div className="border-2 border-purple-500 rounded p-4 bg-purple-50">
              <h3 className="font-semibold mb-2">🎯 Consistency Test:</h3>
              <p className="text-sm text-gray-600 mb-4">Create 3 different components below:</p>

              <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                <li>A notification badge</li>
                <li>A progress bar</li>
                <li>A modal dialog</li>
              </ul>

              <p className="text-sm text-gray-600">
                They should all use similar patterns because of your rules!
              </p>

              {/* 
              
              ⬇️⬇️⬇️ CREATE YOUR COMPONENTS HERE ⬇️⬇️⬇️
              
              */}
            </div>
          </section>

          {/* ==========================================
           * 💡 BONUS: CONTEXT-AWARE FEATURES
           * ==========================================
           *
           * ✅ TODO: EXTEND AN EXISTING COMPONENT
           *
           * Instructions:
           * 1. Highlight the ExampleCard component above
           * 2. Ask Copilot: "Create an enhanced version with hover effects and animations"
           * 3. Notice how it maintains the original structure while adding features
           * 4. This shows Copilot understands both your code AND your rules
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">💡 Bonus: Context-Aware Features</h2>
            <p className="text-gray-600 mb-4">
              Extend existing components while maintaining consistency
            </p>

            <div className="border-2 border-yellow-500 rounded p-4 bg-yellow-50">
              <h3 className="font-semibold mb-2">🎯 Enhancement Challenge:</h3>
              <p className="text-sm text-gray-600 mb-4">
                Take ExampleCard and enhance it with new features
              </p>

              {/* 
              
              ⬇️⬇️⬇️ CREATE ENHANCED VERSION HERE ⬇️⬇️⬇️
              
              Ideas:
              - Add hover animations
              - Include an icon
              - Add a click handler
              - Make it dismissible
              
              */}
            </div>
          </section>
        </div>

        {/* Key Takeaways */}
        <section className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🎓 Key Takeaways</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold mr-2">✓</span>
              <span>Copilot learns from your existing code patterns (repo context)</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">✓</span>
              <span>Define rules once in .github/copilot-instructions.md</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">✓</span>
              <span>Rules ensure consistency across all generated code</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">✓</span>
              <span>You save time by not repeating style preferences</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">✓</span>
              <span>Copilot becomes a teammate that knows your coding voice</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

/* ==========================================
 * EXAMPLE CARD COMPONENT
 * This demonstrates the coding style for this project
 * ========================================== */

interface ExampleCardProps {
  title: string
  description: string
  badge?: string
}

const ExampleCard = ({ title, description, badge }: ExampleCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {badge && (
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">{badge}</span>
        )}
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

/* ==========================================
 * 📝 NOTES FOR STUDENTS
 * ==========================================
 *
 * Understanding Context and Rules:
 *
 * 1. REPO CONTEXT:
 *    - Copilot reads open files and nearby code
 *    - It learns your naming conventions
 *    - It mimics your component structure
 *    - It picks up on your styling approach
 *
 * 2. PROJECT RULES:
 *    - Defined in .github/copilot-instructions.md
 *    - Applied automatically to all suggestions
 *    - Can be updated anytime
 *    - Works across your entire team
 *
 * 3. WHY THIS MATTERS:
 *    - Saves time (no repeating instructions)
 *    - Ensures consistency
 *    - Makes code reviews easier
 *    - Helps onboard new developers
 *
 * 4. BEST PRACTICES:
 *    - Keep rules clear and specific
 *    - Update rules as your style evolves
 *    - Share rules with your team
 *    - Review Copilot's suggestions for rule compliance
 *
 * ========================================== */
