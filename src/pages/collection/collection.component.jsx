import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {
  // console.log(match)
  // console.log(match.params.collectionId)
  //
  console.log(collection)
  return (
  <div className='collection-page'> 
    <h2>COLLECTION PAGE</h2>
  </div>
);
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);