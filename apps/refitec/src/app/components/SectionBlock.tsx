import HeadingText from "./HeadingText";

const SectionBlock = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <article className="space-y-4">
    <HeadingText size="sm" className="text-primary">
      {title}
    </HeadingText>
    <p>{content}</p>
  </article>
);

export default SectionBlock;
