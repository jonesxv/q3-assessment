import { connect } from "react-redux";
import Filter from '../../components/Filter'
import { updateKeyword } from '../actions/FilterActions'

const mapStateToProps = state => {
  return {
    filterKeyword: state.filterKeyword
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateKeyword: str => {
      dispatch(
        updateKeyword(str)
      )
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)