//Импорт изображений для initialState
import postImg1 from '../../common_files/img/post1.jpg';
import postImg2 from '../../common_files/img/bcg1.jpg';

/**
 * Типы action'ов:
 * ADD_POST -- для добавления нового поста в ленту
 * UPDATE_NEW_POST_TEXT -- для добавления нового текста к посту
 * ADD_COMMENT_TO_POST -- для добавления комментария к посту
 * UPDATE_NEW_COMMENT_TEXT -- для добавления нового комментария к посту
 */
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
/*const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE_NEW_COMMENT_TEXT';*/

/**
 * idPostsCounter -- счётчик id для постов
 * idCommentsCounter -- счётчик id для основных комментариев
 * idReplyCommentsCounter -- счётчик id для ответных комментариев
 */
let idPostsCounter = 0;
let idCommentsCounter = 0;
let idReplyCommentsCounter = 0;

//Начальный state
let initialState = {
  myPosts: [
    {
      id: ++idPostsCounter,
      userName: 'User-1',
      postDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero minus voluptates doloribus. Cupiditate eius aliquam, dicta quia dolorum harum, sequi aperiam quidem magni maxime ipsa. Magnam maiores, voluptas fuga atque ipsam qui minus dicta. Similique, at? Eveniet, voluptatem fugit?',
      mediaContent: postImg1,
      likesCounter: 17,
      dislikesCounter: 2,
      comments: [
        {
          id: ++idCommentsCounter,
          userName: 'User-1',
          textComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum cumque consectetur provident est natus at possimus quo ex similique eaque?',
          replyComments: [
            {
              id: ++idReplyCommentsCounter,
              userName: 'User-2',
              textComment: 'В смысле?'
            },
            {
              id: ++idReplyCommentsCounter,
              userName: 'User-3',
              textComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'
            }
          ]
        },
        {
          id: ++idCommentsCounter,
          userName: 'User-1',
          textComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
          replyComments: []
        }
      ]
    },
    {
      id: ++idPostsCounter,
      userName: 'User-2',
      postDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero minus voluptates doloribus. Cupiditate eius aliquam, dicta quia dolorum harum, sequi aperiam quidem magni maxime ipsa. Magnam maiores, voluptas fuga atque ipsam qui minus dicta. Similique, at? Eveniet, voluptatem fugit?',
      mediaContent: postImg2,
      likesCounter: 127,
      dislikesCounter: 12,
      comments: [
        {
          id: ++idCommentsCounter,
          userName: 'User-1',
          textComment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum cumque consectetur provident est natus at possimus quo ex similique eaque?',
          replyComments: []
        }
      ]
    }
  ],
  newPostText: ''
};

export const newsFeedReducer = (state = initialState, action) => {
  let newPostInstance = {
    id: ++idPostsCounter,
    userName: 'User-156',
    postDescription: state.newPostText,
    mediaContent: postImg1,
    likesCounter: 0,
    dislikesCounter: 0,
    comments: []
  }

  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.postText
      };
    case ADD_POST:
      return {
        ...state,
        myPosts: [...state.myPosts, newPostInstance],
        newPostText: ''
      };
    /*case ADD_COMMENT_TO_POST: 
      return state;
    case UPDATE_NEW_COMMENT_TEXT: 
      return {
        ...state,
        newComment: action.newComment
      }*/
    default:
      return state;
  }
}

//Набор action creators
export const updateNewPostText_AC = postText => (
  {
    type: UPDATE_NEW_POST_TEXT,
    postText: postText
  }
);

export const addPost_AC = () => (
  {
    type: ADD_POST
  }
);
/*
export const updateNewCommentText_AC = newComment => (
  {
    type: UPDATE_NEW_COMMENT_TEXT,
    newComment: newComment
  }
);

export const addCommentToPost_AC = () => (
  {
    type: ADD_COMMENT_TO_POST
  }
);*/