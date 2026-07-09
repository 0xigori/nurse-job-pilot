import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful"

/** Entry resolved by a plain (non-chained) CDA client: single locale, links inlined. */
export type ResolvedEntry<Skeleton extends EntrySkeletonType> = Entry<Skeleton, undefined>


export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: "author"
  fields: {
    name: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    avatar?: EntryFieldTypes.AssetLink
    bio?: EntryFieldTypes.Text
  }
}

export interface CategorySkeleton extends EntrySkeletonType {
  contentTypeId: "category"
  fields: {
    name: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
  }
}

export interface TagSkeleton extends EntrySkeletonType {
  contentTypeId: "tag"
  fields: {
    name: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
  }
}

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost"
  fields: {
    title: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    image?: EntryFieldTypes.AssetLink
    excerpt: EntryFieldTypes.Symbol
    body?: EntryFieldTypes.RichText
    author: EntryFieldTypes.EntryLink<AuthorSkeleton>
    categories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CategorySkeleton>>
    tags?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TagSkeleton>>
    publishedDate: EntryFieldTypes.Date
    seoTitle?: EntryFieldTypes.Symbol
    seoDescription?: EntryFieldTypes.Symbol
  }
}

export interface FeaturedPostSkeleton extends EntrySkeletonType {
  contentTypeId: "featuredPost"
  fields: {
    post: EntryFieldTypes.EntryLink<BlogPostSkeleton>
  }
}
