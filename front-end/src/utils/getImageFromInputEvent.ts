import {ChangeEvent} from 'react';

export const getImageFromInputEvent = async (
  e: ChangeEvent<HTMLInputElement>
): Promise<{file: File | null; preview: string | null}> => {
  return new Promise((resolve, reject) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve({file, preview: result});
      };
      reader.onerror = () => {
        reject(new Error());
      };
      reader.readAsDataURL(file);
    } else {
      resolve({file: null, preview: null});
    }
  });
};
