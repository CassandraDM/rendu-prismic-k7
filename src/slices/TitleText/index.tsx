import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TitleText`.
 */
export type TitleTextProps = SliceComponentProps<Content.TitleTextSlice>;

/**
 * Component for "TitleText" Slices.
 */
const TitleText = ({ slice }: TitleTextProps): JSX.Element => {
  return (
    <section>
      <h1>{slice.primary.title}</h1>
    </section>
  );
};

export default TitleText;
