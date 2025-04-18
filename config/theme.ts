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
  }
} as const;