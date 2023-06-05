import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBaack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2 text-white">
        {
          showBackArrow && (
            <BiArrowBack
              color="white"
              size={20}
              onClick={handleBaack}
              className="
              cursor-pointer
              hover:bg-opacity-70
              transition
              "
            />
          )
        }
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
