import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function HeroSectionOne() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full min-h-screen w-screen bg-white px-4 pt-5">
        <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row">
          <div className="mr-0 lg:mr-16 xl:mr-24">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 text-4xl !leading-tight md:text-5xl"
            >
              Work With Our Team
              Evolution Continues
            </Typography>
            <Typography
              variant="lead"
              className="mb-6 text-blue-gray-800 md:pr-16 xl:pr-28"
            >
              The time is now for it to be okay to be great. People in this
              world shun people for being great.
            </Typography>
            <div className="mb-6 flex w-full flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button color="dark" className="w-full px-4 md:w-[12rem]">get started</Button>
              <Button color="dark" variant="outlined" className="w-full px-4 md:w-[12rem]">Read more</Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal inline-flex items-center"
            >
              We care about your data in our&nbsp;
              <Typography
                as="a"
                href="#"
                variant="small"
                className="underline decoration-gray-500 underline-offset-4 font-normal"
              >
                privacy policy
              </Typography>
            </Typography>
          </div>
          <img
            src="https://images.unsplash.com/photo-1651558529203-970fcdcc397b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="team work"
            className="lg:0 mb-8 h-full w-full rounded-xl object-cover lg:h-[50rem] lg:w-1/2"
          />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionOne;
