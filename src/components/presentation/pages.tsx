import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { color } from "@material-tailwind/react/types/components/chip";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface BlogPostCardPropsType {
  img: string;
  title: string;
  desc: string;
  date: string;
  url: string;
}

function BlogPostCard({
  img,
  title,
  desc,
  url,
}: BlogPostCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-8 h-56">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="grid grid-cols-6 items-baseline gap-2 text-blue-gray-900 transition-colors hover:text-blue-500"
        >
          <div className="col-span-5">
            <Typography variant="h4" className="normal-case">
              {title}
            </Typography>
          </div>
        </a>
        <Typography color="gray" className="mb-6 font-normal">
          {desc}
        </Typography>

        <a href={url}>
          <Button variant="text" color="dark" className="flex items-center">
            View Page
            <svg className="ml-2" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8314 0.306358C11.4483 -0.0914636 10.8153 -0.103408 10.4175 0.27968C10.0196 0.662768 10.0077 1.29582 10.3908 1.69364L11.8314 0.306358ZM13.2797 4.69364C13.6628 5.09146 14.2958 5.10341 14.6936 4.72032C15.0915 4.33723 15.1034 3.70418 14.7203 3.30636L13.2797 4.69364ZM14.7203 4.69364C15.1034 4.29582 15.0915 3.66277 14.6936 3.27968C14.2958 2.89659 13.6628 2.90854 13.2797 3.30636L14.7203 4.69364ZM10.3908 6.30636C10.0077 6.70418 10.0196 7.33723 10.4175 7.72032C10.8153 8.10341 11.4483 8.09146 11.8314 7.69364L10.3908 6.30636ZM14 5C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3V5ZM1 3C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V3ZM10.3908 1.69364L13.2797 4.69364L14.7203 3.30636L11.8314 0.306358L10.3908 1.69364ZM13.2797 3.30636L10.3908 6.30636L11.8314 7.69364L14.7203 4.69364L13.2797 3.30636ZM14 3H1V5H14V3Z" fill="#111827"/>
            </svg>
          </Button>
        </a>
        
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "/landing-page.jpg",
    title: "Landing Page",
    desc: "Designed to introduce the website's purpose and encourage the user to take an action.",
    url: "/landing",
  },
  {
    img: "/dashboard-page.jpg",
    title: "Dashboard Page",
    desc: "It's designed to give the user all the information they need to make a purchase decision",
    url: "/dashboard",
  },
  {
    img: "billing-page.jpg",
    title: "Billing Page",
    desc: "Includes a summary of the items in the cart and a form for billing and shipping information.",
    url: "/billing",
  },
];

export function BlogSectionThree() {
  return (
    <ThemeProvider>
      <section id="examplePages">
        <div className="container mx-auto px-8 py-10">
          <div className="mb-16 text-left">
            <Typography color="blue" className="mb-2 text-lg font-semibold">
              Get inspired!
            </Typography>
            <Typography variant="h2" color="blue-gray mb-4">
              Example Pages
            </Typography>
            <Typography color="blue-gray">
              You can start using our fully coded Ecommerce page examples if you want to get inspired or show something to your client.
            </Typography>
          </div>

          <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ img, author, date, title, desc, url, tags }: any) => (
              <BlogPostCard
                key={title}
                img={img}
                author={author}
                date={date}
                title={title}
                desc={desc}
                tags={tags}
                url={url}
              />
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default BlogSectionThree;
