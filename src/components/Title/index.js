import React from "react";
import TitleChip from "../Chip";

/**
 * Title: Title used for set the title
 * @params {heading }
 * @params {searchTerm }
 */

export default function Title(props) {
  const { heading, searchTerm } = props;
  return searchTerm ? (
    <TitleChip
      heading={`Search result: ${searchTerm}`}
      variant="outlined"
      textAlign="left"
    />
  ) : (
    <TitleChip heading={heading} />
  );
}
