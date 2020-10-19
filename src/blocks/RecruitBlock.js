import * as React from 'react';

const options = [
  {
    key: 'PHYSICAL',
    label: 'PHYSICAL',
    params: {
      studyType: 'PHYSICAL',
    },
  },
  {
    key: 'REMOTE',
    label: 'REMOTE',
    params: {
      studyType: 'REMOTE',
    },
  },
  {
    key: 'SURVEY_FORM',
    label: 'SURVEY_FORM',
    params: {
      studyType: 'UNMODERATED',
      unmoderatedType: 'SURVEY_FORM',
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
  render() {
    return (
      <div className="recruit-block">
        <div className="recruit-block__content">
          <label for="numberOfParticipantRequired">I need</label>
          <input
            type="number"
            id="numberOfParticipantRequired"
            name="numberOfParticipantRequired"
            defaultValue={6}
            min="1"
          />
          <label for="studyType">users for an</label>
          <select type="number" id="studyType" name="studyType" min="1">
            <option value="foo">Foo</option>
            <option value="bar">Bar</option>
          </select>
        </div>
      </div>
    );
  }
}
export default RecruitBlock;
