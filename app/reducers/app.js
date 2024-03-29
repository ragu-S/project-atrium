'use strict';
import keys from '../actions/keys.js';

const defaultStates = {
  // Default project
  currentProject: {
    name: '', // project name
    thumbnail: '', // url for project thumbnail
    admins: [], // admin user ids
    userIds: [], // project user ids
    floors: [], // floor ids, might also add rooms in here
    files: {
      images: [], // Image Ids
      docs: [], // doc ids
      notes: [], // note ids
      miscellaneous: [] // unknown file types
    }
  },
  // Current Logged in User
  user: {
    userProjects: [], // Project ids that user is assigned to
  }
};

// Create, Delete, Update
export const projectAction = (state = defaultStates.project, action) => {
  switch(action.type) {

    case keys.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        currentProject: action.project,
      };

    default:
      return state;
  }
};

export const userAction = (state = defaultStates.user, action) => {
  switch(action.type) {
    case keys.CREATE_USER.SUCCESS:
      return {
        ...state,
        ...action.user
      };
  }
};

// Process error notifications generated by user based commands
export const errorNotications = (state = defaultStates.notications, action) => {
  case keys.CREATE_USER_FAILURE:
    return {
      ...state,
      errorNotifications: {
        errorMessage: action.errorMessage || 'Failed to create user',
        routeWhereMessageWasCreated: '/',
        timestamp: Date.now()
      }
    }
  case keys.RETRIEVE_USER_FAILURE:
    return {
      ...state,
      errorNotifications: {
        errorMessage: action.errorMessage || 'Failed to retrieve user',
        routeWhereMessageWasCreated: '/',
        timestamp: Date.now()
      }
    }
  case keys.UPDATE_USER_FAILURE:
    return {
      ...state,
      errorNotifications: {
        errorMessage: action.errorMessage || 'Failed to update user information',
        routeWhereMessageWasCreated: '/',
        timestamp: Date.now()
      }
    }
  case keys.DELETE_USER_FAILURE:
    return {
      ...state,
      errorNotifications: {
        errorMessage: action.errorMessage || 'Failed to delete user',
        routeWhereMessageWasCreated: '/',
        timestamp: Date.now()
      }
    }
}
// case keys.RETRIEVE_PROJECT:
//   return {
//     ...state,
//     currentProject: action.response.project
//   };
// default:
//   return state;
// case keys.UPDATE_PROJECT:
//   return {
//     ...state,
//   };
// default:
//   return state;
// case keys.DELETE_PROJECT:
//   return {
//     ...state,
//   };
// default:
//   return state;

