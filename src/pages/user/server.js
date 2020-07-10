

import ajax from '@/common/ajax';

export async function getList () {
  const {result} = await ajax.get('/website/list');
  return result;
}

export async function deleteWebsite (id) {
  const data = await ajax.post('/website/delete',{_id:id});
  return data;
}
export async function editWebsite (id,name,label) {
  const data = await ajax.post('/website/edit',{_id:id,name,label});
  return data;
}
export async function addWebsite (name,label) {
  const data = await ajax.post('/website/add',{name,label});
  return data;
}
export default {
  getList,
  deleteWebsite
}