import { extname, isAbsolute } from 'path';

export const validateInput = (input: string) => {
  if (!input) {
    throw new Error('inputFile is required');
  }

  if (!isAbsolute(input)) {
    throw new Error('Please provide an absolute path for inputFile');
  }

  if (extname(input) !== '.aab') {
    throw new Error('inputFile must be a .aab file');
  }
};
