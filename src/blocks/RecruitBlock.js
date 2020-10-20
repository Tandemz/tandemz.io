import * as React from 'react';
import NumberInput from '../components/form/NumberInput';
import Select from '../components/form/Select';

const requestQuotationUrl =
  'https://app.staging.tandemz.io/recruit-participants';
// const requestQuotationUrl = 'http://localhost:3000/recruit-participants';

const options = [
  {
    value: 'PHYSICAL',
    label: 'in person meetings',
  },
  {
    value: 'ONLINE_MEETING',
    label: 'online meetings',
  },
  {
    value: 'ONLINE_SURVEY',
    label: 'online survey',
  },
  {
    value: 'UNMODERATED_USABILITY_TEST',
    label: 'unmoderated usability tests',
  },
  {
    value: 'TREE_TESTING_CARD_SORTING',
    label: 'a tree testing / card sort',
  },
  {
    value: 'FIRST_CLICK_FIVE_SECONDS',
    label: 'a first click / five seconds test',
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
          <NumberInput
            type="number"
            id="numberOfParticipantRequired"
            name="numberOfParticipantRequired"
            defaultValue={6}
            min="1"
          />
          <label for="studyType">users for</label>
          <Select id="studyType" name="type" options={options} />
          <button type="submit" className="button primary button--with-arrow">
            Recruit now
            <i className="ri-arrow-right-line" />
          </button>
        </form>
      </div>
    );
  }
}
export default RecruitBlock;
