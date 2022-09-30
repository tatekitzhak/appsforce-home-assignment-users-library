export default {
    error: null,
    loading: false,
    postIds: [],
    posts: {},
    commentIds: [],
    topics: {},
    pagination: {
        next: null,
        prev: null,
        last: null
    },
    user: {
        authenticated: false,
        profilePicture: null,
        id: null,
        name: null,
        token: null
    },
    counter: 0
};

/* export const topics = {
    CREATE: '/topics/create',
    GET: '/topics/get',
    SHOW: '/topics/show',
    TOGGLE: '/topics/toggle'
};

export const subtopics = {
    CREATE: '/subtopics/create',
    GET: '/subtopics/get',
    SHOW: '/subtopics/show',
    TOGGLE: '/subtopics/toggle'
};
 */
export const subtopicsState = {
    error: null,
    loading: false,
    postIds: [],
    posts: {},
    commentIds: [],
    subtopics: {},
    pagination: {
        next: null,
        prev: null,
        last: null
    },
    user: {
        authenticated: false,
        profilePicture: null,
        id: null,
        name: null,
        token: null
    },
    counter: 0
};

export const articlesState = {
    error: null,
    loading: false,
    postIds: [],
    posts: {},
    commentIds: [],
    articles: {},
    pagination: {
        next: null,
        prev: null,
        last: null
    },
    user: {
        authenticated: false,
        profilePicture: null,
        id: null,
        name: null,
        token: null
    },
    counter: 0
};

export const contentState = {
    error: null,
    loading: false,
    postIds: [],
    posts: {},
    commentIds: [],
    content: {},
    pagination: {
        next: null,
        prev: null,
        last: null
    },
    user: {
        authenticated: false,
        profilePicture: null,
        id: null,
        name: null,
        token: null
    },
    counter: 0
};



