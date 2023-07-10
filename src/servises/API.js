import axios from 'axios';
import { toast } from 'react-toastify';
const REST_API_KEY = process.env.REACT_APP_DB_REST_API_KEY;
const APP_ID = process.env.REACT_APP_APP_ID;
const CLASSES_ENTITY_ID = process.env.REACT_APP_CLASSES_ENTITY_ID;
const DISCIPLINES_ENTITY_ID =
  process.env.REACT_APP_DISCIPLINES_ENTITY_ID;
const FEEDBACK_ENTITY_ID = process.env.REACT_APP_FEEDBACK_ENTITY_ID;
const TEAM_ENTITY_ID = process.env.REACT_APP_TEAM_ENTITY_ID;
const FREE_TRIAL_ENTITY_ID =
  process.env.REACT_APP_FREE_TRIAL_ENTITY_ID;
const CONTACT_ME_ENTITY_ID =
  process.env.REACT_APP_CONTACT_ME_ENTITY_ID;

const axiosDBA = axios.create({
  baseURL: 'https://quintadb.com.ua/apps/',
  params: {
    rest_api_key: REST_API_KEY,
  },
});

export const getDataBase = async () => {
  try {
    const { data } = await axiosDBA.get(
      `https://quintadb.com.ua/apps/${APP_ID}/entities.json`
    );
    toast.success('Data fetched successfully');
    return data;
  } catch (error) {
    toast.error('Error fetching data');
    console.log(error);
  }
};

export const getClassesList = async () => {
  try {
    const { data } = await axiosDBA.get(
      `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${CLASSES_ENTITY_ID}.json`,
      {
        params: {
          page: 1,
          name_value: 1,
          fetch_all: false,
          per_page: 20,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeedBackList = async () => {
  try {
    const { data } = await axiosDBA.get(
      `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${FEEDBACK_ENTITY_ID}.json`,
      {
        params: {
          page: 1,
          name_value: 1,
          fetch_all: false,
          per_page: 20,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getDisciplinesList = async () => {
  try {
    const { data } = await axiosDBA.get(
      `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${DISCIPLINES_ENTITY_ID}.json`,
      {
        params: {
          page: 1,
          name_value: 1,
          fetch_all: false,
          per_page: 20,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTeamList = async () => {
  try {
    const { data } = await axiosDBA.get(
      `https://quintadb.com.ua/apps/${APP_ID}/dtypes/entity/${TEAM_ENTITY_ID}.json`,
      {
        params: {
          rest_api_key: REST_API_KEY,
          page: 1,
          name_value: 1,
          fetch_all: false,
          per_page: 10,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addFreeTrial = async value => {
  try {
    const { data } = await axiosDBA.post(
      `https://quintadb.com.ua/apps/${APP_ID}/dtypes.json`,

      {
        params: {
          rest_api_key: REST_API_KEY,
          entity_id: FREE_TRIAL_ENTITY_ID,
          values: {
            dcP3fzA8nmE4oVWQxdJmky: value,
          },
        },
      }
    );
    toast.success('Wait a free trial pass on your e-mail.');
    return data;
  } catch (error) {
    toast.error('Smth bad heppend, try latter');

    console.log(error);
  }
};
export const addContactMeMessage = async value => {
  try {
    const { data } = await axiosDBA.post(
      `https://quintadb.com.ua/apps/${APP_ID}/dtypes.json`,

      {
        params: {
          rest_api_key: REST_API_KEY,
          entity_id: CONTACT_ME_ENTITY_ID,
          values: {
            dcP3fzA8nmE4oVWQxdJmky: value,
          },
        },
      }
    );
    toast.success(
      'Greetings, our manager will contact you as fast as possible'
    );
    return data;
  } catch (error) {
    toast.error('Smth bad heppend, try latter');

    console.log(error);
  }
};
