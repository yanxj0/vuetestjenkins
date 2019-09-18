import axios from 'axios'

const baseUrl = 'xx'
const instance = axios.create({
	method: 'get',
	timeout: 30000
})
const request = req => {
	const { url, params, method } = req
	switch (method) {
		case 'get':
			return instance.get(baseUrl + url, {
				params
			})
	}
}

export const GET = req => {
	return new Promise((resolve, rejects) => {
		request(req)
			.then(data => {
				resolve(data)
			})
			.catch(err => {
				rejects(err)
			})
	})
}
