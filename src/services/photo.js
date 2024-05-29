import { createClient } from "pexels";

const apiKey = import.meta.env.VITE_KEY_API_PEXELS;

const client = createClient(apiKey);

export const getPhotos = async (photoPerPage, callback) => {
  let res = [];

  try {
    res = await client.photos.curated({
      page: 1,
      per_page: photoPerPage,
    });

    return res?.photos;
  } catch (error) {
    console.log(error);
  }finally{
    callback();
  }
};
