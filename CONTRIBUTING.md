# Development Guidelines

## Component Implementation Rules

1. **ALWAYS Use Official Examples**
   - When installing shadcn components, NEVER modify the example implementation
   - Copy and paste the exact code from the official examples
   - Example URL must be referenced in comments: `@see https://ui.shadcn.com/view/styles/new-york/sidebar-07`

2. **No Custom Modifications Without Approval**
   - Do not create custom layouts or content
   - Do not modify the provided component structure
   - Do not add additional features not present in the example

3. **Installation Process**
   ```bash
   # 1. Always use the exact command from documentation
   npx shadcn@latest add [component-name]

   # 2. If example provides specific files, use them exactly
   # 3. Keep the same file structure as the example
   ```

4. **File Structure**
   - Keep the same file names as the example
   - Keep the same component hierarchy
   - Keep the same import structure

5. **Component Usage**
   - Use components exactly as shown in the example
   - Keep the same props and className values
   - Keep the same state management approach

## Example Reference
For each component implementation, add a comment at the top of the file:

```typescript
/**
 * @implementation https://ui.shadcn.com/view/styles/new-york/sidebar-07
 * @version shadcn@latest
 * DO NOT MODIFY: This is an exact implementation from the example
 */
```

## Verification Checklist
Before committing changes:
- [ ] Component installed using exact command from docs
- [ ] Code matches example implementation exactly
- [ ] No custom modifications added
- [ ] Reference URL added in comments
- [ ] File structure matches example 