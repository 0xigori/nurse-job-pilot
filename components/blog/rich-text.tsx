import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, type Document } from "@contentful/rich-text-types"

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p className="text-base leading-relaxed text-foreground/90">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_node, children) => (
      <h2 className="text-2xl font-bold tracking-tight text-foreground">{children}</h2>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h3 className="text-xl font-bold tracking-tight text-foreground">{children}</h3>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h4 className="text-lg font-semibold tracking-tight text-foreground">{children}</h4>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <ul className="list-disc space-y-1 pl-6 text-base leading-relaxed text-foreground/90">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <ol className="list-decimal space-y-1 pl-6 text-base leading-relaxed text-foreground/90">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (_node, children) => (
      <blockquote className="border-l-2 border-accent/40 pl-4 text-foreground/80 italic">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-border" />,
    [BLOCKS.TABLE]: (_node, children) => (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (_node, children) => <tr className="border-b border-border">{children}</tr>,
    [BLOCKS.TABLE_HEADER_CELL]: (_node, children) => (
      <th className="p-2 text-left font-semibold text-foreground">{children}</th>
    ),
    [BLOCKS.TABLE_CELL]: (_node, children) => <td className="p-2 text-foreground/90">{children}</td>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent underline underline-offset-2 hover:no-underline"
      >
        {children}
      </a>
    ),
  },
}

export function RichText({ body, className = "" }: { body: Document; className?: string }) {
  return <div className={`space-y-5 ${className}`}>{documentToReactComponents(body, options)}</div>
}
