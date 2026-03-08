import type { AboutPageProps } from "@types"

export let aboutConfig: AboutPageProps = {

    intro: `I’m a senior-level full-stack engineer with 10+ years of experience building and scaling revenue-critical systems in a growing business environment.
          For much of my career, I’ve led and operated the software function within a small but rapidly expanding company — owning everything from architecture and data modeling to production infrastructure and deployment. As the company scaled from under $2.5M to $9M in revenue, I supported 200+ active users, expanded systems into new service lines, and helped double seasonal contract volume.
          I’ve worked across PHP, Node.js, Angular, and Android, with deep responsibility for application architecture, database design, and production operations. My experience includes managing and optimizing a multi-database MySQL environment (3GB+ primary database), designing schema evolution strategies, improving query performance, and maintaining uptime across multiple Amazon Lightsail instances.
          In recent years, I’ve introduced structured code reviews, adopted AI-assisted development tools to improve engineering efficiency, implemented Github actions for continuous integration, wrote unit tests with PHPUnit, contributed to hiring processes, and mentored junior developers.`,
    mainImage: {
        src: "/assets/flowers.jpg",
        name: "main image",
        height: 400,
        width: 600
    },
    sections: [
        {
            title: "Farm Boy Turned Software Engineer",
            description: `I'm originally a country boy, who grew up working on farms. For most of my youth and young adulthood I worked in the trades. I started in landscaping, then moved into irrigation systems, becoming a systems designer, and foreman. 
            It wasn't until I started working at Monster Plowing Company that I got into software development. I realized that a lot of the problems the business
            was having could be solved with custom software, so i decided to build it. My boss quickly realized the value of having an in-house software developer, and I was able to grow the software function within the company, making it into a full time position.`,
            images: []
        },
        {
            title: "Relaxing",
            description: "When I'm not coding, I enjoy unwinding with music and spending quality time with my dog. Music has always been a passion of mine, and I find it to be the perfect way to relax and recharge after a day of problem-solving. Whether it's discovering new artists or revisiting old favorites, music helps me clear my mind and find inspiration.",
            images: [
                {
                    src: "/assets/relax-1.jpg",
                    thumbSrc: "/assets/thumbs/relax-1.jpg",
                    name: "relax-1.jpg",
                    height: 267,
                    width: 400
                },
                {
                    src: "/assets/relax-2.jpg",
                    thumbSrc: "/assets/thumbs/relax-2.jpg",
                    name: "relax-2.jpg",
                    height: 267,
                    width: 400
                },

            ]
        },
        {
            title: "A little known fact",
            description: "I enjoy cycling quite a bit and my claim to fame is that I cycled across Europe starting in the north of Italy, and ending in Amserterdam.",
            images: [
                {
                    src: "/assets/trip-1.jpg",
                    thumbSrc: "/assets/thumbs/trip-1.jpg",
                    name: "trip-1.jpg",
                    height: 267,
                    width: 400

                },
                {
                    src: "/assets/trip-2.jpg",
                    thumbSrc: "/assets/thumbs/trip-2.jpg",
                    name: "trip-2.jpg",
                    height: 267,
                    width: 400
                },
                {
                    src: "/assets/trip-3.jpg",
                    thumbSrc: "/assets/thumbs/trip-3.jpg",
                    name: "trip-3.jpg",
                    height: 267,
                    width: 400
                },
            ]
        },
        {
            title: "Jiujitsu Enthusiast",
            description: "I'm passionate about jiujitsu and enjoy training to stay in shape and make friends.",
            images: [
                {
                    src: "/assets/jj-2.jpg",
                    thumbSrc: "/assets/thumbs/jj-2.jpg",
                    name: "getting a purple belt",
                    height: 267,
                    width: 400
                },
                {
                    src: "/assets/jj-3.jpg",
                    thumbSrc: "/assets/thumbs/jj-3.jpg",
                    name: "getting a brown belt",
                    height: 267,
                    width: 400
                }
            ]
        }
    ]
}