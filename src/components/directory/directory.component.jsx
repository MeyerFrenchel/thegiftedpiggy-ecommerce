import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:[{
                title:'brelocuri',
                imageUrl: 'https://i.pinimg.com/564x/d1/da/9a/d1da9a09da1806e5a5e57f2c8ea12774.jpg',
                id: 1
            },
            {
                title:'brățări',
                imageUrl: 'https://humptydumptyhandmadeblog.files.wordpress.com/2013/09/p1140259.jpg',
                id: 2
            },
            {
                title:'cercei',
                imageUrl: 'https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/118282928_102973581536276_1042298865231401086_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=LdDtG1kLWrYAX9wugUk&_nc_ht=scontent.fias1-1.fna&oh=49b2c4a21b242cad8418619f6a05b9c1&oe=5FD7C697',
                id: 3 
            },
            {
                title:'cănițe',
                imageUrl: 'https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/119061201_131503225349978_4811516798248064162_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=fThpSrzMZIsAX8eRDE2&_nc_ht=scontent.fias1-1.fna&oh=9e8e07fbc71f3b0c37ccce5a1b9027ec&oe=5FDA77E5',
                size: 'large',
                id: 4  
            },
            {
                title:'tablouri',
                imageUrl: 'https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/120513088_145908390576128_6061082301510025419_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=fkumJkJFHM8AX9dFEUU&_nc_ht=scontent.fias1-1.fna&oh=274d92e22e49e20203f62ac484d85723&oe=5FD95510',
                size: 'large',
                id: 5  
            }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
            </div>
        )
    }
}

export default Directory;