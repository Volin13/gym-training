import axios from 'axios';

const REST_API_KEY = process.env.REACT_APP_DB_REST_API_KEY;
const APP_ID = process.env.REACT_APP_APP_ID;
const CLASSES_ENTITY_ID = process.env.REACT_APP_CLASSES_ENTITY_ID;
const DISCIPLINES_ENTITY_ID =
  process.env.REACT_APP_DISCIPLINES_ENTITY_ID;
const FEEDBACK_ENTITY_ID = process.env.REACT_APP_FEEDBACK_ENTITY_ID;
export const getClassesList = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${CLASSES_ENTITY_ID}.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
        page: 1,
        name_value: 1,
        fetch_all: false,
        per_page: 20,
      },
    }
  );
  return data;
};
export const getDataBase = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/ddRvFcISnbW7_cScldTCk-/entities.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
      },
    }
  );
  return data;
};
export const getFeedBackList = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${FEEDBACK_ENTITY_ID}.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
        page: 1,
        name_value: 1,
        fetch_all: false,
        per_page: 20,
      },
    }
  );
  return data;
};
export const getDisciplinesList = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${DISCIPLINES_ENTITY_ID}.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
        page: 1,
        name_value: 1,
        fetch_all: false,
        per_page: 20,
      },
    }
  );
  return data;
};
export const addNote = async note => {
  const { data } = await axios.post(
    `https://quintadb.com.ua/apps/${APP_ID}/dtypes.json`,
    {
      rest_api_key: REST_API_KEY,
      entity_id: CLASSES_ENTITY_ID,
      values: {
        dcP3fzA8nmE4oVWQxdJmky: note,
      },
    }
  );
  return data;
};
