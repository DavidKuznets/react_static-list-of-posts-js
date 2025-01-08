import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

function fullArray() {
  const getPostServer = postsFromServer.map(post => {
    const userAndPost = usersFromServer.find(user => user.Id === post.userId);
    const commentAndPost = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user: userAndPost,
      comment: commentAndPost,
    };
  });

  return getPostServer;
}

const posts = fullArray();

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
