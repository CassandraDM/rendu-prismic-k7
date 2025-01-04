// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | TitleTextSlice
  | AboutUsSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *AboutUs → Default → Primary*
 */
export interface AboutUsSliceDefaultPrimary {
  /**
   * AboutTitle field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: About Title
   * - **API ID Path**: about_us.default.primary.about_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_title: prismic.KeyTextField;

  /**
   * AboutContent field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: About Content
   * - **API ID Path**: about_us.default.primary.about_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_content: prismic.RichTextField;
}

/**
 * Default variation for AboutUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUs*
 */
type AboutUsSliceVariation = AboutUsSliceDefault;

/**
 * AboutUs Shared Slice
 *
 * - **API ID**: `about_us`
 * - **Description**: AboutUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSlice = prismic.SharedSlice<
  "about_us",
  AboutUsSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *TitleText → Default → Primary*
 */
export interface TitleTextSliceDefaultPrimary {
  /**
   * Title field in *TitleText → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Title
   * - **API ID Path**: title_text.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for TitleText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TitleTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TitleText*
 */
type TitleTextSliceVariation = TitleTextSliceDefault;

/**
 * TitleText Shared Slice
 *
 * - **API ID**: `title_text`
 * - **Description**: TitleText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleTextSlice = prismic.SharedSlice<
  "title_text",
  TitleTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutUsSlice,
      AboutUsSliceDefaultPrimary,
      AboutUsSliceVariation,
      AboutUsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      TitleTextSlice,
      TitleTextSliceDefaultPrimary,
      TitleTextSliceVariation,
      TitleTextSliceDefault,
    };
  }
}
