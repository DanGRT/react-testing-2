import React from "react"
import Like from "../../src/components/Like"
import {shallow} from 'enzyme'

describe("like", ()=> {
  test('should initially have 0 likes in state', () => {
    const wrapper = shallow(<Like />)
    const likesFromState = wrapper.state('likes')
    expect(likesFromState).toBe(0)
  })
  // test('should initially render 0 likes', () => {
  //   const wrapper = shallow(<Like />)
  // })
})
