export type Category = "gym" | "trainer" | "equipment";

export type Tag =
  | "Autism-Informed"
  | "ADHD-Friendly"
  | "Sensory-Friendly"
  | "Low Sensory"
  | "Quiet Hours"
  | "Dim Lighting"
  | "Sensory Pod"
  | "Weighted Equipment"
  | "Noise-Cancelling Option"
  | "Visual Schedules"
  | "Certified Inclusive"
  | "1:1 Coaching"
  | "Small Groups"
  | "Wheelchair Accessible";

export interface Listing {
  id: string;
  category: Category;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tags: Tag[];
  image: string;
  description: string;
  price?: string;
  badge?: string;
  features?: string[];
  href?: string;
}

export const listings: Listing[] = [
  // GYMS
  {
    id: "gym-1",
    category: "gym",
    name: "CalmSpace Fitness — Portland",
    location: "Portland, OR • 0.8 mi away",
    rating: 4.9,
    reviews: 214,
    tags: ["Sensory-Friendly", "Quiet Hours", "Dim Lighting", "Sensory Pod"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
    description: "Purpose-built low-sensory gym with tunable lighting, acoustic dampening, and bookable sensory pods for regulation breaks.",
    badge: "Editor’s Pick",
    features: ["Quiet hours 6–10am", "Noise <55dB", "Visual schedules at each station"],
    href: "#",
  },
  {
    id: "gym-2",
    category: "gym",
    name: "NeuraGym Collective",
    location: "Austin, TX • Online + In-person",
    rating: 4.8,
    reviews: 189,
    tags: ["Autism-Informed", "Certified Inclusive", "Visual Schedules", "Small Groups"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
    description: "Trainer-led small groups (max 4). Every coach is NASM + Autism Exercise Specialist certified.",
    features: ["Predictable routines", "First-visit sensory tour", "No fluorescent lighting"],
    href: "#",
  },
  {
    id: "gym-3",
    category: "gym",
    name: "Spectrum Strength Lab",
    location: "Brooklyn, NY",
    rating: 4.8,
    reviews: 142,
    tags: ["ADHD-Friendly", "Small Groups", "Noise-Cancelling Option"],
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&auto=format&fit=crop&q=60",
    description: "ADHD-informed circuit design: clear start/finish, timers, and choice boards for autonomy.",
    features: ["Choice-based circuits", "Fidget-friendly rest area", "Wheelchair Accessible"],
    href: "#",
  },
  {
    id: "gym-4",
    category: "gym",
    name: "Still & Strong Studio",
    location: "Seattle, WA",
    rating: 4.7,
    reviews: 98,
    tags: ["Low Sensory", "Dim Lighting", "Quiet Hours", "Wheelchair Accessible"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60",
    description: "Boutique studio with cork flooring, warm lighting, and optional scent-free hours.",
    badge: "New",
    features: ["Scent-free Tue/Thu", "Ear defenders provided", "Visual timers"],
    href: "#",
  },
  {
    id: "gym-5",
    category: "gym",
    name: "Open Doors Fitness",
    location: "Denver, CO",
    rating: 4.9,
    reviews: 301,
    tags: ["Sensory-Friendly", "Certified Inclusive", "Visual Schedules"],
    image: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=800&auto=format&fit=crop&q=60",
    description: "Nonprofit gym. Sliding scale, peer mentors, and family co-regulation room.",
    features: ["Peer mentors", "Co-regulation room", "Transit accessible"],
    href: "#",
  },
  {
    id: "gym-6",
    category: "gym",
    name: "Haven Movement",
    location: "Minneapolis, MN",
    rating: 4.6,
    reviews: 87,
    tags: ["Quiet Hours", "Sensory Pod", "1:1 Coaching"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=60",
    description: "Private pods, 1:1 intro sessions, and social stories sent before your first visit.",
    features: ["Social stories emailed", "Private pods", "Adjustable sound"],
    href: "#",
  },

  // TRAINERS
  {
    id: "trainer-1",
    category: "trainer",
    name: "Maya Chen, ACSM-CPT",
    location: "Portland, OR • Hybrid",
    rating: 5.0,
    reviews: 96,
    tags: ["Autism-Informed", "Certified Inclusive", "1:1 Coaching", "Visual Schedules"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&auto=format&fit=crop&q=60",
    description: "Autism Exercise Specialist. Specializes in interoception, predictable progressions, and low-demand cueing.",
    badge: "Top Rated",
    features: ["AAC-friendly communication", "10+ years experience", "Free 20-min sensory consult"],
    href: "#",
  },
  {
    id: "trainer-2",
    category: "trainer",
    name: "Jordan Lee, CSCS",
    location: "Remote • ADHD Coaching",
    rating: 4.9,
    reviews: 123,
    tags: ["ADHD-Friendly", "1:1 Coaching", "Small Groups"],
    image: "https://images.unsplash.com/photo-1599058917212-d750aac44471?w=800&auto=format&fit=crop&q=60",
    description: "Body-doubling workouts, gamified timers, and dopamine-friendly progression boards.",
    features: ["Executive function scaffolding", "Weekly check-ins", "Async video feedback"],
    href: "#",
  },
  {
    id: "trainer-3",
    category: "trainer",
    name: "Sofia Rivera, OTR/L + CPT",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 78,
    tags: ["Sensory-Friendly", "Certified Inclusive", "Weighted Equipment"],
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&auto=format&fit=crop&q=60",
    description: "OT + personal trainer bridging sensory integration and strength for sensory-seekers & avoiders.",
    features: ["Sensory profile assessment", "Regulation-first programming"],
    href: "#",
  },
  {
    id: "trainer-4",
    category: "trainer",
    name: "Devon Park, NASM-CPT",
    location: "Seattle, WA • In-home",
    rating: 4.8,
    reviews: 64,
    tags: ["Low Sensory", "Quiet Hours", "Wheelchair Accessible"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    description: "In-home low-arousal sessions. Uses visual choice boards and first-then schedules.",
    features: ["In-home", "Sensory diet integration", "Caregiver training"],
    href: "#",
  },
  {
    id: "trainer-5",
    category: "trainer",
    name: "Aisha Khan, Inclusive Coach",
    location: "Brooklyn, NY",
    rating: 4.8,
    reviews: 112,
    tags: ["Autism-Informed", "Small Groups", "Noise-Cancelling Option"],
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60",
    description: "Women’s small groups with predictable structure, low music, and opt-in social time.",
    features: ["Max 3 clients", "No-mirror option", "Mask-friendly"],
    href: "#",
  },
  {
    id: "trainer-6",
    category: "trainer",
    name: "Carlos Méndez, CSCS",
    location: "Denver, CO",
    rating: 4.7,
    reviews: 54,
    tags: ["ADHD-Friendly", "Certified Inclusive", "1:1 Coaching"],
    image: "https://images.unsplash.com/photo-1488426862026-3ee34e13d782?w=800&auto=format&fit=crop&q=60",
    description: "Structured choice, clear start/finish, and built-in movement breaks.",
    features: ["Timer-based blocks", "Stimming-affirming", "Bilingual EN/ES"],
    href: "#",
  },

  // EQUIPMENT
  {
    id: "equip-1",
    category: "equipment",
    name: "QuietBell™ Adjustable Dumbbells",
    location: "Equipment • Ships US",
    rating: 4.9,
    reviews: 412,
    tags: ["Noise-Cancelling Option", "Low Sensory", "Sensory-Friendly"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
    description: "Rubber-coated, clang-free weight changes with tactile click feedback and visual weight window.",
    badge: "Best Seller",
    price: "$249–$399",
    features: ["-30dB vs metal", "Large high-contrast numbers", "No loose plates"],
    href: "#",
  },
  {
    id: "equip-2",
    category: "equipment",
    name: "HushMat Sensory Floor Tiles",
    location: "Equipment • Low-scent",
    rating: 4.8,
    reviews: 203,
    tags: ["Sensory-Friendly", "Dim Lighting", "Wheelchair Accessible"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    description: "Non-toxic cork-rubber tiles that dampen sound and reduce glare under warm lighting.",
    price: "$3.50 / sqft",
    features: ["Reduces echo 40%", "No off-gassing", "Easy clean"],
    href: "#",
  },
  {
    id: "equip-3",
    category: "equipment",
    name: "VisualPath™ Exercise Cards",
    location: "Equipment • Printable + Physical",
    rating: 4.9,
    reviews: 321,
    tags: ["Visual Schedules", "Autism-Informed", "Certified Inclusive"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",
    description: "PECS-style workout cards with first-then boards, timers, and choice icons. OT-developed.",
    price: "$24.99",
    features: ["Velcro board included", "English/Spanish", "Free PDF updates"],
    href: "#",
  },
  {
    id: "equip-4",
    category: "equipment",
    name: "CozyCurl Weighted Vest (Adjustable)",
    location: "Equipment • 4–20 lb",
    rating: 4.7,
    reviews: 167,
    tags: ["Weighted Equipment", "ADHD-Friendly", "Sensory-Friendly"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60",
    description: "Even pressure, breathable, with tactile fidget loops on straps for regulation between sets.",
    price: "$79",
    features: ["5-point fit", "Washable", "No velcro loud rip"],
    href: "#",
  },
  {
    id: "equip-5",
    category: "equipment",
    name: "LoopQuiet™ Headphones - Gym Edition",
    location: "Equipment • -27dB",
    rating: 4.8,
    reviews: 892,
    tags: ["Noise-Cancelling Option", "Sensory-Friendly", "Low Sensory"],
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=60",
    description: "Gym-safe, sweat-resistant Loops that cut crowd noise but keep coach cues audible.",
    price: "$35",
    features: ["Keeps voice frequencies", "Comes with carry pod", "Multiple sizes"],
    href: "#",
  },
  {
    id: "equip-6",
    category: "equipment",
    name: "GlowTimer Interval Lights",
    location: "Equipment • Visual Timer",
    rating: 4.8,
    reviews: 143,
    tags: ["Visual Schedules", "ADHD-Friendly", "Dim Lighting"],
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=60",
    description: "Large color-shift timer - green work, amber rest, blue breathe. No beeping needed.",
    price: "$59",
    features: ["Silent mode", "High contrast", "Mountable"],
    href: "#",
  },
];

export const allTags: Tag[] = [
  "Sensory-Friendly",
  "Autism-Informed",
  "ADHD-Friendly",
  "Low Sensory",
  "Quiet Hours",
  "Dim Lighting",
  "Sensory Pod",
  "Weighted Equipment",
  "Noise-Cancelling Option",
  "Visual Schedules",
  "Certified Inclusive",
  "1:1 Coaching",
  "Small Groups",
  "Wheelchair Accessible",
];
