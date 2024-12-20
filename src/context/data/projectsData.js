const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

const projectsData = [
  {
    name: "hunday",
    slug: slugify("hunday"),
    imgs: ["/projects/p11.webp", "/projects/p12.webp", "/projects/p13.webp"],
    industry: "engineering",
    subIndustry: "school",
    client: "BMW",
    status: "Pending",
    location: "Egypt",
    year: "2010",
    description: [
      "The Nest is a student accommodation complex comprising 12 buildings designed to offer ample shade and encourage wind movement during the summer months.",
      "The complex features internal courtyards and communal spaces intended for resident gatherings. It provides a range of amenities, lush green areas, a central dining hall, library, swimming pools, gyms, and other sports facilities.",
    ],
  },
  {
    name: "unique villa complex project",
    slug: slugify("unique villa complex project"),
    imgs: ["/projects/p12.webp", "/projects/p22.webp", "/projects/p33.webp"],
    industry: "realState",
    subIndustry: "villa",
    client: "Ford",
    status: "Completed",
    location: "France",
    year: "2015",
    description: [
      "A collection of villas designed to maximize natural light and airflow while preserving privacy.",
      "The project includes luxurious amenities such as private gardens, swimming pools, and state-of-the-art security systems.",
    ],
  },
  {
    name: "modern urban housing development",
    slug: slugify("modern urban housing development"),
    imgs: ["/projects/p22.webp", "/projects/p33.webp", "/projects/p12.webp"],
    industry: "engineering",
    subIndustry: "urban planning",
    client: "Tesla",
    status: "Pending",
    location: "USA",
    year: "2021",
    description: [
      "A housing development project aimed at creating sustainable urban living environments with modern amenities.",
      "Features include solar-powered buildings, shared green spaces, and community-focused designs.",
    ],
  },
  {
    name: "advanced eco-friendly educational complex",
    slug: slugify("advanced eco-friendly educational complex"),
    imgs: ["/projects/p33.webp", "/projects/p12.webp", "/projects/p22.webp"],
    industry: "education",
    subIndustry: "school",
    client: "Honda",
    status: "Completed",
    location: "Japan",
    year: "2018",
    description: [
      "An educational complex designed with eco-friendly materials and energy-efficient systems.",
      "The campus includes interactive learning spaces, green rooftops, and digital classrooms.",
    ],
  },
  {
    name: "luxurious countryside villa project",
    slug: slugify("luxurious countryside villa project"),
    imgs: ["/projects/p22.webp", "/projects/p12.webp", "/projects/p33.webp"],
    industry: "realState",
    subIndustry: "villa",
    client: "Ferrari",
    status: "Pending",
    location: "Italy",
    year: "2020",
    description: [
      "A premium villa development in the countryside offering unmatched luxury and comfort.",
      "Features include private pools, expansive gardens, and modern architecture.",
    ],
  },
  {
    name: "high-tech corporate office building",
    slug: slugify("high-tech corporate office building"),
    imgs: ["/projects/p12.webp", "/projects/p33.webp", "/projects/p22.webp"],
    industry: "corporate",
    subIndustry: "office",
    client: "Microsoft",
    status: "Completed",
    location: "USA",
    year: "2016",
    description: [
      "An innovative corporate office building equipped with cutting-edge technology and sustainable designs.",
      "The project includes collaborative workspaces, green areas, and energy-efficient systems.",
    ],
  },
  {
    name: "coastal luxury resort",
    slug: slugify("coastal luxury resort"),
    imgs: ["/projects/p33.webp", "/projects/p12.webp", "/projects/p22.webp"],
    industry: "hospitality",
    subIndustry: "resort",
    client: "Hilton",
    status: "Pending",
    location: "Maldives",
    year: "2019",
    description: [
      "A high-end resort located on the coastline, featuring breathtaking views and luxurious accommodations.",
      "Amenities include infinity pools, private beaches, and world-class dining experiences.",
    ],
  },
  {
    name: "smart apartment complex",
    slug: slugify("smart apartment complex"),
    imgs: ["/projects/p22.webp", "/projects/p33.webp", "/projects/p12.webp"],
    industry: "realState",
    subIndustry: "apartment",
    client: "Google",
    status: "Completed",
    location: "Singapore",
    year: "2022",
    description: [
      "A futuristic apartment complex equipped with smart projects technology and eco-friendly materials.",
      "Features include energy-saving appliances, automated systems, and communal green spaces.",
    ],
  },
  {
    name: "eco-resort in the rainforest",
    slug: slugify("eco-resort in the rainforest"),
    imgs: ["/projects/p12.webp", "/projects/p33.webp", "/projects/p22.webp"],
    industry: "hospitality",
    subIndustry: "resort",
    client: "Amazon",
    status: "Pending",
    location: "Brazil",
    year: "2023",
    description: [
      "An eco-resort nestled in the heart of the rainforest, focusing on sustainability and immersive experiences.",
      "Includes eco-lodges, guided tours, and conservation efforts.",
    ],
  },
];

export default projectsData;
