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
  },
  whatIs: {
    sectionId: "what-is",
    grid: {
      columns: "grid grid-cols-1 md:grid-cols-3 gap-8 items-center",
      gap: "gap-8",
    },
    content: {
      span: "md:col-span-2"
    },
    logo: {
      size: {
        width: "w-48",
        height: "h-48"
      }
    }
  },
  faq: {
    sectionId: "faq",
    accordion: {
      type: "single",
      collapsible: true
    }
  }
} as const;
