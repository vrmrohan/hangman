import React from "react";
import { mount } from "enzyme";
import HangmanQuestion from "./HangmanQuestion";
import { GuessContext } from "../../context";

let wrapper;
const props = {
  guessData: { name: "test test", hint: "hint" },
  selectedChar: ["T"],
  showHint: false,
  setShowHint: () => {},
};
const contextValues = {
  mock: { name: "test test", hint: "hint" },
};
describe("success test case for HangmanQuestion", () => {
  beforeAll(() => {
    wrapper = mount(
      <GuessContext.Provider value={{ ...contextValues }}>
        <HangmanQuestion {...props} />
      </GuessContext.Provider>
    );
  });
  it("to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Simulate  onClick on showHint button", async () => {
    const fn = wrapper.find("#showHint").at(0).prop("onClick");
    expect(fn).toBeInstanceOf(Function);
    fn();
  });
});
