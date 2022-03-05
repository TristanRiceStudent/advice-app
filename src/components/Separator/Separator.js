import { theme } from "../../theme/theme";

import {
  IMG_PATTERN_DIVIDER_DESKTOP,
  IMG_PATTERN_DIVIDER_MOBILE,
} from "../../assets";
import { SeparatorStyled } from "./SeparatorStyled";

const Separator = () => {
  const mobileMediaQuery = `(max-width: ${theme.sizes.mobile})`;
  return (
    <SeparatorStyled>
      <source srcSet={IMG_PATTERN_DIVIDER_MOBILE} media={mobileMediaQuery} />
      <img src={IMG_PATTERN_DIVIDER_DESKTOP} alt="pattern divider" />
    </SeparatorStyled>
  );
};

export default Separator;
