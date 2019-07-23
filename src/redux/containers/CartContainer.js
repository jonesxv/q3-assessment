import { connect } from "react-redux";
import Cart from '../../components/Cart'
import { removeFromCart } from '../actions/CartActions'

const mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: id => {
      return dispatch(
        removeFromCart(id)
      )
    },
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)