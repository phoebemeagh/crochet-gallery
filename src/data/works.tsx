export type Work = {
  id: string;
  projectName: string;
  projectDescription: string;
  pattern: string;
  images: string[];
  toolsUsed: string;
  tags: string[];
};

export const works: Work[] = [
  {
    id: "eagle-work",
    projectName: "Eagle blanket",
    projectDescription:
      "Blanket with eagle pattern using a public alpha pattern.",
    pattern: "https://pin.it/6cRUpSW23",
    images: ["/imgs/eagle_work.jpg"],
    toolsUsed: "5.5 mm crochet hook, 100% cotton yarn DK",
    tags: ["blanket", "cotton", "free"],
  },
  {
    id: "star-baby-blanket",
    projectName: "Star Baby Blanket",
    projectDescription:
      "Easy to make-up baby blanket which forms a star shape. Created using a free online pattern. This is a great stash buster to get rid of any extra yarn you have lying around.",
    pattern:
      "https://theloopholefox.com/free-crochet-star-baby-blanket-pattern/",
    images: ["/imgs/star_baby_blanket.jpg"],
    toolsUsed: "4 mm crochet hook, ulta-soft DK yarn",
    tags: ["blanket", "baby", "free"],
  },
  {
    id: "bat",
    projectName: "Bat Amigurumi",
    projectDescription:
      "The perfect spooky season amigurumi project, has adjustable wings and a cute face. I used tweed yarn for this project to give more of a textured look to the bad and to match with an autumnal vibe.",
    pattern:
      "https://www.etsy.com/uk/listing/1100232718/mango-the-flying-fox-pattern?ref=yr_purchases",
    images: ["/imgs/bat_1.jpg", "/imgs/bat_2.jpg", "/imgs/bat_3.jpg"],
    toolsUsed:
      "1.5mm crochet hook, sock weight/fingering/#1 weight yarn, stuffing, safety eyes",
    tags: ["amigurumi", "paid"],
  },
  {
    id: "blue-flowers-blanket",
    projectName: "Blue Flowers Blanket",
    projectDescription:
      "This a simple blanket great for beginners which simply requires you to know how to do a granny square (I used a sunburst granny square). Then, you need to join all the granny squares using any join you like. Although this was a freehand project, I have attached a free pattern here for a very similar blanket.",
    pattern:
      "https://www.katiegetscreative.com/2025/01/sunburst-granny-square-blanket.html",
    images: [
      "/imgs/blanket_blue_florals.jpg",
      "/imgs/blanket_blue_florals_wip.jpg",
    ],
    toolsUsed: "5 mm crochet hook, any DK yarn",
    tags: ["blanket", "free", "granny square"],
  },
  {
    id: "floral-top",
    projectName: "Korean Flower Motif Bustier",
    projectDescription:
      "This was created by following the free youtube pattern from RaLee Hands. Although the video is in Korean, you can follow along with the visuals. This is a perfect summer top and a great first-time clothing item.",
    pattern:
      "https://www.youtube.com/watch?v=Sf9EgRgu1wg&list=PLb7Y0-27PtruIgDscn1hNyZ3UKrQjqGnT&index=2",
    images: ["/imgs/floral_top.jpg"],
    toolsUsed: "3 mm crochet hook, cotton yarn",
    tags: ["clothing", "top", "free", "granny square"],
  },
  {
    id: "harvest-moon-autumnal",
    projectName: "Autumnal Harvest Moon Blanket",
    projectDescription:
      "A beautiful intricate blanket which utilises 3D crochet techniques. For this iteration of the blanket I used both the original block pattern and the harvest moon extension pattern. These are paid patterns available on Ravelry, posted by the Floral Hook. The pattern comes as a downloadable PDF and links to an unlisted YouTube tutorial.",
    pattern: "https://www.ravelry.com/patterns/library/harvest-moon-extension",
    images: ["/imgs/harvest_moon_blanket.jpg"],
    toolsUsed: "4.0 mm crochet hook, DK yarn",
    tags: ["blanket", "paid", "3D crochet"],
  },
  {
    id: "harvest-moon-spring",
    projectName: "Spring Harvest Moon Blanket",
    projectDescription:
      "A beautiful intricate blanket which utilises 3D crochet techniques. For this iteration I wanted a smaller blanket which can be used a small table cover in spring colours. The pattern comes as a downloadable PDF and links to an unlisted YouTube tutorial.",
    pattern: "https://www.ravelry.com/patterns/library/harvest-moon-block",
    images: [
      "/imgs/harvest_moon_spring.jpg",
      "/imgs/hm_wip_2.jpg",
      "/imgs/hm_wip_3.jpg",
      "/imgs/hm_wip.jpg",
    ],
    toolsUsed: "4.0 mm crochet hook, DK yarn",
    tags: ["blanket", "paid", "3D crochet"],
  },
];
