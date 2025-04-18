export const layout = {
  header: {
    isVisible: true,
    maxWidth: "max-w-sm",
    searchEnabled: true,
    logoSize: "text-2xl",
  },
  footer: {
    isVisible: true,
    sections: {
      about: true,
      quickLinks: true,
      social: true,
      legal: true,
    }
  }
} as const;
