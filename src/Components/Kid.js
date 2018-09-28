import React from 'react';

export default class Kid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emotion: 'nervous',
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };

    this.qualified = this.qualified.bind(this);
  }

  qualified() {
    this.setState({
      startedPerforming: false,
    })
  }

  static getDerivedStateFromProps(props, state) {
    console.log([...state.danceSteps, ...props.furtherSteps])
    return {
      danceSteps: [...state.danceSteps, ...props.furtherSteps],
      startedPerforming: props.furtherSteps.length ? true: false
    }
  }

  componentDidMount() {
    this.setState({
      danceSteps: ['step1', 'step2']
    })
  }

  render() {
    const { dressColor } = this.props;
    const {
      danceSteps,
      emotion, 
      startedPerforming, 
      currentStepIndex } = this.state;

    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{
          backgroundColor: dressColor,
          width: 50, 
          height: 50 }}></div>
        <div>Emotion: {emotion}</div>
        {startedPerforming && <p>Performance Started</p>}
        {startedPerforming && <div>
          Current Step: {danceSteps[currentStepIndex]}
          <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>
            Perform Next Step
          </button>
        </div>}
      </div>
   );
  }
}

Kid.defaultProps = {
  dressColor: 'red',
  applaud: false,
  furtherSteps: []
};
