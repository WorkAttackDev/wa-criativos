export const normalizeHashUrl = ({
  basePath = "/",
  href,
  pathname,
}: {
  pathname: string;
  href: string;
  basePath?: string;
}) => {
  const isBasePath = pathname === basePath;
  return !isBasePath && href.startsWith("#") ? basePath + href : href;
};
