```markdown
# Design System Documentation: Kinetic Editorial

## 1. Overview & Creative North Star

### The Creative North Star: "The Digital Curator"
This design system is built to move away from the "template" aesthetic of generic SaaS platforms. It is inspired by the precision of high-fashion editorial layouts and the fluid motion of modern architectural walkthroughs. We do not just "place" content; we curate it within a space that feels expansive, intentional, and alive.

The system utilizes **Asymmetric Balance**. By leveraging extreme whitespace and non-traditional alignment, we create a sense of momentum. Elements should feel like they are floating in a high-vacuum environment—frictionless and premium. The high-contrast interplay between `surface` (#131313) and `on_surface` (#e2e2e2), punctuated by the "Electric Blue" `primary_container` (#2e5bff), establishes an immediate authority.

---

## 2. Colors & Surface Architecture

The palette is rooted in deep obsidian tones, designed to make typography and blue accents "pop" with neon-like clarity.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container_low` to denote a new context.
2.  **Negative Space:** Using the spacing scale to create "islands" of content.
3.  **Tonal Transitions:** Subtle shifts in container depth.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials.
*   **Base:** `surface` (#131313) - The infinite canvas.
*   **Secondary Context:** `surface_container_low` (#1b1b1b) - For large section backgrounds.
*   **Interactive/Card Layer:** `surface_container_high` (#2a2a2a) - For elevated content blocks.
*   **Nesting:** When placing a card inside a section, the card must always be at least one "tier" higher or lower than its parent to maintain visible separation without lines.

### The "Glass & Gradient" Rule
To elevate the "Electric Blue" beyond a flat accent:
*   **Signature Textures:** Use a subtle linear gradient for primary CTAs (from `primary` #b8c3ff to `primary_container` #2e5bff) at a 135° angle.
*   **Glassmorphism:** Floating elements (like navigation bars or tooltips) should use `surface_container` colors with an 80% opacity and a `20px` backdrop-blur to create a "frosted glass" effect.

---

## 3. Typography: Editorial Authority

Typography is the primary vehicle for the brand’s voice. We use **Inter** across all scales, but we vary its application to create a rhythmic hierarchy.

*   **Display (display-lg, display-md):** These are the "Hero" moments. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create a bold, block-like architectural feel.
*   **Headlines (headline-lg):** Used for section starts. These should always have generous leading to allow the "breathability" the brand requires.
*   **Body (body-lg):** The workhorse. Set in `on_surface_variant` (#c4c5d9) to reduce eye strain while maintaining a high-end, dimmed aesthetic.
*   **Labels (label-md):** Used for overlines or micro-copy. Always use `uppercase` with 0.1em letter-spacing to denote "technical precision."

---

## 4. Elevation & Depth

Hierarchy is achieved through **Tonal Layering**, mimicking how light interacts with dark surfaces.

*   **The Layering Principle:** Avoid shadows for static elements. Instead, place a `surface_container_highest` (#353535) element on a `surface` background to create a "lifted" effect.
*   **Ambient Shadows:** For "floating" components (Modals, Dropdowns), use extra-diffused shadows:
    *   *Blur:* 40px - 60px
    *   *Opacity:* 8%
    *   *Color:* Use a tinted version of `primary_container` (#2e5bff) to simulate the blue accent light bleeding into the shadows.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility (e.g., in high-density data views), use `outline_variant` (#434656) at **15% opacity**. A 100% opaque border is a failure of the system.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary_container` (#2e5bff) with `on_primary_container` (#efefff) text. Roundedness: `md` (0.375rem). No border.
*   **Secondary:** `surface_container_highest` (#353535) background with `primary` (#b8c3ff) text.
*   **Tertiary:** Transparent background with `on_surface` text and an animated underline that expands from the center on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Structure:** Use vertical padding from the spacing scale (e.g., 32px or 48px) to separate list items. 
*   **Hover State:** Items should transition from `surface` to `surface_container_low` on hover, accompanied by a subtle 4px horizontal slide to indicate interactivity.

### Input Fields
*   **Style:** Minimalist. Only a bottom "Ghost Border" (`outline_variant` at 20%).
*   **Focus State:** The bottom border transforms into a 2px solid `primary` (#b8c3ff) line with a subtle outer glow using the "Ambient Shadow" logic.

### Signature Component: The "Perspective Grid"
To reinforce the agency feel, use a background pattern of `outline_variant` dots spaced at 64px intervals, visible only on the `surface` layer. This provides a "blueprint" feel to the minimalism.

---

## 6. Do's and Don'ts

### Do
*   **Do** embrace extreme asymmetry. Align a headline to the left and the body text to a 60% offset grid to create visual tension.
*   **Do** use "Electric Blue" (`primary_container`) sparingly. It is a laser, not a paint bucket. Use it to draw the eye to exactly one action per screen.
*   **Do** ensure all transitions are "smooth" (use `cubic-bezier(0.23, 1, 0.32, 1)` for all animations).

### Don't
*   **Don't** use pure white (#FFFFFF) for body text. Use `on_surface` (#e2e2e2) to maintain the premium dark-mode depth.
*   **Don't** use standard "Drop Shadows." If a layer needs to pop, use Tonal Layering.
*   **Don't** use 1px dividers. If you feel you need a line, use more whitespace instead.
*   **Don't** crowd the edges. Maintain a minimum "safe zone" of 5vw (viewport width) on all layout edges.```