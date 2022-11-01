import PostItem from '../../components/post-item/post-item.component';
import styles from './post-list.styles.module.css'

const PostList = ({state, onChangeUpdate, onClickAdd}) => {
  return (
    <div>
      <div className="post_list">
        {state.posts.map(i => (
          <PostItem key={i.id} message={i.message} likes={i.likes}/>
        ))}
      </div>
      <div className="input_container">
        <textarea
          value={state.inputPost}
          onChange={e => {
            onChangeUpdate(e.target.value)
          }}
          placeholder="message..."
        />
        <button onClick={onClickAdd}>-></button>
      </div>
    </div>
  )
}

export default PostList

