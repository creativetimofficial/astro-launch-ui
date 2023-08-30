import React from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

function PricingCard({ title, desc, buttonText, price, options, marked, url }) {
  return (
    <Card
      color={marked ? "blue-gray" : "transparent"}
      className={
        marked
          ? "bg-dark w-full md:w-1/2 lg:w-1/4"
          : "border border-blue-gray-100 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0"
      }
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="!m-0 pt-6 text-center"
      >
        <Typography
          variant="h5"
          color={marked ? "white" : "blue-gray"}
          className="capitalize mb-2 text-center"
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          color={marked ? "white" : "blue-gray"}
          className="flex gap-1 justify-center"
        >
          {price[0]}
          {price[1]}
        </Typography>
      </CardHeader>
      <CardBody className="text-center">
        <ul className="flex flex-col mb-8 px-5">
          {options.map((option, key) => (
            <li
              key={key}
              className={`flex items-center justify-center gap-3 border-b py-4 ${
                marked ? "text-white border-white/30" : "text-gray-700"
              }`}
            >
              <Typography variant="small" className="font-normal text-inherit">
                {option}
              </Typography>
            </li>
          ))}
        </ul>
        <a href={url}>
          <Button
            size="sm"
            variant="gradient"
            color={marked ? "white" : "blue-gray"}
            className={marked ? "" : "from-blue-gray-900 to-blue-gray-800"}
          >
            {buttonText}
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export function PricingSectionOne() {
  const cards = [
    {
      title: "Open Source",
      price: ["Free"],
      options: [
        "Documentation",
        "20 Components",
        "10 Blocks",
        "3 Example Pages",
      ],
      buttonText: "Download",
      url: "https://github.com/creativetimofficial/astro-launch-ui",
    },
  
    {
      marked: true,
      title: "Pro Version",
      price: ["$", "99"],
      options: [
        "Documentation",
        "140+ Components",
        "30+ Blocks",
        "10+ Example Pages",
      ],
      buttonText: "Get Access",
      url: "",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-8">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Pick the best plan for you
        </Typography>
        <Typography className="mb-8 font-normal !text-gray-500">
          You have Free Unlimited Updates and Premium Support on each package.
        </Typography>
      </div>
      <div className="mt-12">
        <div className="container mx-auto md:flex justify-center gap-10">
          {cards.map((props, key) => (
            <PricingCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSectionOne;
