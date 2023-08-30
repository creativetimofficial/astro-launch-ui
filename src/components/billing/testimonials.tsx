import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="transparent"
          shadow={false}
          className="lg:!flex-row lg:items-end"
        >
          <CardHeader
            floated={false}
            shadow={false}
            className="h-[32rem] w-[28rem] shrink-0"
          >
            <img
              src="/avatars/avatar1.jpg"
              alt="testimonial image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="col-span-full lg:col-span-3">
            <Typography variant="h6" color="blue-gray" className="mb-4">
              Customer Story
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Awesome services! Fast and secure.
            </Typography>
            <Typography className="mb-12 w-8/12 font-medium !text-gray-500">
              &quot;Wealth creation is an evolutionarily recent positive-sum
              game. Status is an old zero-sum game. Those attacking wealth
              creation are often just seeking status.&quot;
            </Typography>
            <div className="flex items-center gap-4">
              <Avatar
                variant="circular"
                src="/logos/logo-apple.png"
                alt="spotify"
                size="lg"
              />
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-0.5"
                >
                  Marcell Glock
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-500"
                >
                  Chief Executive, Apple
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;
