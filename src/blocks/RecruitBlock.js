import * as React from 'react';

const requestQuotationUrl = 'http://staging.tandemz.io/recruit-participants';

const options = [
  {
    key: 'PHYSICAL',
    label: 'in person meeting',
    params: { studyType: 'PHYSICAL' },
  },
  {
    key: 'ONLINE_MEETING',
    label: 'in online meeting',
    params: { studyType: 'REMOTE' },
  },
  {
    key: 'ONLINE_SURVEY',
    label: 'with online survey',
    params: {
      studyType: 'UNMODERATED',
      unmoderatedType: 'SURVEY_FORM',
    },
  },
  {
    key: 'UNMODERATED_USABILITY_TEST',
    label: 'with unmoderated usability test',
    params: {
      studyType: 'UNMODERATED',
      unmoderatedType: 'USABILITY',
    },
  },
  {
    key: 'TREE_TESTING_CARD_SORTING',
    label: 'with tree testing / card sort',
    params: {
      studyType: 'UNMODERATED',
      unmoderatedType: 'TREE_TESTING',
    },
  },
  {
    key: 'FIRST_CLICK_FIVE_SECONDS',
    label: 'with first click / five seconds test',
    params: {
      studyType: 'UNMODERATED',
      unmoderatedType: 'FIRST_CLICK',
    },
  },
];

// PHYSICAL = 'PHYSICAL',
// REMOTE = 'REMOTE',
// UNMODERATED = 'UNMODERATED',

// SURVEY_FORM = 'SURVEY_FORM',
// USABILITY = 'USABILITY',
// FIRST_CLICK = 'FIRST_CLICK',
// TREE_TESTING = 'TREE_TESTING',
// CARD_SORTING = 'CARD_SORTING',
// FIVE_SECONDS = 'FIVE_SECONDS',

class RecruitBlock extends React.PureComponent {
  state = {
    studyType: undefined,
    unmoderatedType: undefined,
  };

  onSelect = (e) => {
    if (!e.currentTarget) {
      return;
    }
    const option = options[e.currentTarget.value];
    if (!option) {
      return;
    }
    this.setState(option.params);
  };

  render() {
    return (
      <div className="recruit-bg">
        <form
          className="recruit-block"
          onSubmit={this.onSubmit}
          action={requestQuotationUrl}
          method="GET"
        >
          <label for="numberOfParticipantRequired">I need</label>
          <input
            type="number"
            id="numberOfParticipantRequired"
            name="numberOfParticipantRequired"
            defaultValue={6}
            min="1"
          />
          <label for="studyType">users for an</label>
          <select id="studyType" name="type" onChange={this.onSelect}>
            {options.map((option, index) => (
              <option key={option.key} value={index}>
                {option.label}
              </option>
            ))}
          </select>
          <input type="hidden" value={this.state.studyType} name="studyType" />
          <input
            type="hidden"
            value={this.state.unmoderatedType}
            name="unmoderatedType"
          />
          <button type="submit" className="button primary">
            Recruit now
          </button>
        </form>
      </div>
    );
  }
}
export default RecruitBlock;
