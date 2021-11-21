import React from "react";
import { mount } from "enzyme";
import AlphaNumericBoard from "./AlphaNumericBoard";

let wrapper;
const props = {
  selectedChar: ["K"],
  gameStatus: "",
  guessHandler: () => {},
};
describe("success test case for AlphaNumericBoard", () => {
  beforeAll(() => {
    wrapper = mount(<AlphaNumericBoard {...props} />);
  });
  it("to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Simulate  onClick on alphabet key", async () => {
    const fn = wrapper.find("#alphabet_A").at(0).prop("onClick");
    expect(fn).toBeInstanceOf(Function);
    fn();
  });
  it("Simulate  onClick on number key", async () => {
    const fn = wrapper.find("#number_1").at(0).prop("onClick");
    expect(fn).toBeInstanceOf(Function);
    fn();
  });
});
