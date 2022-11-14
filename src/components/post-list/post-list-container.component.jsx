import PostList from './post-list.component';
import { useSelector, useDispatch } from 'react-redux';
import { addNewPostActionCreator } from '../../store/posts/postAction';
import { WithAuthRedirect } from '../../hocs/withAuthRedirect';



const PostListContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const onClickAddNewPost = (newPostText) => {
    dispatch(addNewPostActionCreator(newPostText));
  }

  return (
    <PostList
      state={state.postPage}
      onClickAddNewPost={onClickAddNewPost}
    />
  )
}

const PostListWithRedirect = WithAuthRedirect(PostListContainer);

export default PostListWithRedirect;
