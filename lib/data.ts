import React from "react";
import youtubeImg from "@/public/youtube.png";
import threadssImg from "@/public/threadss.png";
import spotifyImg from "@/public/spotify.png";
import docomImg from "@/public/docommerce.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Youtube Clone",
    description:
      "A personal project that involves replicating the Youtube using ReactJS.",
    tags: ["React JS", "Youtube API", "MUI Material"],
    imageUrl: youtubeImg,
    url: "https://646afb52268c130d1dd04bbc--silver-nasturtium-5e2a1e.netlify.app/",
  },
  {
    title: "Threads Clone",
    description:
      "A personal project that involves replicating the Threads using NextJS.",
    tags: ["NextJS", "Clerk", "Tailwind CSS", "MongoDB", "Radix UI"],
    imageUrl: threadssImg,
    url: "https://evident-skunk-28.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fthreads-clone-three-kappa.vercel.app%2F#__clerk_db_jwt[eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMlZLa09sUXBDc3ZTeXhyMG1ZZEloNWdDSXF6IiwiaWQiOiJjbGllbnRfMlZLcDlNRUJDSmdxUGJhR0hRdUNkUU1ReVJrIiwicm90YXRpbmdfdG9rZW4iOiJ1MHZ3aTB3cXJyeTJ2OWhzejRzbDE5ZHV3OG9yNmJoeml2M3NnbWNkIn0.HWv-sjKqSAuERzzRMe5nVMWyuLHf9MRaie0LvrqsplEyew2f_A5fY8R0ZwknraudEY5kThecDOvDT-rF5lsawKqRVqxI5zFSFfKR9_ODbYkywiGjqMzbPRfq_Sda3pd-DZnZk_9l1E8A2wMc9qLzGgzZt94iaeN1KHh2mBXYB-nd2Stqa0dhYw3oWs9-DbM7gf0NFwQvRG7bJCCnNOFKPK5FbBZdcTbl7faOtwiQ75FHmz_cP7d0je2j26Kl9N3XyVgduPCL7-meDJFlvc4HKscQ1o7Y0NwPTQf-eCcglumzov0qBTa3-oIJxiUwZeeBM9eOFh-RiAlT9qpz7zR-XQ]",
  },
  {
    title: "Spotify Clone",
    description:
      "A personal project involving cloning the spotify website using Vite, Vue, and Pinia for web development purposes.",
    tags: ["Vue", "Vite.JS","Tailwind", "Pinia"],
    imageUrl: spotifyImg,
    url: "https://spotify-clone-six-rho.vercel.app/",
  },
  {
    title: "DoCommerce",
    description:
      "Next.js e-commerce project featuring Next Auth, Tailwind CSS, Redux, and Stripe for a chic online shopping experience!",
    tags: ["Next JS", "Redux", "Stripe", "Next Auth", "Tailwindcss"],
    imageUrl: docomImg,
    url: "https://docommerce.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Vue",
  "Supabase",
  "React Native"
] as const;
