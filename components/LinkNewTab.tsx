type Props = {
  href: string;
  children: React.ReactNode;
};

function LinkNewTab({ href, children }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default LinkNewTab;
