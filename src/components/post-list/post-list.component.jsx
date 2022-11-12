import PostItem from '../../components/post-item/post-item.component';
import AddPostForm from '../add-post-form/add-post-form.component'
import styles from './post-list.styles.module.css'

const PostList = ({state, onClickAddNewPost}) => {
  const addNewMessage = (value) => {
    onClickAddNewPost(value.newPostBody)
  }
  return (
    <div>
      <div className="post_list">
        {state.posts.map(i => (
          <PostItem key={i.id} message={i.message} likes={i.likes}/>
        ))}
      </div>
      <AddPostForm onSubmit={addNewMessage} />
    </div>
  )
}

export default PostList

