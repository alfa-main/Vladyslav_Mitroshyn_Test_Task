import { FC, useCallback } from "react";
import { CasinosData } from "../../../data/casinosData";
import Button from "../../atoms/Button/Button";
import { getCardBackgroundClass } from "../../../utils/getCardBackground";
import { getAssetPath } from "../../../utils/getAssetPath";

interface CasinoCardProps {
  data: CasinosData;
}

export const CasinoCard: FC<CasinoCardProps> = ({ data }) => {
  const { title, getAmount, betAmount, starsAmount, logoUrl } = data;

  const handleClick = useCallback(() => {
    // go to casino page
    alert("go to casino page");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full xl:gap-[58px] p-3 py-5 md:p-4 lg:py-5 rounded-lg shadow-sm lg:pr-[40px] xl:pr-[68px] lg:pr-4 lg:gap-[22px] shadow-dark border border-blackTransparent">
      <div className="flex flex-1 w-full flex-col md:flex-row gap-[22px] md:gap-[35px] lg:gap-[24px] xl:gap-[59px]">
        <div
          className={`flex-shrink-0 w-full md:w-[289px] h-[133px] md:h-[162px] xl:w-[289px] xl:h-[133px] lg:w-[225px] lg:h-[103px] flex items-center justify-center ${getCardBackgroundClass(
            title
          )}`}
        >
          <img
            className="lg:w-[103px] xl:w-[133px]"
            src={logoUrl}
            alt={logoUrl}
          />
        </div>

        <div
          className="flex flex-col lg:flex-row gap-[23px] md:gap-[32px] lg:gap-[65px] xl:flex-1 items-center md:items-start lg:items-center"
        >
          <div className="flex flex-col items-center md:items-start  lg:flex-1 gap-4 md:gap-3">
            <div>
              <a
                className="body-sm border-b border-black hover:border-transparent inline-block"
                href="/"
              >
                {title}
              </a>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: starsAmount }, (_, i) => (
                <img
                  key={`full-${i}`}
                  src={getAssetPath("/icons/ui/full_star.svg")}
                  alt="Full Star"
                />
              ))}
              {Array.from({ length: 5 - starsAmount }, (_, i) => (
                <img
                  key={`empty-${i}`}
                  src={getAssetPath("/icons/ui/empty_star.svg")}
                  alt="Empty Star"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start lg:items-center gap-1 lg:text-center">
            <div className="body-sm font-bold font-semibold">Bonus</div>
            <div className="flex gap-[4px] flex-col items-center lg:!flex-col lg:!items-center body-lg xs:flex-row xs:items-start">
              <div>Bet £{betAmount}</div>
              <div>Get £{getAmount}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[18px] md:mt-[24px] lg:mt-0 lg:w-[190px] xl:w-[306px]">
        <Button variant="primary" size="medium" onClick={handleClick} isFluid>
          Bet Now
        </Button>
      </div>
    </div>
  );
};
