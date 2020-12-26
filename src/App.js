import React from "react";
import { useMediaQuery } from "react-responsive";
import { Desktop } from "./components/Desktop.jsx";
import { Mobile } from "./components/Mobile.jsx";

export const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  // //モバイルデバイスが縦向きか横向きかの判定
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // //Retinaディスプレイかどうかの判定
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          {isBigScreen && <Desktop />}
          {isTabletOrMobile && <Mobile />}
          {isBigScreen || isTabletOrMobile || <Desktop />}
        </>
      )}
      {isTabletOrMobileDevice && <Mobile />}
    </>
  );
};
