import React from "react";
import Intro from "@/component/intro";
import SevctionDivider from "@/component/sevctionDivider";
import About from "@/component/about";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      {/* <div className="relative top-24 flex items-center justify-center">
        <div className=" w-40 h-full flex items-center justify-center ">
          <div className="h-60">Intro</div>
        </div>
      </div> */}
      <SevctionDivider />
      {/* <div className="bg-lPurple my-24 h-16 w-1 rounded-full hidden sm:block"></div> */}
      {/* <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
        <h2 className="text-3xl font-medium capitalize mb-8">About Me</h2>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper dignissim magna, vitae congue mauris congue sit amet. Nunc
          commodo ipsum elit, eu sollicitudin leo pharetra ac. Integer laoreet,
          risus a commodo tristique, massa libero semper sem, quis egestas nisi
          diam a nibh. Suspendisse sit amet ante sed magna fringilla venenatis
          ac sit amet urna. Sed dapibus vehicula mollis. Sed mollis magna vitae
          congue auctor. Proin laoreet velit bibendum magna aliquam, et
          convallis lorem bibendum.
        </p>
        <p>
          Ut in placerat dui, egestas interdum felis. Duis lobortis iaculis
          tempus. Pellentesque non ex massa. Nulla dapibus tempus mollis.
          Vestibulum ante diam, vehicula a ex eu, luctus finibus mi. Vestibulum
          mollis nisi sed nibh aliquet faucibus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Praesent interdum ultricies nunc eget volutpat. Vivamus
          consectetur, libero quis mollis blandit, leo justo consectetur mauris,
          ut vehicula ante ipsum ac est. Duis tempor elementum velit non
          malesuada.
        </p>
      </section> */}
      <About />
      <SevctionDivider />
    </main>
  );
}
