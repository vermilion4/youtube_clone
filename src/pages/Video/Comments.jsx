import React from 'react';
import { comments } from '../../data/comments';
import Dislike from '../../assets/dislike.svg';
import Like from '../../assets/like.svg';
import Options from '../../assets/options.svg';
import Sort from '../../assets/sortBy.svg';
import Profile from '../../assets/profile-icon.jpg';

const Comments = () => {
  return (
    <div className='comments'>
      <div className='comment-header'>
        <div className='count'>7,089 Comments</div>
        <div className='sort-section'>
          <div className='sort'>
            <img src={Sort} alt='sort icon' />
          </div>
          <p>Sort by</p>
        </div>
      </div>
      <div className='add-comment'>
        <div className='thumbnail'>
          <img src={Profile} alt='profile' />
        </div>
        <div className='comment-holder'>
          <input type='text' placeholder='Add a comment...' />
        </div>
      </div>
      <div className='comments-container'>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className='comment-details'>
              <div className='comment-left-section'>
                <div className='comment-img'>
                  <img src={comment.thumbnail} alt='thumbnail' />
                </div>
              </div>
              <div className='comment-right-section'>
                <div className='comment-top'>
                  <div className='comment-author'>{comment.author}</div>
                  <div className='moment'>
                    <p>{comment.moment}</p>
                  </div>
                </div>
                <div className='comment-mid'>
                  <p>{comment.comment}</p>
                </div>
                <div className='comment-like'>
                  <div className='like'>
                    <img src={Like} alt='like' />
                    <p className='comment-like-count'>{comment.likeCount}</p>
                  </div>
                  <div className='dislike'>
                    <img src={Dislike} alt='dislike' />
                  </div>
                  <div className='reply bold'>Reply</div>
                </div>
                <div className='comment-bottom'></div>
              </div>
              <div className='option'>
                <img src={Options} alt='options icon' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
