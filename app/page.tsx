import WidthWrapper from "@/components/Common/width-wrapper";
import Navbar from "@/components/Layout/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CategoriesSlider from "@/components/UI/Home/category-slider";

const Home = () => {
  return (
    <>
      <main>
        {/* <Navbar /> */}

        <section className="relative duration-200 min-h-screen flex items-center justify-center">
          <Image
            src={`/images/backgrounds/solidity.jpg`}
            alt="Jumbotron Background"
            width={2000}
            height={1024}
            className="absolute top-0 left-0 w-full h-full object-cover -z-[10]"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-[5]"></div>

          <WidthWrapper>
            <div className="flex justify-between items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-gray-100 text-3xl duration-200 hover:text-white chev cursor-pointer hover:scale-105"
              />
              <div className="text-white text-center space-y-2">
                <h1 id="bGalleryGradient" className="text-4xl font-extrabold">
                  B Gallery
                </h1>
                <p className="font-light text-lg">Find, Search and Upload Images with ease.</p>
                <input
                  type="text"
                  className="w-full bg-transparent py-2 px-4 border-2 border-[#2b2b2b] focus:border-[#777777] duration-200 outline-none rounded-lg"
                  placeholder="Search for an image"
                />
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-100 text-3xl duration-200 hover:text-white chev cursor-pointer hover:scale-105"
              />
            </div>
          </WidthWrapper>
        </section>

        <section className="my-8">
          <CategoriesSlider />
        </section>
      </main>
    </>
  );
};

export default Home;
