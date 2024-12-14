export const getAssetPath = (path: string): string => {
  const publicUrl = process.env.PUBLIC_URL || "";
  return `${publicUrl}/${path}`;
};
