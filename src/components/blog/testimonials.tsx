import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialCardPropsType {
  img: string;
  rating: number;
  feedback: string;
  client: string;
  title: string;
}

function TestimonialCard({
  img,
  rating,
  feedback,
  client,
  title,
}: TestimonialCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="p-8">
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-8">
        <Avatar
          src={img}
          alt={client}
          size="xxl"
          variant="rounded"
          className="h-48 w-48"
        />
      </CardHeader>
      <CardBody className="!p-0">
        <Typography variant="h5" color="blue-gray" className="mb-1">
          {client}
        </Typography>
        <Typography className="mb-4 font-normal !text-gray-500">
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="blue-gray"
          className="mb-8 font-medium"
        >
          &quot;{feedback}&quot;
        </Typography>
        <Rating value={rating} />
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    rating: 5,
    feedback:
      "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
    client: "Lucian Eurel",
    title: "CEO Discord",
    img: "/avatars/avatar1.jpg",
  },
  {
    rating: 5,
    feedback:
      "Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love you like Kanye loves Kanye I love Rick Owens• bed design but the back is not so attractive. ",
    client: "Linde Michel",
    title: "CFO Slack",
    img: "/avatars/avatar2.jpg",
  },
  {
    rating: 5,
    feedback:
      "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
    client: "Misha Stam",
    title: "COO Dribbble",
    img: "/avatars/avatar4.jpg",
  },
];

export function TestimonialSectionThree() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((props, key) => (
          <TestimonialCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSectionThree;
