import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ( {posts} ) => (
    <div className="posts">
        { posts.map( post => (    // É necessário abrir os () para retornar um bloco de código
            <PostCard
                key={post.id} /* É necessário uma key única em cada elemento para evitar conflitos na renderização */
                cover={post.cover}
                id={post.id}
                title={post.title}
                body={post.body}
            />
        ))}
    </div>
);