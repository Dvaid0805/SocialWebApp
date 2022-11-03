import PostList from './post-list.component';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputTextActionCreator, addNewPostActionCreator } from '../../store/posts/postAction';
import { WithAuthRedirect } from '../../hocs/withAuthRedirect';



const PostListContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);


    const onChangeUpdateInputText = (text) => {
    dispatch(updateInputTextActionCreator(text));
  }
  const onClickAddNewPost = () => {
    dispatch(addNewPostActionCreator(state.postPage.inputPost));
  }

  return (
    <PostList
      state={state.postPage}
      onChangeUpdate={onChangeUpdateInputText}
      onClickAdd={onClickAddNewPost}
    />
  )
}

const PostListWithRedirect = WithAuthRedirect(PostListContainer);

export default PostListWithRedirect;
