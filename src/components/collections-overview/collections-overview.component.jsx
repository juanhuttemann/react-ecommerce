import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections })=>(
    <div className="collections-overview">
        {
            collections.map(({ id, ...collectionsProps }) => (
                <CollectionPreview key={id} {...collectionsProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)