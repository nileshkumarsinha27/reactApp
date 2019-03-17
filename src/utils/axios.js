import axios from 'axios';

const _ajax = ({ method, url, data = {} }) =>
  axios({ method, url, data })
    .then(response => response)
    .catch(error => error.response);

const postData = (url, data) => _ajax({ method: 'post', url, data });

const getData = (url, data) => _ajax({ method: 'get', url, data });

const putData = (url, data) => _ajax({ method: 'put', url, data });

const deleteData = (url, data) => _ajax({ method: 'delete', url, data });

const patchData = (url, data) => _ajax({ method: 'patch', url, data });

export { getData, postData, putData, deleteData, patchData };
