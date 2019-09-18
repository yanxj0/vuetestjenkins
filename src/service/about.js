import { GET } from '../utils/request'

export const getData = data =>
	GET({
		url: 'ddd',
		params: data
	})
