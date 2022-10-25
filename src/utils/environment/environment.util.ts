import { config } from 'dotenv';

export const getEvironmentOptions = () => {
  try {
    config();
    return process.env;
  } catch (error) {
    throw new Error(error);
  }
};
