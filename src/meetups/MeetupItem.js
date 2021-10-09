import { useContext } from 'react';

import Card from '../components/ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../store/favorites-context';

function MeetupItem (props){
    const favoritexCtx = useContext (FavoritesContext);


    const itemIsFavorite = favoritexCtx.itemIsFavorite(props.id);



    function toggleFavoriteStatusHandler (){
        if (itemIsFavorite) {
            favoritexCtx.removeFavorite(props.id);
        } else {
            favoritexCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address,
            });
        }

    }

    return (
            <li className={classes.item}>
        <Card>
            <div className={classes.image}>  
                <img src={props.image} alt={props.title} />
           </div>
           <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
           </div>
           <div className={classes.actions}>
               <button onclick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
           </div>
        </Card>
</li>
        
        
    );
}
 export default MeetupItem;