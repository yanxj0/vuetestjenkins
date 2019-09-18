import { sum } from './utils'
import * as utils from './utils'

// test('adds 1 + 2 to equal 3', () => {
// 	expect(sum(1, 2)).toBe(3)
// })

describe('测试 jest.fn', () => {
	test('mock test', () => {
		const mock = jest.fn(() => 'jest.fn test')
		expect(mock()).toBe('jest.fn test') //函数返回结果
		expect(mock).toHaveBeenCalled() //函数被调用
		expect(mock).toHaveBeenCalledTimes(1) //调用1次
	})

	test('mock 返回值', () => {
		const mock = jest.fn()
		mock.mockReturnValue('return value') //mock 返回值
		expect(mock()).toBe('return value')
		expect(mock).toHaveBeenCalledWith()
	})

	test('mock promise', () => {
		const mock = jest.fn()
		mock.mockResolvedValue('promise resolve') // mock promise

		expect(mock('promise')).resolves.toBe('promise resolve')
		expect(mock).toHaveBeenCalledWith('promise') // 调用参数检验
	})

	//或者使用赋值的形式
	function add(v1, v2) {
		return v1 + v2
	}

	add = jest.fn()

	test('mock dependency', () => {
		add(1, 2)
		expect(add).toHaveBeenCalledWith(1, 2)
	})

	function forEach(items, callback) {
		for (let index = 0; index < items.length; index++) {
			callback(items[index])
		}
	}
	const mockCallback = jest.fn()
	test('mock forEach', () => {
		forEach([0, 1], mockCallback)

		// 此模拟函数被调用了两次
		expect(mockCallback.mock.calls.length).toBe(2)

		// 第一次调用函数时的第一个参数是 0
		expect(mockCallback.mock.calls[0][0]).toBe(0)

		// 第二次调用函数时的第一个参数是 1
		expect(mockCallback.mock.calls[1][0]).toBe(1)
	})

	test('mock return', () => {
		const myMock = jest.fn()
		console.log(myMock())

		myMock
			.mockReturnValueOnce(10)
			.mockReturnValueOnce('x')
			.mockReturnValue(true)

		console.log(myMock(), myMock(), myMock(), myMock())
	})
})

/* describe('test jest.mock', () => {
	jest.mock('./utils')
	test('jest.mock test', () => {
		sum(1, 2)
		expect(sum).toHaveBeenCalledWith(1, 2)
	})
}) */

describe('test jest.spyOn', () => {
	test('jest.spyOn test', () => {
		const sum = jest.spyOn(utils, 'sum')
		expect(utils.sum(1, 1)).toBe(2)

		// and the spy stores the calls to add
		expect(sum).toHaveBeenCalledWith(1, 1)
	})
})
