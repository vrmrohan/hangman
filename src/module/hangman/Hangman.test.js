import React, * as ReactModule from "react";
import { mount } from "enzyme";
import Hangman from "./Hangman";
import { GuessContext } from "../../context";

let wrapper;
const props = {
  selectedChar: [],
  setSelectedChar: () => {},
  showHint: false,
  setShowHint: () => {},
  counterState: 1,
  setCounterState: () => {},
  correctCharsL: 10,
  setCorrectCharsL: () => {},
  selectedCorrectCharL: 3,
  setSelectedCorrectCharL: () => {},
  gameStatus: "",
  setGameStatus: () => {},
};
const contextValues = {
  mock: { name: "test test", hint: "hint" },
  setMock: () => {},
};
describe("success test case for Hangman", () => {
  beforeAll(() => {
    // jest.spyOn(GuessContext, "useContext").mockImplementation(() => contextValues);
    wrapper = mount(
      <GuessContext.Provider value={{ ...contextValues }}>
        <Hangman {...props} />
      </GuessContext.Provider>
    );
  });
  it("to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Simulate  onClick on resetButton", async () => {
    const fn = wrapper.find("#resetButton").at(0).prop("onClick");
    expect(fn).toBeInstanceOf(Function);
    fn();
  });
  it("Simulate  onClick on number key", async () => {
    const fn = wrapper.find("#number_1").at(0).prop("onClick");
    expect(fn).toBeInstanceOf(Function);
    fn();
  });
  it("Simulate  onClick on alphabet key", async () => {
    const fn = wrapper.find("#alphabet_T").at(0).prop("onClick");
    expect(fn).toBeInstanceOf(Function);
    fn();
  });
  it("Simulate  onClick on won game situation", async () => {
    wrapper = mount(
      <GuessContext.Provider value={{ ...contextValues }}>
        <Hangman {...props} counterState={4} />
      </GuessContext.Provider>
    );
    const fn = wrapper.find("#alphabet_T").at(0);
    const fn2 = wrapper.find("#alphabet_E").at(0);
    const fn3 = wrapper.find("#alphabet_S").at(0);
    fn.simulate("click");
    fn2.simulate("click");
    fn3.simulate("click");
  });
  it("Simulate  onClick on lost game situation", async () => {
    wrapper = mount(
      <GuessContext.Provider value={{ ...contextValues }}>
        <Hangman {...props} counterState={4} />
      </GuessContext.Provider>
    );
    const fn = wrapper.find("#number_1").at(0);
    const fn2 = wrapper.find("#number_2").at(0);
    const fn3 = wrapper.find("#number_3").at(0);
    const fn4 = wrapper.find("#number_4").at(0);
    const fn5 = wrapper.find("#number_5").at(0);
    fn.simulate("click");
    fn2.simulate("click");
    fn3.simulate("click");
    fn4.simulate("click");
    fn5.simulate("click");
  });
});
