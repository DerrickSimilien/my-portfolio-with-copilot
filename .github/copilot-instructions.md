# GitHub Copilot Instructions for FES Course

## Code Style Guidelines

### General Principles

- Always use arrow functions for components and utilities
- Use React functional components with hooks (no class components)
- Prefer TypeScript for type safety
- Add concise comments for non-trivial logic only
- Keep functions small and focused (single responsibility)

### Styling

- Style with Tailwind CSS classes exclusively
- Avoid inline styles unless absolutely necessary
- Use consistent spacing and color schemes
- Ensure responsive design (mobile-first approach)

### React Patterns

- Use `useState` and `useEffect` hooks appropriately
- Implement proper TypeScript types for props and state
- Handle loading and error states explicitly
- Prefer composition over prop drilling

### Accessibility

- Include aria-labels for interactive elements
- Ensure keyboard navigation support
- Use semantic HTML elements
- Provide alt text for images

### Performance

- Memoize expensive calculations with `useMemo`
- Optimize re-renders with `useCallback` when needed
- Avoid inline function definitions in JSX when performance matters

### Testing

- Write clear, descriptive test names
- Test user behavior, not implementation details
- Include edge cases and error scenarios

## Project-Specific Notes

- This is an educational repository for learning GitHub Copilot
- Code should be clear and demonstrative, optimized for learning
- Include helpful comments that explain the "why" not just the "what"

## Component-Specific Patterns

### Buttons

- Primary: `px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60`
- Always include aria-label for accessibility
- Use disabled:opacity-60 for disabled states

### Modal Dialogs

- Always include Escape key handling
- Lock body scroll when modal is open
- Auto-focus the close button when opened
- Use overlay click-to-close with proper event targeting

### Form Inputs

- Standard styling: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`
- Always pair with <label> using htmlFor and id
- Include aria-describedby for helper text
- Use role="alert" for error messages

### Progress Indicators

- Use useMemo for percentage calculations
- Include full ARIA progressbar attributes (aria-valuemin, aria-valuemax, aria-valuenow)
- Document when inline styles are necessary (e.g., dynamic widths)
