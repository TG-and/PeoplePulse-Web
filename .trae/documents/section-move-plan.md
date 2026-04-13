# Section Movement Plan for BlogPost Page

## Project Overview
This plan outlines the process of moving a section element to the bottom of the BlogPost page while maintaining layout integrity and responsive behavior.

## Current Structure Analysis

The BlogPost component currently has the following section structure:

1. **Header Section** (lines 1459-1503)
   - Blog post metadata (category, date, read time)
   - Title
   - Author information

2. **Featured Image Section** (lines 1506-1520)
   - Blog post featured image

3. **Content Section** (lines 1523-1624)
   - Main article content
   - Tags
   - Share buttons
   - Sidebar (newsletter signup, related posts)

## User Request
The user wants to move a `section` element to the bottom of the current page.

## Implementation Plan

### Option 1: Move Featured Image Section to Bottom

#### 1.1 Reorder Sections
- **File**: `/src/pages/BlogPost.tsx`
- **Action**: Move the Featured Image section to be the last section
- **Steps**:
  1. Cut the Featured Image section (lines 1506-1520)
  2. Paste it after the Content section (line 1624)
  3. Adjust spacing if needed

### Option 2: Move Header Section to Bottom

#### 2.1 Reorder Sections
- **File**: `/src/pages/BlogPost.tsx`
- **Action**: Move the Header section to be the last section
- **Steps**:
  1. Cut the Header section (lines 1459-1503)
  2. Paste it after the Content section (line 1624)
  3. Adjust spacing if needed

### Option 3: Move Content Section to Bottom (Already in Place)

The Content section is already positioned at the bottom of the page.

## Technical Considerations

1. **Layout Integrity**: Ensure the layout remains intact after the move
2. **Responsive Design**: Maintain proper responsive behavior across devices
3. **Visual Consistency**: Keep the same styling and design elements
4. **Performance**: No impact on page load times
5. **Accessibility**: Ensure the page remains accessible

## Testing Plan

1. **Layout Test**: Verify the section is correctly positioned at the bottom
2. **Responsive Test**: Test across mobile, tablet, and desktop
3. **Visual Test**: Ensure all elements display correctly
4. **Functionality Test**: Verify all interactive elements work properly

## Files to Modify

- `/src/pages/BlogPost.tsx` - Reorder section elements

## Expected Outcome

- The specified section will be positioned at the bottom of the BlogPost page
- All existing functionality and styling will be preserved
- The layout will be responsive and display correctly across all devices
- No visual issues or overlaps will be present
