import ReactMarkdown, { Options } from "react-markdown";

export const Markdown = ({ children, ...props }: Options) => {
  return (
    <ReactMarkdown
      className="prose"
      components={{
        a: ({ children, href }) => (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        ),
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};
