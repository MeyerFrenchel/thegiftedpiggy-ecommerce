import React from 'react'

import CollectionItem from '../collection-items/collection-item.component';

import './colection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 3)
                .map((item) =>(
                    <CollectionItem key={item.id} item={item}/> 
                ))}
        </div>
    </div>
);

export default CollectionPreview;