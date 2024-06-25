import './App.css';
import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import Posts from './features/posts/Posts';
import SinglePost from './features/posts/SinglePost';
import EditPostForm from './features/posts/EditPostForm';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App ()
{
        return (
                <Routes>
                        <Route path="/" element={ <Layout /> }>
                                <Route index element={ <Posts /> } />
                                <Route path="post">
                                        <Route index element={ <AddPostForm /> } />
                                        <Route path=":postId" element={ <SinglePost /> } />
                                        <Route path="edit/:postId" element={ <EditPostForm /> } />
                                </Route>
                        </Route>
                </Routes>
        );
}

export default App;
