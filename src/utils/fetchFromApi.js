import axios from "axios";

const API = axios.create({
	baseURL: import.meta.env.VITE_HOST_API,
	headers: {
		"X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
	},
});

export const fetchFromApi = async (url) => {
	const { data } = await API.get(url);
	return data;
};
