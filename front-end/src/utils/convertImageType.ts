/**
 * DataURL을 File 객체로 변환하는 함수
 * @param dataURL 변환할 DataURL
 * @param fileName 생성할 파일의 이름
 * @returns 변환된 File 객체
 */
export const dataURLToFile = (dataURL: string, fileName: string): File => {
  const byteString = atob(dataURL.split(',')[1]);
  const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  const buffer = new ArrayBuffer(byteString.length);
  const view = new Uint8Array(buffer);

  for (let i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }

  return new File([buffer], fileName, {type: mimeString});
};
