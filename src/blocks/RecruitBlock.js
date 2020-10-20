import * as React from 'react';

const requestQuotationUrl = 'https://staging.tandemz.io/recruit-participants';
// const requestQuotationUrl = 'http://localhost:3000/recruit-participants';

const options = [
  {
    key: 'PHYSICAL',
    label: 'in person meeting',
  },
  {
    key: 'ONLINE_MEETING',
    label: 'in online meeting',
  },
  {
    key: 'ONLINE_SURVEY',
    label: 'with online survey',
  },
  {
    key: 'UNMODERATED_USABILITY_TEST',
    label: 'with unmoderated usability test',
  },
  {
    key: 'TREE_TESTING_CARD_SORTING',
    label: 'with tree testing / card sort',
  },
  {
    key: 'FIRST_CLICK_FIVE_SECONDS',
    label: 'with first click / five seconds test',
  },
];

class RecruitBlock extends React.PureComponent {
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
          <select id="studyType" name="type">
            {options.map((option, index) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="submit" className="button primary">
            Recruit now
          </button>
        </form>
      </div>
    );
  }
}
export default RecruitBlock;
