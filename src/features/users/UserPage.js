import { useSelector } from "react-redux";
import { selectUserById } from './usersSlice';
import { selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from 'react-router-dom';

const UserPage=() =>
{
        const { userId }=useParams();
        const user=useSelector( state => selectUserById( state, Number( userId ) ) );

        //Below Code Will Fix Users Repeated Rerendering Issue
        const postsForUser=useSelector( selectPostsByUser( Number( userId ) ) ); // Use the selector correctly


        const postTitles=postsForUser.map( post => (
                <li key={ post.id }>
                        <Link to={ `/post/${ post.id }` }>{ post.title }</Link>
                </li>
        ) );

        return (
                <section>
                        <h2>{ user?.name }</h2>
                        <ul>{ postTitles }</ul>
                </section>
        );
}

export default UserPage;
