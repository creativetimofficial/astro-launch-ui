import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="flex place-items-center bg-white py-20">
        <div className="container mx-auto items-center flex">
          <div className="text-left mb-8 md:w-1/2">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Attention to hiqh-quality code
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Develop consistenly using Astro architecture principles
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
              Using AstroLaunch UI you get everything you need to start creating your fully functional and responsive Ecommerce website in days, not months.
            </Typography>
            
          </div>
          <img src="consistenly.png" alt="components" className="mx-auto hidden md:flex md:w-1/2" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
