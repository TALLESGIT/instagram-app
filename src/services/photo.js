export const getPhotos = async (photoPerPage, callback) => {
	const apiKey = import.meta.env.VITE_KEY_API_PEXELS;
	const baseUrl = "https://api.pexels.com/v1/curated";

	let res = [];

	try {
		res = await fetch(`${baseUrl}?page=1&per_page=${photoPerPage}`, {
			method: "get",
			headers: new Headers({
				Authorization: apiKey,
			}),
		})
			.then((res) => res.json())
			.then((data) => data.photos);

		return res;
	} catch (error) {
		console.log(error);
	} finally {
		callback();
	}

	return res;
};
