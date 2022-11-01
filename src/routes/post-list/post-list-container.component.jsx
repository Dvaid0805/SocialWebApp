import PostList from './post-list.component';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputTextActionCreator, addNewPostActionCreator } from '../../store/posts/postAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PostListContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const navigate = useNavigate();

    const onChangeUpdateInputText = (text) => {
    dispatch(updateInputTextActionCreator(text));
  }
  const onClickAddNewPost = () => {
    dispatch(addNewPostActionCreator(state.postPage.inputPost));
  }

  useEffect(() => {
    if(!state.userPage.auth.isAuth) {
      navigate("/login");
    }
  }, [])

  return (
    <PostList
      state={state.postPage}
      onChangeUpdate={onChangeUpdateInputText}
      onClickAdd={onClickAddNewPost}
    />
  )
}

export default PostListContainer;
