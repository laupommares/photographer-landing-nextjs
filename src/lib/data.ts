export type ProcessStep = {
    id: number
    title: string
    description: string
    icon: string
  }
  
  export const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Consultation",
      description:
        "We discuss your vision, location ideas, and styling to ensure everything aligns perfectly with your story.",
      icon: "chat_bubble",
    },
    {
      id: 2,
      title: "The Session",
      description:
        "A relaxed, guided shooting experience where we capture genuine moments and authentic connections.",
      icon: "camera_alt",
    },
    {
      id: 3,
      title: "Delivery",
      description:
        "Your high-resolution, professionally edited gallery is delivered online, ready to print and share.",
      icon: "collections",
    },
  ]