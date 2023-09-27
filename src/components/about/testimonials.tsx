import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden rounded-3xl !bg-blue-gray-900"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
            <div>
              <img
                src="logos/logo-spotify.svg"
                alt="spotify"
                className="mb-8 w-36"
              />
              <Typography
                variant="h3"
                color="white"
                className="mb-10 font-medium leading-normal"
              >
                &quot;We&apos;re not always in the position that we want to be
                at. We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams. &quot;
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-medium"
              >
                Marcela Glock
              </Typography>
              <Typography
                color="white"
                className="font-normal opacity-70"
              >
                Chief Executive, Spotify
              </Typography>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src="avatars/avatar6.jpg"
                alt="testimonial image"
                className="h-80 w-80 rounded-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;
