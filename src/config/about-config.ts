import type { AboutPageProps } from "@types"

export let aboutConfig: AboutPageProps = {

    intro: `I’m a senior-level full-stack engineer with 10+ years of experience building and scaling revenue-critical systems in a growing business environment.
          For much of my career, I’ve led and operated the software function within a small but rapidly expanding company — owning everything from architecture and data modeling to production infrastructure and deployment. As the company scaled from under $2.5M to $9M in revenue, I supported 200+ active users, expanded systems into new service lines, and helped double seasonal contract volume.
          I’ve worked across PHP, Node.js, Angular, and Android, with deep responsibility for application architecture, database design, and production operations. My experience includes managing and optimizing a multi-database MySQL environment (3GB+ primary database), designing schema evolution strategies, improving query performance, and maintaining uptime across multiple Amazon Lightsail instances.
          In recent years, I’ve introduced structured code reviews, adopted AI-assisted development tools to improve engineering efficiency, implemented Github actions for continuous integration, wrote unit tests with PHPUnit, contributed to hiring processes, and mentored junior developers.`,
    mainImage: {
        src: "/assets/flowers.jpg",
        name: "main image",
        height: 350,
        width: 600
    },
    sections: [
        {
            title: "Where I'm from",
            description: `I'm originally a country boy, who grew up working on farms. For most of my youth and young adulthood I worked in the trades. I went to college for computer programming, and earned a BA from western. When working at Monster Property Services over the winter, I realized that a lot of the problems the business
            was having could be solved with custom software, so i decided to build it. I carved out my own niche in the leadership of the company and became CTO. With a whole suite of software spanning multiple websites and android apps, the company was able to achieve so much more and it continues to grow.`,
            images: [{
                src: "/assets/monster-1.jpg",
                thumbSrc: "/assets/thumbs/monster-1.jpg",
                name: "award winning company",
                height: 234,
                width: 350
            },
            {
                src: "/assets/monster-2.jpg",
                thumbSrc: "/assets/thumbs/monster-2.jpg",
                name: "best employer",
                height: 234,
                width: 350
            }
            ]
        },
       
        {
            title: "A little known fact",
            description: "I enjoy cycling quite a bit, and besides regular rides ive done some longer multi-day tours. The pinnacle of my cycling journey has been that I cycled across Europe starting in the north of Italy, and ending in Amserterdam.",
            images: [
                 {
                    src: "/assets/mtn.jpg",
                    thumbSrc: "/assets/thumbs/mtn.jpg",
                    name: "trip-1.jpg",
                    height: 234,
                    width: 350

                },
                {
                    src: "/assets/trip-1.jpg",
                    thumbSrc: "/assets/thumbs/trip-1.jpg",
                    name: "trip-1.jpg",
                    height: 234,
                    width: 350

                },
                {
                    src: "/assets/trip-2.jpg",
                    thumbSrc: "/assets/thumbs/trip-2.jpg",
                    name: "trip-2.jpg",
                    height: 234,
                    width: 350
                },
                {
                    src: "/assets/trip-3.jpg",
                    thumbSrc: "/assets/thumbs/trip-3.jpg",
                    name: "trip-3.jpg",
                    height: 234,
                    width: 350
                },
            ]
        },
         {
            title: "When it's time to relax",
            description: "When I'm not coding, I enjoy reading, hiking, and sunny vacations.",
            images: [
                {
                    src: "/assets/nature-1.jpg",
                    thumbSrc: "/assets/thumbs/nature-1.jpg",
                    name: "nature-1.jpg",
                    height: 234,
                    width: 350
                },
                {
                    src: "/assets/overlook.jpg",
                    thumbSrc: "/assets/thumbs/overlook.jpg",
                    name: "overlook.jpg",
                    height: 234,
                    width: 350
                },
                {
                    src: "/assets/relax-1.jpg",
                    thumbSrc: "/assets/thumbs/relax-1.jpg",
                    name: "relax-1.jpg",
                    height: 234,
                    width: 350
                },
                 {
                    src: "/assets/cenote.jpg",
                    thumbSrc: "/assets/thumbs/cenote.jpg",
                    name: "relax-2.jpg",
                    height: 234,
                    width: 350
                } 
            ]
        },
        {
            title: "Jiujitsu Enthusiast",
            description: "I'm passionate about jiujitsu and enjoy training to stay in shape and make friends.",
            images: [
                     {
                    src: "/assets/jj-1.jpg",
                    thumbSrc: "/assets/thumbs/jj-1.jpg",
                    name: "good times",
                    height: 234,
                    width: 350
                },
                     {
                    src: "/assets/jj-1-1.jpg",
                    thumbSrc: "/assets/thumbs/jj-1-1.jpg",
                    name: "getting a purple belt",
                    height: 234,
                    width: 350
                },
                {
                    src: "/assets/jj-2.jpg",
                    thumbSrc: "/assets/thumbs/jj-2.jpg",
                    name: "getting a purple belt",
                    height: 234,
                    width: 350
                },
                {
                    src: "/assets/jj-3.jpg",
                    thumbSrc: "/assets/thumbs/jj-3.jpg",
                    name: "getting a brown belt",
                    height: 234,
                    width: 350
                }
            ]
        }
    ]
}