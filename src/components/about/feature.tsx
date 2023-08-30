import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  BoltIcon,
  ArrowsPointingOutIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface IconPropsType {
  children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function FeatureSectionThree() {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img
              src="/features3.jpg"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
            <Icon>
              <BoltIcon className="h-6 w-6" strokeWidth={2} />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-4">
              Refreshing workspace atmosphere
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 font-normal !text-gray-500"
            >
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
              <br />
              <br />
              If you have the opportunity to play this game of life you need to
              appreciate every moment. A lot of people don&apos;t appreciate the
              moment until it&apos;s passed.
            </Typography>
            <div className="w-max">
              <Button size="lg" color="white">
                More about us
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
            <Icon>
              <ArrowsPointingOutIcon
                className="h-6 w-6"
                strokeWidth={2}
              />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-4">
              Stand up for every move
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 font-normal !text-gray-500"
            >
              Society has put up so many boundaries, so many limitations on
              what&apos;s right and wrong that it&apos;s almost impossible to
              get a pure thought out.It&apos;s like a little kid, a little boy,
              looking at colors.
              <br />
              <br />
              Before somebody tells you you shouldn&apos;t like pink because
              that&apos;s for girls, or you&apos;d instantly become a gay
              two-year-old. Why would anyone pick blue over pink? Pink is
              obviously a better color.
            </Typography>
            <div className="w-max">
              <Button size="lg" color="white">
                More about us
              </Button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <img
              src="/features4.jpg"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSectionThree;
