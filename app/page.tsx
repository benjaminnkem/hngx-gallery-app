import WidthWrapper from "@/components/Common/width-wrapper";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import CategoriesSlider from "@/components/UI/Home/category-slider";

const Home = () => {
  return (
    <>
      <div>
        <CategoriesSlider />

        <div className="relative duration-200 lg:min-h-[30rem] md:min-h-[25rem] sm:min-h-[20rem] min-h-[15rem] flex items-center justify-center">
          <Image
            src={`/images/backgrounds/solidity.jpg`}
            alt="Jumbotron Background"
            width={2000}
            height={1024}
            className="absolute top-0 left-0 w-full h-full object-cover -z-[10]"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-[5]"></div>

          <WidthWrapper>
            <div className="flex justify-between gap-20 items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-gray-100 text-3xl duration-200 hover:text-white chev cursor-pointer hover:scale-105"
              />

              <div className="text-white space-y-2 flex-grow">
                <div>
                  <h1 id="bGalleryGradient" className="text-6xl font-extrabold font-waterFall">
                    B Gallery
                  </h1>{" "}
                  <span>Your home of visuals</span>
                </div>
                <p className="font-light text-lg">Find, Search and Upload Images with ease.</p>
                <div className="flex items-center space-x-2 border-2 border-[#2b2b2b] max-w-3xl focus-within:border-[#777777] duration-200 px-4 rounded-lg">
                  <FontAwesomeIcon icon={faSearch} />
                  <input
                    type="text"
                    className="w-full bg-transparent py-2 outline-none flex-grow"
                    placeholder="Search for an image"
                  />
                </div>
              </div>

              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-100 text-3xl duration-200 hover:text-white chev cursor-pointer hover:scale-105"
              />
            </div>
          </WidthWrapper>
        </div>
      </div>

      <main>
        <section className="my-8"></section>
      </main>
    </>
  );
};

export default Home;
