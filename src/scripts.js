const root = document.documentElement;

const button = document.querySelector("button");
const display = document.querySelector("#display");
const colorInput = document.querySelector("[type='color']");
const palettes = document.querySelectorAll("#palette div");

const tools = document.querySelectorAll("[type='range']");

// Get the 'numbered color variables' out of 'paletteComputedStyles'
const paletteComputedStyles = getComputedStyle(palettes[0]);

palettes.forEach((palette, index) => {
  palette.style.setProperty(
    "background-color",
    paletteComputedStyles.getPropertyValue(`--${index}`)
  );
});
