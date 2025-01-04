import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutUs`.
 */
export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

/**
 * Component for "AboutUs" Slices.
 */
const AboutUs = ({ slice }: AboutUsProps): JSX.Element => {
  return (
    <section>
      <h2>{slice.primary.about_title}</h2>
      <PrismicRichText field={slice.primary.about_content} />
    </section>
  );
};

export default AboutUs;
