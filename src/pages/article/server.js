

import ajax from '@/common/ajax';

export async function getList () {
  const {result} = await ajax.get('/website/list');
  return result;
}
export default {
  getList,
}