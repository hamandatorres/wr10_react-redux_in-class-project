import React, { Component } from 'react'
import Loading from '../ProductList/Loading'
import { getOneProduct } from '../../ducks/productsReducer'
import { connect } from 'react-redux'
import './productView.css'

class ProductView extends Component {
  componentDidMount() {
    this.props.getOneProduct(this.props.match.params.id)
  }

  render() {
    return this.props.isLoading ? (
      <Loading />
    ) : (
      <div className="container">
        <h1 className="product-view-name">{this.props.product.name}</h1>
        <p className="product-price">${this.props.product.price}</p>
        <p className="product-description">{this.props.product.description}</p>
        <button onClick={() => this.props.history.push('/')}>
          BACK TO PRODUCTS
        </button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => reduxState.products
export default connect(mapStateToProps, { getOneProduct })(ProductView)
