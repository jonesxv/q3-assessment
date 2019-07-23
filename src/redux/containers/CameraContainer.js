import { connect } from "react-redux";
import CameraList from '../../components/CameraList'
import { fetchCameras, addToCart } from '../actions/CameraListActions'

const mapStateToProps = state => {
  return {
    cameras: state.cameras,
    filterKeyword: state.filterKeyword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCameras: () => {
      return dispatch(
        fetchCameras()
      )
    },
    addToCart: id => {
      return dispatch(
        addToCart(id)
      )
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList)