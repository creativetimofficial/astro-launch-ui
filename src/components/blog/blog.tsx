import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

interface BlogPostCardPropsType {
  img: string;
  tag: string;
  title: string;
  desc: string;
  author: { name: string; img: string };
  date: string;
}

function BlogPostCard({
  img,
  tag,
  title,
  desc,
  author,
  date,
}: BlogPostCardPropsType) {
  return (
    <Card>
      <CardHeader className="h-64">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="small"
          color="blue"
          className="mb-2 !font-semibold"
        >
          {tag}
        </Typography>
        <a
          href="#"
          className="mb-2 grid grid-cols-6 items-baseline gap-2 text-blue-gray-900 transition-colors hover:text-blue-500"
        >
          <div className="col-span-5">
            <Typography variant="h5" className="normal-case">
              {title}
            </Typography>
          </div>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div className="flex items-center gap-3">
          <Avatar size="sm" src={author.img} alt={author.name} />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="!font-semibold"
            >
              {author.name}
            </Typography>
            <Typography
              variant="small"
              className="text-xs font-normal !text-gray-500"
            >
              {date}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "/blog1.jpg",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project Escher",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "10 September 2022",
    author: {
      img: "/avatars/avatar6.jpg",
      name: "Ryan Samuel",
    },
  },
  {
    img: "/blog2.jpg",
    tag: "Startups",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "12 September 2022",
    author: {
      img: "/avatars/avatar5.jpg",
      name: "Nora Hazel",
    },
  },
  {
    img: "/blog3.jpg",
    tag: "Trending",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "16 September 2022",
    author: {
      img: "/avatars/avatar4.jpg",
      name: "Otto Gonzalez",
    },
  },
  {
    img: "/blog4.jpg",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project Escher",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: "/avatars/avatar3.jpg",
      name: "Ryan Samuel",
    },
  },
  {
    img: "/blog5.jpg",
    tag: "Startups",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: "/avatars/avatar2.jpg",
      name: "Nora Hazel",
    },
  },
  {
    img: "/blog6.jpg",
    tag: "Trending",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "22 September 2022",
    author: {
      img: "/avatars/avatar1.jpg",
      name: "Otto Gonzalez",
    },
  },
];

export function BlogSectionOne() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue" className="mb-2 font-bold uppercase">
          Latest Blog Posts
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Blog Posts
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-8/12 lg:px-8"
        >
          This is the paragraph where you can write more details about blogs.
          Keep you user engaged by providing meaningful information.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-y-20 gap-x-8 px-8 pt-10 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ img, tag, title, desc, date, author }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
            date={date}
            author={{
              img: author.img,
              name: author.name,
            }}
          />
        ))}
      </div>
      <div className="px-12 pb-20 text-center">
        <Button
          variant="text"
          className="inline-flex items-center pl-4"
        >
          <ArrowSmallDownIcon
            className="mr-2 h-5 w-5"
            strokeWidth={2}
          />
          load more
        </Button>
      </div>
    </section>
  );
}

export default BlogSectionOne;
