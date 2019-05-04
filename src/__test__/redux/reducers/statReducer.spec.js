import statReducer from '../../../reducers/statReducer';

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

const rfdraft = {
  type: 'REDFLAG_DRAFT',
  record: '1'
};

const rfresolved = {
  type: 'REDFLAG_RESOLVED',
  record: '1'
};

const rfinvestigation = {
  type: 'REDFLAG_INVESTIGATION',
  record: '1'
};

const rfrejected = {
  type: 'REDFLAG_REJECTED',
  record: '1'
};

const inrejected = {
  type: 'INTERVENTION_REJECTED',
  record: '1'
};

const ininvestigation = {
  type: 'INTERVENTION_INVESTIGATION',
  record: '1'
};

const inresolved = {
  type: 'INTERVENTION_RESOLVED',
  record: '1'
};

const indraft = {
  type: 'INTERVENTION_DRAFT',
  record: '1'
};

describe('stat reducer', () => {
  it('should return correct state for redFlagDraft state', () => {
    const state = statReducer(statState, rfdraft);
    expect(state.redFlagDraft).toEqual('1');
  });

  it('should return correct state for redFlagResolved state', () => {
    const state = statReducer(statState, rfresolved);
    expect(state.redFlagResolved).toEqual('1');
  });

  it('should return correct state for redFlagInvestigation state', () => {
    const state = statReducer(statState, rfinvestigation);
    expect(state.redFlagInvestigation).toEqual('1');
  });

  it('should return correct state for redFlagRejected state', () => {
    const state = statReducer(statState, rfrejected);
    expect(state.redFlagRejected).toEqual('1');
  });

  it('should return correct state for interventionDraft state', () => {
    const state = statReducer(statState, indraft);
    expect(state.interventionDraft).toEqual('1');
  });

  it('should return correct state for interventionResolved state', () => {
    const state = statReducer(statState, inresolved);
    expect(state.interventionResolved).toEqual('1');
  });

  it('should return correct state for interventionRejected state', () => {
    const state = statReducer(statState, inrejected);
    expect(state.interventionRejected).toEqual('1');
  });

  it('should return correct state for interventionInvestigation state', () => {
    const state = statReducer(statState, ininvestigation);
    expect(state.interventionInvestigation).toEqual('1');
  });

  it('should return default state', () => {
    const state = statReducer(statState, {});
    expect(state.interventionInvestigation).toEqual(null);
  });
});
