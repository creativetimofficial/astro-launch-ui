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
} from "@material-tailwind/react";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

interface PricingCardPropsType {
  title: string;
  price: string[];
  options: string[];
  marked?: boolean;
}

function PricingCard({ title, price, options }: PricingCardPropsType) {

  return (
    <ThemeProvider>
      <Card variant="gradient" color="white">
        <CardBody className="text-center">
          <Chip
            value={title}
            color="blue-gray"
            className="mx-auto -mt-9 w-32 rounded-full !bg-blue-gray-50 pt-2 !text-blue-gray-900"
          />
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 mt-10 flex justify-center"
          >
            <Typography as="span" variant="h5" color="blue-gray">
              {price[0]}
            </Typography>
            {price[1]}
            <Typography
              as="span"
              variant="h5"
              color="blue-gray"
              className="-translate-y-1 self-end"
            >
              /{price[2]}
            </Typography>
          </Typography>

          <ul className="my-6 flex flex-col gap-3 pt-6">
            {options.map((option, key) => (
              <li
                key={key}
                className="flex items-center gap-2 text-gray-700"
              >
                <CheckIcon
                  className="h-5 w-5 text-inherit"
                  strokeWidth={2}
                />
                <Typography className="font-normal text-inherit">
                  {option}
                </Typography>
              </li>
            ))}
          </ul>
          <Button
            fullWidth
            variant="gradient"
            color="blue-gray"
            className="flex items-center justify-center gap-4 from-blue-gray-800 to-blue-gray-900"
          >
            {title === "premium" ? "try premium" : "join"}{" "}
            <ArrowRightIcon className="h-5 w-5" strokeWidth={2} />
          </Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}

export function PricingSectionOne() {
  const [type, setType] = React.useState("monthly");

  const cards = [
    {
      title: "starter",
      price: type === "monthly" ? ["$", "59", "mo"] : ["$", "119", "yr"],
      options: [
        "2 team members",
        "20GB Cloud storage",
        "Integration help",
        "Sketch Files",
        "API Access",
        "Complete documentation",
      ],
    },
    {
      title: "premium",
      price: type === "monthly" ? ["$", "89", "mo"] : ["$", "159", "yr"],
      options: [
        "10 team members",
        "40GB Cloud storage",
        "Integration help",
        "Sketch Files",
        "API Access",
        "Complete documentation",
      ],
    },
    {
      title: "enterprise",
      price: type === "monthly" ? ["$", "99", "mo"] : ["$", "399", "yr"],
      options: [
        "Unlimited team members",
        "100GB Cloud storage",
        "Integration help",
        "Sketch Files",
        "API Access",
        "Complete documentation",
      ],
    },
  ];

  return (
    <ThemeProvider>
      <Navbar />
      <section>
        <div className="min-h-[50vh] px-8 py-24 flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('./bg-billing.jpg')`}}>
          <div className="container mx-auto text-center">
            <Typography
              color="white"
              className="mb-2 font-medium opacity-70"
            >
              Pricing
            </Typography>
            <Typography variant="h2" color="white" className="mb-2">
              See our pricing
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-70"
            >
              AstroLaunch UI has got you covered. With our awesome plans it has never been easier to design. 
            </Typography>

            <Tabs value="monthly" className="mx-auto w-72">
              <TabsHeader className="h-14 border border-white/25 bg-opacity-90">
                <Tab value="monthly" onClick={() => setType("monthly")}>
                  Monthly
                </Tab>
                <Tab value="annual" onClick={() => setType("annual")}>
                  Annual
                </Tab>
              </TabsHeader>
            </Tabs>
          </div>
        </div>
        <div className="-mt-16 px-8 pt-8 pb-16">
          <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((props, key) => (
              <PricingCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default PricingSectionOne;
