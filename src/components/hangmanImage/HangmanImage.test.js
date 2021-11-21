import React from "react";
import { mount } from "enzyme";
import HangmanImage from "./HangmanImage";

let wrapper;
const props = {
  counterState: 1,
};
describe("success test case for HangmanImage", () => {
  beforeAll(() => {
    wrapper = mount(<HangmanImage {...props} />);
  });
  it("to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
