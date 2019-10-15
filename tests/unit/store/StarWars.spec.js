import * as mutations from "@/store/mutations";
import * as getters from "@/store/getters";
import * as actions from "@/store/actions";

jest.mock("axios");

import api from "@/api";

import { starships } from '@/../tests/data/starships';

describe("mutations", () => {
  let state = null;
  beforeEach(() => {
    state = {
      user: {
        name: 'Vasya',
      },
      starships: [],
    };
  });

  it("setStarships", () => {
    mutations.setStarships(state, starships());
    expect(state.starships).toEqual(starships());
  });
});

describe("actions", () => {
  let state = null;
  beforeEach(() => {
    state = {
      user: {
        name: 'Vasya',
      },
      starships: [],
    };
  });

  it("fetchStarships", async () => {
    const commit = jest.fn();
    api.get.mockReturnValueOnce(Promise.resolve({
      data: {
        results: starships(),
      },
    }));

    await actions.fetchStarships({
      commit,
    });

    expect(commit).toHaveBeenCalledWith('setStarships', starships());
    expect(api.get).toHaveBeenCalledWith("/starships/");
  });
});

describe("getters", () => {
  let state = null;
  beforeEach(() => {
    state = {
      user: {
        name: 'Vasya',
      },
      starships: starships(),
    };
  });

  it("starships", () => {
    expect(getters.starships(state)).toEqual(starships())
  });

  it("starshipById", () => {
    const id = 10;
    expect(getters.starshipById(state)(id)).toEqual(starships()[0]);
  });
});
