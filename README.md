# React Color Palette Generator

For this project, you will use React to build an app that suggests colors that can be used together, like [Coolors.co](https://coolors.co/). The user can choose a color palette, and then the app will suggest five colors that work well together. The user can also generate a new color palette, and see the hex code for each color.

## Getting Started

Plan out your application, focusing on the features you want your user to be able to use. This project intentionally gives you a lot of latitude in how you design and build your application, so take some time to think about how you want your user to interact with your application.

What will your application do, specifically? There are a lot of ways your color palette generator can work and look, so it's a good idea to make those specific decisions before you start coding.

This project does not include any wireframes: you will have to design the UI yourself and decide what components you will need to build.

Create your React app with [Vite](https://vitejs.dev/guide/). You are also welcome to use a framework like [Next.js](https://nextjs.org/) or [Remix](https://remix.run/).

## Requirements

The application should provide options to generate colors randomly or based on specific color theory rules (e.g., complementary, analogous, triadic). In addition to generating colors automatically, you should allow users to input their own colors or color values. The application should provide a color picker or input field to allow users to select or enter colors.

Your color palette should by default provide 5 colors, but users should be able to specify a different number of colors using a slider or input field.

Users should be able to adjust the generated colors by modifying their hue, saturation, and brightness values. The application should provide some way in the UI to make these adjustments, like sliders, buttons, input fields, or other controls. Check out Coolors and other color palette generators for inspiration.

Users should be able to save the generated color palettes for future reference. You should use local storage for this.

Users should be able to copy color values for each color in the palette in a format usable in code (for example, as a hex value). You could optionally provide color values in multiple formats, including RGB or HSL.

## Resources you can use

How you generate the colors and handle color in the UI is up to you. Some resources to consider:

- [The Color API](https://www.thecolorapi.com/)
- [chroma.js](https://gka.github.io/chroma.js/)
- [TinyColor](https://github.com/bgrins/TinyColor)

Here are some options for color pickers:

- [React Color](https://casesandberg.github.io/react-color/)
- [React Colorful](https://omgovich.github.io/react-colorful/)
- [React Color Picker](https://react-color-picker.vercel.app/)

## 🌶️ Spicy Options

- Write your own color algorithms. Here are some references to help.
    - [Calculating Color: Dynamic Color Theming with Pure CSS](https://una.im/css-color-theming/)
    - [Color Theory for Designers, part 3: Creating Your Own Color Palettes](https://www.smashingmagazine.com/2010/02/color-theory-for-designer-part-3-creating-your-own-color-palettes/)
    - [Colors are Math: How they match — and how to build a Color Picker](https://dev.to/madsstoumann/colors-are-math-how-they-match-and-how-to-build-a-color-picker-4ei8)
    - [A Nerd's Guide to Color on the Web](https://css-tricks.com/nerds-guide-color-web/)
- Allow the user to lock one or more colors in the palette so that they won't change when the user generates a new color palette.
- Provide export options for the color palettes. For example, you could allow users to export the color palette as CSS code, or as a JSON file.
- Provide a way for users to select lighter or darker versions of one color in the palette. For example, if the user has a color palette with a dark blue, you could provide a way to generate or select a lighter version of that blue.
- Let users check the contrast of text colors on a background color. [Color contrast is important for accessibility](https://www.a11yproject.com/posts/what-is-color-contrast/).
