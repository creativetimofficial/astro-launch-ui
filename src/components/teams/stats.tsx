import { Typography, Card, CardBody } from "@material-tailwind/react";

interface StatsCardPropsType {
  count: string;
  title: string;
  desc: string;
}

function StatsCard({ count, title, desc }: StatsCardPropsType) {
  return (
    <Card shadow={false} color="transparent">
      <CardBody>
        <Typography variant="h1" className="mb-4 text-6xl text-dark">
          {count}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const stats = [
  {
    count: "1,200+",
    title: "Projects",
    desc: "Of “high-performing” level are led by a certified manager",
  },
  {
    count: "1,000+",
    title: "Components",
    desc: "That meets quality standards required by our users",
  },
  {
    count: "500+",
    title: "Sections",
    desc: "That meets quality standards required by our users",
  },
  {
    count: "24/7",
    title: "Support",
    desc: "Actively engage team members that finishes on time",
  },
];

export function StatsSectionOne() {
  return (
    <section className="px-8">
      <div className="container mx-auto">
        <div className="mb-20 grid place-items-center">
          <div className="w-full text-center lg:w-8/12">
            <Typography className="mb-4 font-bold">
              Our Activity
            </Typography>
            <Typography variant="h1" color="blue-gray" className="mb-4 ">
              Building the future
            </Typography>
            <Typography variant="lead" className="w-full text-gray-500">
              Learn more about Material Tailwind.
            </Typography>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSectionOne;
