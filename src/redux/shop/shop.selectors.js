import { createSelector } from 'reselect';

const COLLECTIION_ID_MAP = {
  // object that maps id to the string value
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
} 


const selectShop = state =>  state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)


export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectCollections],
    collections => 
      collections.find(collection => collection.id === COLLECTIION_ID_MAP[collectionUrlParam])
  )
)
