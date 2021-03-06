import * as mutations from './searchMutations';
import * as actions from './searchActions';

const state = {
  totalCaseStats: {
    total: 0,
    deaths: 0,
    active: 0,
    recoveries: 0
  },
  todayCaseStats: {
    total: 0,
    deathsToday: 0,
    newCases: 0,
    recoveriesToday: 0
  },
  casesLoaded: false,
  loadingError: false,
  searchCountryCode: null,
  timeline: null,
  timelineError: false,
  timelineLoaded: false
};

export const SearchModule = {
  namespaced: true,
  mutations,
  actions,
  state
};