import React from 'react';
import './collection.styles.scss';

// import CollectionItem from '../../components/collection-item';

const CollectionPage = ({match}) => {
  console.log(match)
  console.log(match.params.collectionId)
  return (
  <div className='collection-page'> 
    <h2>COLLECTION PAGE</h2>
  </div>
);}

export default CollectionPage;