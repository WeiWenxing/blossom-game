export const theme = {
  header: {
    colors: {
      background: "bg-background/95",
      border: "border-b",
      text: "text-foreground",
      hover: "hover:text-primary",
    },
    layout: {
      height: "h-16",
      position: "sticky top-0",
      zIndex: "z-50",
      blur: "backdrop-blur supports-[backdrop-filter]:bg-background/60",
    },
    spacing: {
      container: "container",
      nav: "space-x-4 lg:space-x-6",
      search: "space-x-2",
    },
  },
  footer: {
    colors: {
      background: "bg-muted",
      border: "border-t",
      text: "text-foreground",
      mutedText: "text-muted-foreground",
      hover: "hover:text-primary",
    },
    layout: {
      padding: "py-8",
      container: "container mx-auto px-4",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    },
    spacing: {
      sectionTitle: "mb-4",
      linkList: "space-y-2",
    },
  }
} as const;
