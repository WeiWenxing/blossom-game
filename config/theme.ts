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
  },
  layout: {
    section: {
      spacing: "mb-24" // 使用更大的间距 mb-24 (6rem) 替代原来的 mb-16 (4rem)
    }
  },
  howToPlay: {
    colors: {
      title: "text-foreground",
      stepNumber: "bg-primary text-primary-foreground",
      cardBorder: "border border-border",
      description: "text-muted-foreground"
    },
    layout: {
      container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      card: "h-full",
      imageContainer: "aspect-video overflow-hidden rounded-lg"
    },
    spacing: {
      section: "py-12",
      title: "mb-8",
      content: "p-6"
    }
  }
} as const;
