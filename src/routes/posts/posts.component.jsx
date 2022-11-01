import PostList from '../../components/post-list/post-list.component';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputTextActionCreator, addNewPostActionCreator } from '../../store/posts/postAction';


const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postPage);

    const onChangeUpdateInputText = (text) => {
    dispatch(updateInputTextActionCreator(text));
  }
  const onClickAddNewPost = () => {
    dispatch(addNewPostActionCreator(state.inputPost));
  }

  window.state = state;
  return (
    <PostList
      state={state}
      onChangeUpdate={onChangeUpdateInputText}
      onClickAdd={onClickAddNewPost}
    />
  )
}

export default Posts;
