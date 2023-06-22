import axios from 'axios';

const REST_API_KEY = process.env.MY_REST_API_KEY;
const APP_ID = process.env.MY_APP_ID;
const CLASSES_ENTITY_ID = process.env.MY_CLASSES_ENTITY_ID;
const DISCIPLINES_ENTITY_ID = process.env.MY_DISCIPLINES_ENTITY_ID;
const FEEDBACK_ENTITY_ID = process.env.MY_FEEDBACK_ENTITY_ID;
export const getClassesList = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/${APP_ID}/entities/${CLASSES_ENTITY_ID}/properties.json`,
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
    `https://quintadb.com.ua/apps/${APP_ID}/entities/${DISCIPLINES_ENTITY_ID}/properties.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
      },
    }
  );
  return data;
};
export const getDisciplinesList = async () => {
  const { data } = await axios.get(
    `https://quintadb.com.ua/apps/${APP_ID}/entities/${FEEDBACK_ENTITY_ID}/properties.json`,
    {
      params: {
        rest_api_key: REST_API_KEY,
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
