export interface Society {
    id: string
    name: string
    description: string
    memberCount: number
    president: string
    tags: string[]
    team: TeamMember[]
    events: Event[]
  }
  
  export interface TeamMember {
    id: string
    name: string
    role: string
    avatar: string
  }
  
  export interface Event {
    id: string
    title: string
    date: string
    description: string
    location: string
  }
  
  export interface ChatMessage {
    id: string
    sender: string
    content: string
    timestamp: string
    isCurrentUser: boolean
  }
  
  export const societiesData: Society[] = [
    {
      id: "mathematics",
      name: "Mathematics Society",
      description: "Exploring the beauty of mathematics together",
      memberCount: 87,
      president: "Dr. Alan Turing",
      tags: ["Mathematics", "Problem Solving", "Academic"],
      team: [
        {
          id: "1",
          name: "Dr. Alan Turing",
          role: "President",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "2",
          name: "Sophie Germain",
          role: "Vice President",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "3",
          name: "Emmy Noether",
          role: "Secretary",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "4",
          name: "Carl Friedrich Gauss",
          role: "Treasurer",
          avatar: "/placeholder.svg?height=100&width=100",
        },
      ],
      events: [
        {
          id: "1",
          title: "Math Olympiad Preparation",
          date: "2025-05-15",
          description: "Preparation session for the upcoming Math Olympiad competition",
          location: "Room 101, Mathematics Building",
        },
        {
          id: "2",
          title: "Guest Lecture: Number Theory",
          date: "2025-05-22",
          description: "A fascinating lecture on modern number theory by Prof. Andrew Wiles",
          location: "Main Auditorium",
        },
      ],
    },
    {
      id: "robotics",
      name: "Robotics Club",
      description: "Building the future through robotics and automation",
      memberCount: 64,
      president: "Dr. Rodney Brooks",
      tags: ["Robotics", "Engineering", "AI"],
      team: [
        {
          id: "1",
          name: "Dr. Rodney Brooks",
          role: "President",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "2",
          name: "Fei-Fei Li",
          role: "Vice President",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "3",
          name: "Hiroshi Ishiguro",
          role: "Technical Lead",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "4",
          name: "Cynthia Breazeal",
          role: "Outreach Coordinator",
          avatar: "/placeholder.svg?height=100&width=100",
        },
      ],
      events: [
        {
          id: "1",
          title: "Robot Building Workshop",
          date: "2025-05-18",
          description: "Hands-on workshop for building simple robots",
          location: "Engineering Lab 3",
        },
        {
          id: "2",
          title: "Robotics Competition Prep",
          date: "2025-05-25",
          description: "Preparation for the national robotics competition",
          location: "Robotics Center",
        },
      ],
    },
    {
      id: "enactus",
      name: "Enactus",
      description: "Creating social impact through entrepreneurial action",
      memberCount: 52,
      president: "Maria Rodriguez",
      tags: ["Entrepreneurship", "Social Impact", "Business"],
      team: [
        {
          id: "1",
          name: "Maria Rodriguez",
          role: "President",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "2",
          name: "John Chen",
          role: "Vice President",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "3",
          name: "Priya Sharma",
          role: "Project Manager",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          id: "4",
          name: "David Okonkwo",
          role: "Finance Director",
          avatar: "/placeholder.svg?height=100&width=100",
        },
      ],
      events: [
        {
          id: "1",
          title: "Social Enterprise Workshop",
          date: "2025-05-20",
          description: "Learn how to create sustainable social enterprises",
          location: "Business School, Room 204",
        },
        {
          id: "2",
          title: "Pitch Competition",
          date: "2025-05-27",
          description: "Present your social impact project ideas to win funding",
          location: "Innovation Hub",
        },
      ],
    },
  ]
  
  export const chatMessages: Record<string, ChatMessage[]> = {
    mathematics: [
      {
        id: "1",
        sender: "System",
        content: "Welcome to the Mathematics Society chat!",
        timestamp: "2025-04-29T14:00:00Z",
        isCurrentUser: false,
      },
      {
        id: "2",
        sender: "Dr. Alan Turing",
        content: "Hello everyone! Our next meeting will be on Friday at 5 PM.",
        timestamp: "2025-04-29T14:05:00Z",
        isCurrentUser: false,
      },
      {
        id: "3",
        sender: "Sophie Germain",
        content: "Don't forget to bring your problem sets for the group discussion!",
        timestamp: "2025-04-29T14:10:00Z",
        isCurrentUser: false,
      },
    ],
    robotics: [
      {
        id: "1",
        sender: "System",
        content: "Welcome to the Robotics Club chat!",
        timestamp: "2025-04-29T14:00:00Z",
        isCurrentUser: false,
      },
      {
        id: "2",
        sender: "Dr. Rodney Brooks",
        content: "The parts for our new robot project have arrived! Come check them out in the lab.",
        timestamp: "2025-04-29T14:05:00Z",
        isCurrentUser: false,
      },
      {
        id: "3",
        sender: "Fei-Fei Li",
        content: "I've uploaded the new computer vision algorithms to our shared repository.",
        timestamp: "2025-04-29T14:10:00Z",
        isCurrentUser: false,
      },
    ],
    enactus: [
      {
        id: "1",
        sender: "System",
        content: "Welcome to the Enactus chat!",
        timestamp: "2025-04-29T14:00:00Z",
        isCurrentUser: false,
      },
      {
        id: "2",
        sender: "Maria Rodriguez",
        content: "Our social enterprise project was selected as a finalist for the national competition!",
        timestamp: "2025-04-29T14:05:00Z",
        isCurrentUser: false,
      },
      {
        id: "3",
        sender: "John Chen",
        content: "Great job everyone! Let's meet tomorrow to prepare our presentation.",
        timestamp: "2025-04-29T14:10:00Z",
        isCurrentUser: false,
      },
    ],
  }
  