"use client"
import { cn } from '../../lib/utils'
import Marquee from '../../src/components/ui/marquee';
import { VelocityScroll } from "../../src/components/ui/scroll-based-velocity";

const reviews = [
  {
    name: "JEFFERSON",
    username: "@JEFFERSON",
    body: "Desarollador web con varios años de experiencia y calidad.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "MARVIN",
    username: "@MARVIN",
    body: "Diseñador web con varios años de experiencia",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "ZAUDIL",
    username: "@ZAUDIL",
    body: "Experto en Marquetin y gestion de ventas",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-500/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function MarqueeDemoVertical() {
  return (
    <>
     <p className=' container py-64 px-52'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magnam expedita voluptas, numquam nulla voluptatum laboriosam, cupiditate illum velit eum necessitatibus neque eligendi! Est ipsum voluptas corporis reiciendis, nulla amet labore veniam. Maxime ratione nesciunt consequuntur rem quisquam cupiditate ex exercitationem? Distinctio, in facilis minus repellendus provident, eveniet nostrum totam impedit optio debitis, non at? Similique facere deleniti suscipit perferendis consequuntur possimus maiores. Quidem quo distinctio, doloremque autem expedita quisquam cum eligendi id, animi, aperiam nobis impedit recusandae. Accusantium non quia possimus hic incidunt sapiente necessitatibus repellat alias perspiciatis voluptate maiores odio nostrum, minus voluptatem itaque nemo vitae eveniet commodi totam cupiditate. Beatae, dolorem cupiditate? A, blanditiis totam? Quibusdam, ipsam at quis odit omnis rem accusantium unde a nisi qui tenetur? Perferendis magni tenetur est maxime error ex nostrum, laudantium, corrupti at magnam tempora porro deserunt! Nobis laudantium recusandae voluptatum, commodi placeat nulla rem aspernatur? Pariatur quo quam aut quaerat ipsum asperiores, voluptatum corporis vero nobis ea vel officia architecto, fuga ad. Nostrum aperiam quia, eius autem, at harum architecto quaerat eum debitis cupiditate sunt, esse fuga iure unde aliquid ratione perspiciatis rerum. Earum porro eos quisquam eius. Odio minima nostrum cumque necessitatibus quae facilis odit at debitis soluta hic!</p>
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border my-32 ">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
      <VelocityScroll>Code Jeff Dev</VelocityScroll>
      <p className=' container py-64 px-52'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magnam expedita voluptas, numquam nulla voluptatum laboriosam, cupiditate illum velit eum necessitatibus neque eligendi! Est ipsum voluptas corporis reiciendis, nulla amet labore veniam. Maxime ratione nesciunt consequuntur rem quisquam cupiditate ex exercitationem? Distinctio, in facilis minus repellendus provident, eveniet nostrum totam impedit optio debitis, non at? Similique facere deleniti suscipit perferendis consequuntur possimus maiores. Quidem quo distinctio, doloremque autem expedita quisquam cum eligendi id, animi, aperiam nobis impedit recusandae. Accusantium non quia possimus hic incidunt sapiente necessitatibus repellat alias perspiciatis voluptate maiores odio nostrum, minus voluptatem itaque nemo vitae eveniet commodi totam cupiditate. Beatae, dolorem cupiditate? A, blanditiis totam? Quibusdam, ipsam at quis odit omnis rem accusantium unde a nisi qui tenetur? Perferendis magni tenetur est maxime error ex nostrum, laudantium, corrupti at magnam tempora porro deserunt! Nobis laudantium recusandae voluptatum, commodi placeat nulla rem aspernatur? Pariatur quo quam aut quaerat ipsum asperiores, voluptatum corporis vero nobis ea vel officia architecto, fuga ad. Nostrum aperiam quia, eius autem, at harum architecto quaerat eum debitis cupiditate sunt, esse fuga iure unde aliquid ratione perspiciatis rerum. Earum porro eos quisquam eius. Odio minima nostrum cumque necessitatibus quae facilis odit at debitis soluta hic!</p>
    </>
  );
}

export default MarqueeDemoVertical;