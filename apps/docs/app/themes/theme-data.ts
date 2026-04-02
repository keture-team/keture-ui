export type ThemeToken = {
  label: string;
  token: string;
  value: string;
};

export type ThemeDefinition = {
  slug: "minimal" | "space";
  name: string;
  href: string;
  overviewDescription: string;
  previewDescription: string;
  detailDescription: string[];
  wrapperClassName?: string;
  palette: ThemeToken[];
  typography: {
    family: string;
    sizes: ThemeToken[];
  };
  spacing: ThemeToken[];
  radius: ThemeToken[];
  shadows: ThemeToken[];
  glow?: string;
  surfaceColor: string;
};

export const themes: ThemeDefinition[] = [
  {
    slug: "minimal",
    name: "Minimal",
    href: "/themes/minimal",
    overviewDescription: "Clean, bright, and balanced for product interfaces.",
    previewDescription: "Light surfaces and restrained contrast keep the system calm and focused.",
    detailDescription: [
      "Minimal is the default design system for Keture UI.",
      "It uses a clear blue primary, soft borders, and light surfaces to stay quiet and usable in product contexts."
    ],
    palette: [
      { label: "Primary", token: "--kt-color-primary", value: "#2563eb" },
      { label: "Background", token: "--kt-color-bg", value: "#f8fafc" },
      { label: "Surface", token: "--kt-color-surface", value: "#ffffff" },
      { label: "Text", token: "--kt-color-text", value: "#0f172a" },
      { label: "Secondary", token: "--kt-color-secondary", value: "#64748b" }
    ],
    typography: {
      family: '"Inter", "Segoe UI", sans-serif',
      sizes: [
        { label: "Small", token: "--kt-font-size-sm", value: "0.875rem" },
        { label: "Medium", token: "--kt-font-size-md", value: "1rem" },
        { label: "Large", token: "--kt-font-size-lg", value: "1.125rem" }
      ]
    },
    spacing: [
      { label: "1", token: "--kt-space-1", value: "0.25rem" },
      { label: "2", token: "--kt-space-2", value: "0.5rem" },
      { label: "3", token: "--kt-space-3", value: "0.75rem" },
      { label: "4", token: "--kt-space-4", value: "1rem" },
      { label: "5", token: "--kt-space-5", value: "1.5rem" },
      { label: "6", token: "--kt-space-6", value: "2rem" },
      { label: "7", token: "--kt-space-7", value: "3rem" },
      { label: "8", token: "--kt-space-8", value: "4rem" }
    ],
    radius: [
      { label: "Small", token: "--kt-radius-sm", value: "0.375rem" },
      { label: "Medium", token: "--kt-radius-md", value: "0.5rem" },
      { label: "Large", token: "--kt-radius-lg", value: "0.75rem" }
    ],
    shadows: [
      { label: "Small", token: "--kt-shadow-sm", value: "0 8px 24px rgba(15, 23, 42, 0.06)" },
      { label: "Medium", token: "--kt-shadow-md", value: "0 16px 40px rgba(15, 23, 42, 0.1)" },
      { label: "Large", token: "--kt-shadow-lg", value: "0 24px 60px rgba(15, 23, 42, 0.14)" }
    ],
    surfaceColor: "#ffffff"
  },
  {
    slug: "space",
    name: "Space",
    href: "/themes/space",
    overviewDescription: "Futuristic, dark, and premium with neon contrast.",
    previewDescription: "Dark surfaces and neon accents create a more premium sci-fi visual tone.",
    detailDescription: [
      "Space is a futuristic dark theme for Keture UI.",
      "It combines deep backgrounds, neon accents, and glow-driven effects while keeping the same component API."
    ],
    wrapperClassName: "kt-theme-space",
    palette: [
      { label: "Primary", token: "--kt-color-primary", value: "#7c5cff" },
      { label: "Background", token: "--kt-color-bg", value: "#060816" },
      { label: "Surface", token: "--kt-color-surface", value: "#0f1730" },
      { label: "Text", token: "--kt-color-text", value: "#ecf3ff" },
      { label: "Accent", token: "--kt-color-accent", value: "#2df6d0" }
    ],
    typography: {
      family: '"Inter", "Segoe UI", sans-serif',
      sizes: [
        { label: "Small", token: "--kt-font-size-sm", value: "0.875rem" },
        { label: "Medium", token: "--kt-font-size-md", value: "1rem" },
        { label: "Large", token: "--kt-font-size-lg", value: "1.125rem" }
      ]
    },
    spacing: [
      { label: "1", token: "--kt-space-1", value: "0.25rem" },
      { label: "2", token: "--kt-space-2", value: "0.5rem" },
      { label: "3", token: "--kt-space-3", value: "0.75rem" },
      { label: "4", token: "--kt-space-4", value: "1rem" },
      { label: "5", token: "--kt-space-5", value: "1.5rem" },
      { label: "6", token: "--kt-space-6", value: "2rem" },
      { label: "7", token: "--kt-space-7", value: "3rem" },
      { label: "8", token: "--kt-space-8", value: "4rem" }
    ],
    radius: [
      { label: "Small", token: "--kt-radius-sm", value: "0.375rem" },
      { label: "Medium", token: "--kt-radius-md", value: "0.75rem" },
      { label: "Large", token: "--kt-radius-lg", value: "1rem" },
      { label: "XL", token: "--kt-radius-xl", value: "1.5rem" }
    ],
    shadows: [
      { label: "Small", token: "--kt-shadow-sm", value: "0 10px 30px rgba(2, 6, 23, 0.45)" },
      { label: "Medium", token: "--kt-shadow-md", value: "0 18px 48px rgba(45, 246, 208, 0.1)" },
      { label: "Large", token: "--kt-shadow-lg", value: "0 28px 72px rgba(124, 92, 255, 0.18)" }
    ],
    glow: "rgba(45, 246, 208, 0.28)",
    surfaceColor: "#0f1730"
  }
];

export function getTheme(slug: ThemeDefinition["slug"]) {
  return themes.find(theme => theme.slug === slug);
}
