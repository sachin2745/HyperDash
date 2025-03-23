import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Section10 = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 3,
        spacing: 10,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(max-width: 768px)": {
          slides: { perView: 1, spacing: 10 },
        },
      },
    });

    // Attach event listeners after DOM is ready
    const prevButtons = document.querySelectorAll(
      "#keen-slider-previous, #keen-slider-previous-desktop"
    );
    const nextButtons = document.querySelectorAll(
      "#keen-slider-next, #keen-slider-next-desktop"
    );

    prevButtons.forEach((btn) => btn.addEventListener("click", () => keenSlider.prev()));
    nextButtons.forEach((btn) => btn.addEventListener("click", () => keenSlider.next()));

    // Cleanup function
    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <section className="bg-primary font-Poppins">
      <div className="container mx-auto max-w-[77rem] py-12 lg:py-16 xl:py-24">
        <div className="">
          <div className="flex justify-between text-center sm:text-left mb-1 sm:mb-16 p-5 xl:p-0">
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              Our Stories
            </h2>

            <div className="hidden lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full -rotate-180 p-3 transition hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#fff"
                  viewBox="0 0 92 92"
                >
                  <path d="M82.8 48.8l-24.9 25c-1.6 1.6-4.1 1.6-5.7 0s-1.6-4.1 0-5.7L70.4 50H12c-2.2 0-4-1.8-4-4s1.8-4 4-4h58.4L52.2 23.8c-1.6-1.6-1.6-4.1 0-5.7s4.1-1.6 5.7 0l24.9 25c1.6 1.6 1.6 4.2 0 5.7z" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full p-3 transition hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#fff"
                  viewBox="0 0 92 92"
                >
                  <path d="M82.8 48.8l-24.9 25c-1.6 1.6-4.1 1.6-5.7 0s-1.6-4.1 0-5.7L70.4 50H12c-2.2 0-4-1.8-4-4s1.8-4 4-4h58.4L52.2 23.8c-1.6-1.6-1.6-4.1 0-5.7s4.1-1.6 5.7 0l24.9 25c1.6 1.6 1.6 4.2 0 5.7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="font-Poppins">
            <div id="keen-slider" className="keen-slider sm:p-0">
              {["Story1Img.png", "Story2Img.png", "Story3Img.png", "Story4Img.png"].map(
                (img, index) => (
                  <div key={index} className="keen-slider__slide">
                    <div className="w-auto lg:w-[85%] sm:mb-0 mb-6">
                      <div className="rounded-none h-86 overflow-hidden p-5 lg:p-0">
                        <img
                          alt="content"
                          className="object-cover object-center h-full aspect-square w-96 "
                          src={`/${img}`}
                          loading="lazy"
                        />
                        <h4 className="text-white text-lg font-light my-5">Lorem Ipsum</h4>
                        <p className="text-white text-sm font-light mb-5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-1 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full -rotate-180 p-4 transition hover:scale-125"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 92 92">
              <path d="M82.8 48.8l-24.9 25c-1.6 1.6-4.1 1.6-5.7 0s-1.6-4.1 0-5.7L70.4 50H12c-2.2 0-4-1.8-4-4s1.8-4 4-4h58.4L52.2 23.8c-1.6-1.6-1.6-4.1 0-5.7s4.1-1.6 5.7 0l24.9 25c1.6 1.6 1.6 4.2 0 5.7z" />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full p-4 transition hover:scale-125"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 92 92">
              <path d="M82.8 48.8l-24.9 25c-1.6 1.6-4.1 1.6-5.7 0s-1.6-4.1 0-5.7L70.4 50H12c-2.2 0-4-1.8-4-4s1.8-4 4-4h58.4L52.2 23.8c-1.6-1.6-1.6-4.1 0-5.7s4.1-1.6 5.7 0l24.9 25c1.6 1.6 1.6 4.2 0 5.7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section10;
