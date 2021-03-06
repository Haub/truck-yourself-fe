import React from "react";
import { shallow } from "enzyme";
import { mapStateToProps, mapDispatchToProps } from "../containers/App/";
import { App } from "../containers/App/";
import { mockProfile } from "./testMocks.js";

describe("APP", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<App user={mockProfile} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state login and navOpen set to false ", () => {
    const wrapper = shallow(<App user={mockProfile} />);
    expect(wrapper.state().navOpen).toEqual(false);
  });

  describe("mapStateToProps", () => {
    it("should have access to breweries, foodTrucks, and currentPage", () => {
      const mockStore = {
        breweries: [],
        foodTrucks: [],
        currentPage: {}
      };
      const expected = { ...mockStore };
      const result = mapStateToProps(mockStore);
      expect(result).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should call dispatch when loadProfile is invoked", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadProfile(mockProfile);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
