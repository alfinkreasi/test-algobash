import { Button } from "@material-tailwind/react";
import departementList from "./../data/departementList.json";
import LogoWhite from "./../statics/logo-white.svg";
import { useState } from "react";

function Footer() {
  const [departement, setDepartemen] = useState<string | undefined>("1");
  return (
    <footer>
      <div className="bg-[#07477A] p-4 pt-0 lg:pt-10 pb-10 flex flex-col justify-center lg:flex-row">
        <div className="py-6 flex-1 flex items-start md:items-center">
          <img src={LogoWhite} alt="logo" />
        </div>
        <div className="flex-1 bg-white p-8">
          <select
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              color: "#00537C",
              fontSize: "14px",
              fontWeight: "700",
            }}
            className="p-2 rounded-md w-full"
            value={departement}
            onChange={(e) => {
              console.log(e);
              setDepartemen(e.target.value);
            }}
          >
            {departementList.map((dl, i) => (
              <option value={i.toString()} key={i}>
                {dl.name}
              </option>
            ))}
          </select>
          <p
            style={{ color: "#25A0D8", fontSize: "18px" }}
            className="mt-5 mb-4"
          >
            {departement ? departementList[Number(departement)].address : null}
          </p>
        </div>
        <div className="flex-1 flex flex-col mt-5 lg:mt-0 lg:pl-5">
          <Button
            variant="text"
            color="white"
            className="text-left w-auto px-0"
          >
            Who We Are
          </Button>
          <Button
            variant="text"
            color="white"
            className="text-left w-auto px-0"
          >
            Our Values
          </Button>
          <Button
            variant="text"
            color="white"
            className="text-left w-auto px-0"
          >
            The Perks
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
