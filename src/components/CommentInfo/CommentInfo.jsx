export const CommentInfo = ({ comment }) => {
  return <p className="PostInfo__body">{comment.body}</p>;
};

// <article
//   className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
// >
//   <h2 className="TodoInfo__title">{todo.title}</h2>
//   {todo.user && <UserInfo user={todo.user} />}
// </article>
