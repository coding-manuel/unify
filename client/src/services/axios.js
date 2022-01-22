import axios from 'axios'

const BASE_URI = 'http://localhost:9000'

export default () => {
	return axios.create({
		baseURL: `${BASE_URI}/api`,
		withCredentials: true,
		headers: {
			Accept: 'application/json',
			'content-Type': 'application/json',
		},
	})
}
