import React from 'react'
import  { connect } from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...collectionsProps})=>(
                <CollectionPreview key={id} {...collectionsProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);