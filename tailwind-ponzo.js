const plugin = require("tailwindcss/plugin");

function getSpacing(spacingType) {
  // create grid based on 16px
  const spacing = {};
  // create some minimal values below division of 16
  const minimalValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24, 32];
  for (i = 0; i < minimalValues.length; i++) {
    let minimalValue = minimalValues[i];
    if (spacingType === "rem") {
      spacing[minimalValue] = minimalValue / 16 + "rem";
    } else {
      spacing["r" + minimalValue] = "var(--spacing-" + minimalValue + ")";
    }
  }
  for (i = 1; i < 976 / 16; i++) {
    const grid = i * 16;
    if (spacingType === "rem") {
      spacing[grid] = i + "rem";
    } else {
      // rfs value
      spacing["r" + grid] = "var(--spacing-" + grid + ")";
    }
  }
  return spacing;
}

const gridSpacing = () => {
  // create grid based on 16px
  const spacingRem = getSpacing("rem");
  const spacingRfs = getSpacing("rfs");
  // both spacing
  let spacingBoth = {
    ...spacingRem,
    ...spacingRfs,
  };
  return spacingBoth;
};

function gridSizeComponent() {
  return plugin(function ({ addComponents }) {
    const rootGrid = {};
    const spacingVars = getSpacing("rem");
    Object.entries(spacingVars).forEach(([key, value]) => {
      rootGrid["--spacing-" + key] = "rfs(" + value + ")";
    });
    const root = {
      ":root": rootGrid,
    };
    addComponents(root);
  });
}

module.exports = { gridSpacing, gridSizeComponent };
