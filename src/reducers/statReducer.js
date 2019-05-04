import {
  REDFLAG_DRAFT, REDFLAG_RESOLVED,
  REDFLAG_INVESTIGATION, REDFLAG_REJECTED,
  INTERVENTION_REJECTED, INTERVENTION_INVESTIGATION,
  INTERVENTION_RESOLVED, INTERVENTION_DRAFT
} from '../actions/actionTypes';


const statState = {
  redFlagDraft: null,
  redFlagResolved: null,
  redFlagInvestigation: null,
  redFlagRejected: null,
  interventionDraft: null,
  interventionResolved: null,
  interventionRejected: null,
  interventionInvestigation: null
};


const statReducer = (state = statState, action) => {
  switch (action.type) {
    case REDFLAG_DRAFT:
      return { ...state, redFlagDraft: action.record };
    case REDFLAG_RESOLVED:
      return { ...state, redFlagResolved: action.record };
    case REDFLAG_INVESTIGATION:
      return { ...state, redFlagInvestigation: action.record };
    case REDFLAG_REJECTED:
      return { ...state, redFlagRejected: action.record };
    case INTERVENTION_REJECTED:
      return { ...state, interventionRejected: action.record };
    case INTERVENTION_INVESTIGATION:
      return { ...state, interventionInvestigation: action.record };
    case INTERVENTION_RESOLVED:
      return { ...state, interventionResolved: action.record };
    case INTERVENTION_DRAFT:
      return { ...state, interventionDraft: action.record };
    default:
      return state;
  }
};

export default statReducer;
