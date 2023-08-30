import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function TeamCard({ img, name, title, desc }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="grid place-items-center gap-4 md:grid-cols-1 lg:h-5/6 lg:grid-cols-12"
    >
      <CardHeader floated={false} className="!m-0 h-full w-full lg:col-span-5">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <CardBody className="p-0 lg:col-span-7">
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
        <Typography
          variant="small"
          className="mb-3 font-bold uppercase text-blue-gray-500"
        >
          {title}
        </Typography>
        <Typography className="mb-4 w-full font-normal !text-gray-500 xl:w-72">
          {desc}
        </Typography>
        <div className="flex items-center">
          <IconButton variant="text" color="blue">
            <i className="fa-brands fa-facebook text-lg not-italic" />
          </IconButton>
          <IconButton variant="text" color="light-blue">
            <i className="fa-brands fa-twitter text-lg not-italic" />
          </IconButton>
          <IconButton variant="text" color="gray" className="text-gray-900">
            <i className="fa-brands fa-github text-lg not-italic" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/studio-5.jpg",
    name: "Ryan Samuel",
    title: "financial examiner",
    desc: "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/studio-3.jpg",
    name: "Jordan Michael",
    title: "ui designer",
    desc: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/clem-onojegaw.jpg",
    name: "Nora Hazel",
    title: "legal secretary",
    desc: "Do not dwell in the past, do not dream of the future, concentrate the mind...",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/clem-onojeghuou.jpg",
    name: "Otto Gonzalez",
    title: "landscape architect",
    desc: "Success is not final, failure is not fatal: it is the courage to continue that counts...",
  },
];

export function TeamSectionFour() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            The Executive Team
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto font-normal !text-gray-500 lg:w-8/12 lg:px-20"
          >
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </Typography>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionFour;
