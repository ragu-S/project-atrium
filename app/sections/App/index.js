import { connect } from 'react-redux';
import App from './App';

// Import app actions to import info from server

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

@connect(mapStateToProps, mapDispatchToProps, undefined, {withRef: true})
export default class extends App {
  constructor(props) {
    super(props);
    this.displayName = "App";
  }
}