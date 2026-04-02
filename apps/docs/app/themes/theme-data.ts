export type ThemeToken = {
  label: string;
  token: string;
  value: string;
};

export type ThemeDefinition = {
  slug: "keture" | "minimal" | "slate" | "space";
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
    slug: "keture",
    name: "Keture",
    href: "/themes/keture",
    overviewDescription: "Bold, dark, and warm with Keture brand-led energy.",
    previewDescription: "Black surfaces, warm gradients, and red-orange accents give the system a strong branded identity.",
    detailDescription: [
      "Keture is the brand theme derived from the visual language in the keture-site reference project.",
      "It uses Manrope, dark surfaces, and a warm gold-to-red accent family to bring the site identity into the UI component system."
    ],
    wrapperClassName: "kt-theme-keture",
    palette: [
      { label: "Primary", token: "--kt-color-primary", value: "#ff401b" },
      { label: "Background", token: "--kt-color-bg", value: "#000000" },
      { label: "Surface", token: "--kt-color-surface", value: "#120807" },
      { label: "Text", token: "--kt-color-text", value: "#fff4ec" },
      { label: "Accent", token: "--kt-color-accent", value: "#ffb000" }
    ],
    typography: {
      family: '"Manrope", "Inter", "Segoe UI", sans-serif',
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
      { label: "Small", token: "--kt-radius-sm", value: "0.5rem" },
      { label: "Medium", token: "--kt-radius-md", value: "0.75rem" },
      { label: "Large", token: "--kt-radius-lg", value: "1rem" },
      { label: "XL", token: "--kt-radius-xl", value: "1.5rem" }
    ],
    shadows: [
      { label: "Small", token: "--kt-shadow-sm", value: "0 10px 24px rgba(0, 0, 0, 0.26)" },
      { label: "Medium", token: "--kt-shadow-md", value: "0 18px 44px rgba(255, 64, 27, 0.12)" },
      { label: "Large", token: "--kt-shadow-lg", value: "0 30px 72px rgba(255, 30, 38, 0.16)" }
    ],
    glow: "rgba(255, 144, 0, 0.18)",
    surfaceColor: "#120807"
  },
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
    slug: "slate",
    name: "Slate",
    href: "/themes/slate",
    overviewDescription: "Dark, muted, and flat with restrained GitHub-like contrast.",
    previewDescription: "Muted surfaces, low radius, and flatter depth keep the system utilitarian and focused.",
    detailDescription: [
      "Slate is a dark utility-focused theme derived from the visual language in the imso-app reference project.",
      "It uses GitHub-like muted surfaces, a cyan primary, low-radius edges, and flatter depth for internal tools and dashboards."
    ],
    wrapperClassName: "kt-theme-slate",
    palette: [
      { label: "Primary", token: "--kt-color-primary", value: "#0098c4" },
      { label: "Background", token: "--kt-color-bg", value: "#1c2128" },
      { label: "Surface", token: "--kt-color-surface", value: "#2d333b" },
      { label: "Text", token: "--kt-color-text", value: "#f5f5f5" },
      { label: "Accent", token: "--kt-color-accent", value: "#0098c4" }
    ],
    typography: {
      family: '"Segoe UI", "Inter", sans-serif',
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
      { label: "Small", token: "--kt-radius-sm", value: "0.125rem" },
      { label: "Medium", token: "--kt-radius-md", value: "0.25rem" },
      { label: "Large", token: "--kt-radius-lg", value: "0.375rem" },
      { label: "XL", token: "--kt-radius-xl", value: "0.5rem" }
    ],
    shadows: [
      { label: "Small", token: "--kt-shadow-sm", value: "none" },
      { label: "Medium", token: "--kt-shadow-md", value: "0 0 0 1px rgba(68, 76, 86, 0.24)" },
      { label: "Large", token: "--kt-shadow-lg", value: "0 0 0 1px rgba(68, 76, 86, 0.3)" }
    ],
    glow: "rgba(0, 152, 196, 0.12)",
    surfaceColor: "#2d333b"
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
