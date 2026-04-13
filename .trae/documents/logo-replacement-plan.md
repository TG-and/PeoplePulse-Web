# Logo Replacement Plan

## Project Overview
This plan outlines the process of replacing the current text-based logo in the Navbar with the provided image logo.

## Current Implementation

The current logo is implemented in `/src/sections/Navbar.tsx` (lines 86-93):

```jsx
<Link to="/" className="flex items-center gap-2">
  <div className="w-10 h-10 bg-gradient-to-br from-[#0080ff] to-[#00c6ff] rounded-xl flex items-center justify-center">
    <span className="text-white font-bold text-xl">P</span>
  </div>
  <span className="text-xl font-bold text-[#0a0a0a]">
    PeoplePulse<span className="bg-gradient-to-r from-[#0080ff] to-[#00c6ff] bg-clip-text text-transparent font-extrabold">AI</span>
  </span>
</Link>
```

## New Logo

**File Path**: `/Users/tonygong/Documents/PeplePuls/Kimi_Agent_peoplepulse官网/app/微信图片_20260317121824_107_227.png`

## Implementation Plan

### 1.1 Copy Image to Public Directory
- **Action**: Copy the logo image to the public directory
- **Steps**:
  1. Create the public directory if it doesn't exist
  2. Copy the image file to `public/logo.png`
  3. Verify the image is accessible

### 1.2 Modify Navbar Component
- **File**: `/src/sections/Navbar.tsx`
- **Action**: Replace the text-based logo with the image logo
- **Steps**:
  1. Replace the current logo div with an img tag
  2. Set the src to `/logo.png`
  3. Add appropriate alt text
  4. Maintain the same styling and hover effects

### 1.3 Test the Changes
- **Action**: Verify the logo displays correctly
- **Steps**:
  1. Rebuild the project
  2. Test the logo on different pages
  3. Verify responsive behavior
  4. Ensure the logo links to the homepage

## Technical Considerations

1. **File Size**: Ensure the image is optimized for web
2. **Accessibility**: Add proper alt text for screen readers
3. **Responsive Design**: Ensure the logo scales appropriately on different devices
4. **Performance**: The image should load quickly
5. **Consistency**: Maintain the same hover effects and animation

## Testing Plan

1. **Visual Test**: Verify the logo displays correctly on the homepage
2. **Functionality Test**: Ensure the logo links to the homepage
3. **Responsive Test**: Test on mobile, tablet, and desktop devices
4. **Browser Test**: Verify compatibility across different browsers

## Files to Modify

- `/src/sections/Navbar.tsx` - Replace the logo implementation
- `public/logo.png` - Add the new logo image

## Expected Outcome

- The new image logo will be displayed in the top-left corner of the Navbar
- The logo will link to the homepage
- Hover effects and animations will be preserved
- The logo will display correctly across all devices
- The logo will load quickly and be accessible
