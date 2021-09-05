import { useEffect, useState, useCallback } from 'react';

import './style.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(2);
    const [searchValue, setSearchValue] = useState([]);
    
    const noMorePosts = page + postsPerPage >= allPosts.length;
    
    const filteredPosts = !!searchValue 
    ? allPosts.filter( post => {
        return post.title.toLowerCase().includes( searchValue.toLowerCase() )
    }) 
    : posts;

    const hangleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postAndPhotos = await loadPosts();

        setPosts(postAndPhotos.slice(page, postsPerPage));
        setAllPosts(postAndPhotos);
    }, [])

    useEffect( () => {
        hangleLoadPosts(0, postsPerPage);
    }, [hangleLoadPosts, postsPerPage])
    
    
    const nextPosts = () => {
        const nextPage = page + postsPerPage;
        
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        
        posts.push(...nextPosts);
        
        setPosts(posts);
        setPage(nextPage);
    }
    
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }
    
    return (
        <section className="container">
            <Input 
                Function={handleChange}
                type="search"
                value={searchValue}
                placeholder="Type your search here"
            /> <br /><br /><br />

            {filteredPosts.length > 0 && (
                <Posts posts={filteredPosts} />
            )}

            {filteredPosts.length === 0 && (
                <p>Não existem posts com esse nome.</p>
            )}
                
            <div className="container-button">
                {!searchValue && (
                    <>
                    <Button  
                    text="Show more posts" 
                    onClick={nextPosts}
                    disabled={noMorePosts}
                    />
                    </>
                )}
            </div>
        </section>
    );
}

export default Home;
                
// export class Home2 extends Component {

//     state = {
//         posts: [],
//         allPosts: [],
//         page: 0,
//         postsPerPage: 2,
//         searchValue: ''
//     };

//     async componentDidMount() {       // Executa uma ação quando o componente é montado na tela
//         await this.loadPosts();
//     }

//     loadPosts = async () => {
//         const { page, postsPerPage } = this.state;
//         const postAndPhotos = await loadPosts();

//         this.setState({ 
//             posts: postAndPhotos.slice(page, postsPerPage),
//             allPosts: postAndPhotos
//         });
//     }

//     nextPosts = () => {
//         const {
//             page,
//             postsPerPage,
//             allPosts,
//             posts
//         } = this.state;

//         const nextPage = page + postsPerPage;

//         const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

//         posts.push(...nextPosts);

//         this.setState({ posts, page: nextPage });
//     }

//     handleChange = (e) => {
//         const { value } = e.target;
//         this.setState({ searchValue: value });
//     }

//     render() {
//         const { posts, postsPerPage, allPosts, page, searchValue } = this.state;
//         const noMorePosts = page + postsPerPage >= allPosts.length;

//         const filteredPosts = !!searchValue 
//         ? allPosts.filter( post => {
//             return post.title.toLowerCase().includes( searchValue.toLowerCase() )
//         }) 
//         : posts;


//     }
// }


//------------------------
//      INUTILIZADO
//------------------------

// componentDidUpdate() {      // Executa quando o componente é atualizado
// }
// componentWillUnmount() {    // Quando o componente for desmontado
// }

// constructor(props) {                 <- Com constructor 
//     super(props);                    <- Precisa de bind
//     this.state = {                      caso não seja arrow func
//         name: 'Luis Eduardo',
//         counter: 0
//     };
// }

// handlePClick = () => {
//     this.setState({ name: 'João' });
// }

// handleAClick = (event) => {
//     event.preventDefault();
//     const { counter } = this.state;
//     this.setState({ counter: counter + 1 })
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             Olá mundo!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }