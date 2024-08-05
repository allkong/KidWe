export const dataURLToBase64 = (
  dataURL: string,
  mimeType: string = 'image/png'
): string => {
  const base64Data = dataURL.split(',')[1];
  return `data:${mimeType};base64,${base64Data}`;
};
