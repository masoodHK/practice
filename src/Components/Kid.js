import React from "react";

export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "nervous",
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };

    this.qualified = this.qualified.bind(this);
  }

  qualified() {
    this.setState({
      startedPerforming: false
    });
  }

  static getDerivedStateFromProps(props, state) {
    return {
      danceSteps: state.danceSteps.length <= 5 ? [...state.danceSteps, ...props.furtherSteps]: state.danceSteps,
      startedPerforming: props.furtherSteps.length !== 0,
      emotion: props.applaud ? "happy": "nervous"
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.qualified === true && prevState.startedPerforming === true)
    if (this.props.qualified === true && prevState.startedPerforming === true) {
      this.qualified()
    }
  }

  componentDidMount() {
    this.setState({
      danceSteps: ["step1", "step2"]
    });
  }

  render() {
    const { dressColor } = this.props;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      currentStepIndex
    } = this.state;

    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div
          style={{
            backgroundColor: dressColor,
            width: 50,
            height: 50
          }}
        />
        <div>Emotion: {emotion}</div>
        {startedPerforming && <p>Performance Started</p>}
        {startedPerforming && (
          <div>
            Current Step: {danceSteps[currentStepIndex]}
            <button
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step
            </button>
          </div>
        )}
      </div>
    );
  }
}

Kid.defaultProps = {
  dressColor: "red",
  applaud: false,
  furtherSteps: []
};
