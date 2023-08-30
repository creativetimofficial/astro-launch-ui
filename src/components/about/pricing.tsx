import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

function Check() {
  return (
    <CheckIcon
      className="mx-auto h-5 w-5 text-green-500"
      strokeWidth={2}
    />
  );
}

function Minus() {
  return (
    <MinusIcon
      className="mx-auto h-5 w-5 text-blue-gray-700"
      strokeWidth={2}
    />
  );
}

function Request() {
  return (
    <Typography variant="small" className="font-normal !text-gray-500">
      upon request
    </Typography>
  );
}

const plans = [
  [
    "Community Support",
    <Check key={1} />,
    <Check key={2} />,
    <Check key={3} />,
  ],
  [
    "100+ Example Pages",
    <Check key={1} />,
    <Check key={2} />,
    <Check key={3} />,
  ],
  [
    "50+ Section Examples",
    <Check key={1} />,
    <Check key={2} />,
    <Check key={3} />,
  ],
  ["Multiple use", "", <Request key={2} />, <Request key={3} />],
  [
    <Typography key={1} variant="h6" color="blue-gray">
      Developer Tools
    </Typography>,
    "",
    "",
    "",
  ],
  ["Custom messages", <Minus key={1} />, <Check key={2} />, <Check key={3} />],
  [
    "Multiple requests",
    <Minus key={1} />,
    <Minus key={2} />,
    <Check key={3} />,
  ],
];

export function PricingSectionThree() {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray">
            Pick the best plan for you
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500">
            You have Free Unlimited Updates and Premium Support on each package.
          </Typography>
        </div>
        <Card className="mt-16 w-full overflow-scroll">
          <CardBody>
            <table className="w-full min-w-[768px] table-auto">
              <thead>
                <tr className="border-b border-blue-gray-50">
                  <th className="px-6 py-3 text-left">
                    <Typography variant="h6" className="mb-2">
                      &nbsp;
                    </Typography>
                    <Typography variant="h6" color="blue-gray">
                      Space Individual
                    </Typography>
                  </th>
                  <th className="px-6 py-3 text-center">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2"
                    >
                      Team
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                      $39
                    </Typography>
                  </th>
                  <th className="px-6 py-3 text-center">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2"
                    >
                      Growth
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                      $79
                    </Typography>
                  </th>
                  <th className="px-6 py-3 text-center">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2"
                    >
                      Enterprise
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                      $99
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, key) => (
                  <tr key={key} className="border-b border-blue-gray-50">
                    <td className="px-6 py-5 text-left">
                      <Typography
                        variant="small"
                        className="font-medium !text-gray-600"
                      >
                        {plan[0]}
                      </Typography>
                    </td>
                    <td className="px-6 py-5 text-center">
                      {plan[1]}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {plan[2]}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {plan[3]}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-5 text-left"></td>
                  <td className="px-6 py-5 text-center">
                    <Button variant="gradient">Choose Plan</Button>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Button variant="gradient">Choose Plan</Button>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Button variant="gradient">Choose Plan</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default PricingSectionThree;
