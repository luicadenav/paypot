"use client";
import BackIcon from "@/assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";

type TopBarProps = {
  name: string;
};

const TopBar = ({ name }: TopBarProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex direction-row align-center  w-full">
      <div
        className="cursor-pointer flex justify-center items-center w-10 h-10"
        onClick={handleBackClick}
      >
        <BackIcon role="back button" aria-label="back button" />
      </div>
      <h1 className="flex-1 text-center font-sans font-medium text-2xl align-middle leading-10">
        {name}
      </h1>
    </div>
  );
};

export default TopBar;
