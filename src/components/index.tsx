import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import coreValue from "./../data/coreValue.json";
import planList from "./../data/planList.json";
import Benjamin from "./../statics/benjamin.svg";
import coreValuesIllustration from "./../statics/core-values-illustration.svg";
import speciality1 from "./../statics/speciality-1.svg";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [plan, setPlan] = useState(1);
  return (
    <div className="App">
      <Header />
      <main>
        <div className="bg-[#4097DB] flex flex-col justify-center items-center relative">
          <div className="w-full relative">
            <img
              src={Benjamin}
              alt=""
              className="w-full lg:h-[75vh] object-cover"
            />
            <div
              className="absolute bottom-0 left-0 w-full"
              style={{
                transform: "scale(-1,1)",
                borderBottom: "20px solid #53A7E9",
                borderLeft: "160px solid #53A7E9",
                borderRight: "160px solid transparent",
                borderTop: "20px solid transparent",
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-full"
              style={{
                borderBottom: "20px solid #4097DB",
                borderLeft: "160px solid #4097DB",
                borderRight: "160px solid transparent",
                borderTop: "20px solid transparent",
              }}
            ></div>
          </div>
          <div className="p-10 py-14 flex-1 text-white">
            <h1
              className="mb-4"
              style={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "34px",
              }}
            >
              Discover Your Wonder
            </h1>
            <p style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <a
            href="#whoWeAre"
            className="absolute -bottom-3 drop-shadow-md bg-[#ffff] p-1 rounded-full"
          >
            <MdKeyboardDoubleArrowDown size={20} />
          </a>
        </div>
        <div className="p-10 " id="whoWeAre">
          <div className="block lg:hidden">
            <div style={{ minHeight: "300px" }}>
              <h2
                className="font-semibold mb-2"
                style={{ color: "#029FE4", fontSize: "36px" }}
              >
                {planList[plan - 1].header}
              </h2>
              <h5 className="mb-1" style={{ fontSize: "18px" }}>
                {planList[plan - 1].title}
              </h5>
              <p style={{ fontSize: "14px" }}>
                {planList[plan - 1].description}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <h2>
                  <strong style={{ fontSize: "24px" }}>
                    {plan.toString().padStart(2, "0")}
                  </strong>
                  <span style={{ color: "#B6B6B6" }}>
                    /{planList.length.toString().padStart(2, "0")}
                  </span>
                </h2>
              </div>
              <div className="flex flex-row">
                <button
                  className="bg-[#F1F1F1] flex justify-center items-center"
                  style={{ height: "40px", width: "40px" }}
                  onClick={() => setPlan(plan > 1 ? plan - 1 : plan)}
                >
                  <AiOutlineArrowLeft size={20} color="#B6B6B6" />
                </button>
                <button
                  className="bg-[#1BA0E1] flex justify-center items-center"
                  style={{ height: "40px", width: "40px" }}
                  onClick={() =>
                    setPlan(plan === planList.length ? plan : plan + 1)
                  }
                >
                  <AiOutlineArrowRight size={20} color="#ffff" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex md:justify-center md:align-middle gap-5 ">
            {planList.map((pl, i) => (
              <div className="shadow-lg p-10" key={i}>
                <h2
                  className="font-semibold mb-2 text-[36px] md:text-[28px]"
                  style={{ color: "#029FE4" }}
                >
                  {pl.header}
                </h2>
                <h5 className="mb-1" style={{ fontSize: "18px" }}>
                  {pl.title}
                </h5>
                <p style={{ fontSize: "14px" }}>{pl.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F8F8F8] flex flex-col justify-center items-center lg:flex-row">
          <div className="p-10 flex-1">
            <h2
              className="font-semibold mb-3 text-center"
              style={{ color: "#029FE4", fontSize: "36px" }}
            >
              Our Core Values
            </h2>
            <p style={{ color: "#777777" }}>
              Ridiculus laoreet libero pretium et, sit vel elementum convallis
              fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
              etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam.
              Montes, vitae, nec amet enim.
            </p>

            <table className="table mt-5">
              <tbody>
                {coreValue.map((cv, i) => (
                  <tr key={i}>
                    <td className="pr-4" style={{ verticalAlign: "top" }}>
                      <div
                        className="mt-5"
                        style={{
                          backgroundColor: "#747474",
                          height: "2px",
                          width: "26px",
                        }}
                      ></div>
                    </td>
                    <td>
                      <h2 style={{ fontSize: "24px", color: "black" }}>
                        {cv.title}
                      </h2>
                      <p className="mt-2 mb-5" style={{ color: "#777777" }}>
                        {cv.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex-1 w-full align-bottom">
            <img
              src={coreValuesIllustration}
              alt="coreValuesIllustration"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="bg-[#509FDD] p-5 py-8 overflow-x-auto">
          <Carousel
            nextArrow={({ activeIndex, handleNext, lastIndex, loop }) => (
              <button
                className="absolute bottom-4 right-6  "
                onClick={() => handleNext()}
              >
                <BsArrowRight size={20} color="#3D46A2" />
              </button>
            )}
            prevArrow={({ activeIndex, loop, firstIndex, handlePrev }) => (
              <button
                className="absolute bottom-4 left-6"
                onClick={() => handlePrev()}
              >
                <BsArrowLeft size={20} color="#3D46A2" />
              </button>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "bg-[#3D46A2] w-8"
                        : "bg-[#D2D2D2] w-4"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            className="flex lg:hidden"
          >
            {[...Array(3)].map((d, i) => (
              <div className="bg-white p-5 py-8 pb-20" key={i}>
                <h2
                  className="mb-3"
                  style={{
                    color: "#029FE4",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  OUR SPECIALITY
                </h2>
                <p style={{ color: "#303030" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
                <img
                  src={speciality1}
                  alt=""
                  className="w-full md:w-1/2 m-auto mt-10 mb-10"
                />
                <p style={{ color: "#A7A7A7" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
            ))}
          </Carousel>
          <div className="hidden lg:flex md:justify-center md:align-middle gap-5 w-full px-2">
            {[1, 2, 3, 4].map((pl, i) => (
              <div
                className="bg-white shadow-lg p-5 py-8 pb-20 flex-shrink-0 w-1/2"
                key={i}
              >
                <h2
                  className="mb-3"
                  style={{
                    color: "#029FE4",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  OUR SPECIALITY
                </h2>
                <p style={{ color: "#303030" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
                <img
                  src={speciality1}
                  alt=""
                  className="w-full md:w-1/2 m-auto mt-10 mb-10"
                />
                <p style={{ color: "#A7A7A7" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
