import React from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Typography,
  Button,
  Card,
  CardBody,
  Chip,
  CardHeader,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface PricingCardPropsType {
  title: string;
  desc: string;
  price: string[];
  options: string[];
  marked?: boolean;
}

function PricingCard({
  title,
  desc,
  price,
  options,
  marked,
}: PricingCardPropsType) {
  return (
    <Card
      variant="gradient"
      color={marked ? "blue-gray" : "transparent"}
      className={
        marked
          ? "from-blue-gray-900 to-blue-gray-800"
          : "border border-blue-gray-100"
      }
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="!m-0 p-6"
      >
        <Typography
          variant="h5"
          color={marked ? "white" : "blue-gray"}
          className="capitalize"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className={`font-normal ${
            marked ? "!text-white" : "!text-gray-500"
          }`}
        >
          {desc}
        </Typography>

        <Typography
          variant="h3"
          color={marked ? "white" : "blue-gray"}
          className="mt-4 mb-8 flex gap-1"
        >
          {price[0]}
          {price[1]}
          <Typography
            as="span"
            variant="h6"
            color={marked ? "white" : "blue-gray"}
            className="-translate-y-0.5 self-end opacity-70"
          >
            /{price[2]}
          </Typography>
        </Typography>
        <Button
          fullWidth
          size="sm"
          variant="gradient"
          color={marked ? "white" : "blue-gray"}
          className={marked ? "" : "from-blue-gray-900 to-blue-gray-800"}
        >
          buy now
        </Button>
      </CardHeader>
      <CardBody
        className={`border-t ${
          marked ? "border-blue-gray-50/25" : "border-blue-gray-50"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {options.map((option, key) => (
            <li
              key={key}
              className={`flex items-center gap-3 ${
                marked ? "text-white" : "text-gray-700"
              }`}
            >
              <CheckIcon
                className={`h-4 w-4 ${
                  marked ? "text-white" : "text-blue-gray-900"
                }`}
                strokeWidth={2}
              />
              <Typography
                variant="small"
                className="font-normal text-inherit"
              >
                {option}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export function PricingSectionOne() {
  const cards = [
    {
      title: "starter",
      desc: "Free access for 2 members",
      price: ["$", "199", "year"],
      options: ["Complete documentation", "Working materials in Sketch"],
    },
    {
      title: "pro",
      desc: "Free access for 30 members",
      price: ["$", "299", "year"],
      options: [
        "Complete documentation",
        "Working materials in Sketch",
        "2GB cloud storage",
      ],
    },
    {
      marked: true,
      title: "premium",
      desc: "Free access for 200 members",
      price: ["$", "499", "year"],
      options: [
        "Complete documentation",
        "Working materials in Sketch",
        "20GB cloud storage",
        "100 team members",
      ],
    },
    {
      title: "enterprise",
      desc: "Free access for all members",
      price: ["$", "899", "year"],
      options: [
        "Complete documentation",
        "Working materials in Sketch",
        "100GB cloud storage",
        "500 team members",
        "Premium support",
      ],
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Pick the best plan for you
        </Typography>
        <Typography className="mb-8 font-normal !text-gray-500">
          You have Free Unlimited Updates and Premium Support on each package.
        </Typography>
      </div>
      <div className="mt-24">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((props, key) => (
            <PricingCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSectionOne;
