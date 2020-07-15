//Импорт общих настроек
import {createStore, combineReducers} from 'redux';

//Импорт редьюсеров
import { newsFeedReducer } from './reducers/newsFeed-reducer';

//Соединение всех приходящих редьюсеров в один общий объект
let rootReducer = combineReducers ({
  newsFeedPage: newsFeedReducer
});

//Создание хранилища
let store = createStore(rootReducer);

export default store;