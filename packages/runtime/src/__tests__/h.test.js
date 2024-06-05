import { expect, test } from 'vitest'

import { DOM_TYPES, h, hString, hFragment } from '../h'


test('hString', () => {
    expect(hString('mamma')).toStrictEqual({type: DOM_TYPES.TEXT, value: 'mamma'})
})

test('h without childrens', () => {
    expect(h('div', {}, [])).toStrictEqual(
        {
            tag: 'div',
            props: {},
            children: [],
            type: DOM_TYPES.ELEMENT
        }
    )
})

test('h with null childrens', () => {
    expect(h('div', {}, [null, null])).toStrictEqual(
        {
            tag: 'div',
            props: {},
            children: [],
            type: DOM_TYPES.ELEMENT
        }
    )
})


test('h with text children', () => {
    expect(h('div', {}, ['mamma'])).toStrictEqual(
        {
            tag: 'div',
            props: {},
            children: [
                {type: DOM_TYPES.TEXT, value: 'mamma'}
            ],
            type: DOM_TYPES.ELEMENT
        }
    )
})

test('hFragment with null chidren', () => {
    expect(hFragment([null])).toStrictEqual(
        {
            type: DOM_TYPES.FRAGMENT,
            children: []
        }
    )
})

test('hFragment with text children', () => {
    expect(hFragment(['mamma'])).toStrictEqual(
        {
            type: DOM_TYPES.FRAGMENT,
            children: [
                {type: DOM_TYPES.TEXT, value: 'mamma'}
            ]
        }
    )
})