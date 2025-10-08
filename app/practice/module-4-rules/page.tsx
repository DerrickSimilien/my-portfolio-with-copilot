'use client'

/**
 * MODULE 4: Project Rules (Teaching Copilot Your Style)
 *
 * This page helps you define, test, and refine your Copilot rules.
 * Copilot will read your `.github/copilot-instructions.md` file and follow your preferred coding patterns automatically.
 *
 * Follow each section below to build a consistent Copilot setup.
 */

export default function Module4Practice() {
  return (  
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 4: Project Rules</h1>
          <p className="text-gray-600">Teach Copilot to follow your coding voice and style</p>
        </header>

        {/* LESSON 4.1 — Create Rules File */}
        <section className="bg-white p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.1 — Setting Up Your Rules File</h2>
          <p className="text-gray-700 mb-4">
            Your project rules live in <code>.github/copilot-instructions.md</code>. Once created, Copilot automatically
            uses these instructions whenever you write or edit code in this repo.
          </p>

          <div className="bg-gray-50 p-4 rounded border text-sm text-gray-800 mb-4">
            <p className="font-semibold mb-2">Example rules file:</p>
            <pre className="bg-white p-4 rounded border text-sm text-gray-800 overflow-x-auto">
{`# Copilot Instructions

- Use React functional components with arrow functions.
- Write TypeScript types or interfaces for component props.
- Style with Tailwind CSS; avoid inline styles.
- Keep components small, clean, and modular.
- Add concise comments for any non-obvious logic.
- Use semantic HTML and accessibility labels where possible.`}
            </pre>
          </div>

          <p className="text-gray-700">
            Save your rules file, then move on to the next section to test how Copilot follows them automatically.
          </p>
        </section>

        {/* LESSON 4.2 — Test Rules */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-blue-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.2 — Testing Your Rules</h2>
          <p className="text-gray-700 mb-4">
            Use the area below to test your Copilot rules. Add a comment to prompt Copilot and watch how it respects
            your defined standards.
          </p>

          <div className="border-2 border-blue-400 rounded p-4 bg-blue-50">
            <h3 className="font-semibold mb-2 text-gray-800">Practice Area</h3>
            <p className="text-sm text-gray-600 mb-4">
              Try one of these prompts inside the code editor below:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              <li>// Create a LoginForm component with email, password, and submit button.</li>
              <li>// Build a ProfileCard component with image, name, and bio.</li>
              <li>// Make a PrimaryButton component that follows my Tailwind style.</li>
            </ul>

            <p className="text-sm text-gray-600 mb-2">Expected Copilot behavior:</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Uses arrow functions</li>
              <li>Includes TypeScript types</li>
              <li>Applies Tailwind classes</li>
              <li>Uses concise, meaningful comments</li>
            </ul>

            {/* Practice area for Copilot suggestions */}
          </div>
        </section>

        {/* LESSON 4.3 — Consistency */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-green-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.3 — Consistency Across Components</h2>
          <p className="text-gray-700 mb-4">
            Next, generate multiple components and see if Copilot keeps your patterns consistent.
          </p>

          <div className="border-2 border-green-400 rounded p-4 bg-green-50">
            <p className="text-sm text-gray-700 mb-4">Try generating these:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              <li>// Create a NotificationBadge component with a count and maxCount.</li>
              <li>// Create a ProgressBar with value (0–100) and label prop.</li>
              <li>// Create a ModalDialog with open/close state and close button.</li>
            </ul>

            <p className="text-sm text-gray-700">
              Check whether each component follows your rules: arrow functions, Tailwind, and typed props.
              If not, refine your `.github/copilot-instructions.md` file and retry.
            </p>
          </div>
        </section>

        {/* LESSON 4.4 — Refinement */}
        <section className="bg-white p-6 rounded-lg shadow mb-10 border-l-4 border-purple-400">
          <h2 className="text-2xl font-semibold mb-4">Lesson 4.4 — Refining and Expanding Rules</h2>
          <p className="text-gray-700 mb-4">
            As your project grows, your rules should evolve. Add new conventions when you notice recurring patterns or
            details Copilot gets wrong.
          </p>

          <p className="text-gray-700 mb-4">
            For example, if you find yourself retyping the same button style, add this rule:
          </p>
          <pre className="bg-gray-50 p-4 rounded border text-sm text-gray-800 overflow-x-auto mb-4">
{`- Use 'px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700' for all primary buttons.`}
          </pre>

          <p className="text-gray-700">
            Keep the file updated with new best practices as your team’s style evolves. Copilot will always follow your
            most recent version.
          </p>
        </section>

        {/* SUMMARY */}
        <section className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Define once, follow everywhere.</strong> Copilot reads your rules automatically.</li>
            <li><strong>Keep them short and clear.</strong> Simple, direct language gives consistent output.</li>
            <li><strong>Refine as you go.</strong> Adjust your rules when you see drift.</li>
            <li><strong>Share with your team.</strong> One rules file keeps everyone writing the same way.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}