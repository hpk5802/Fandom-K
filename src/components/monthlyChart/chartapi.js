// 잘 작동하는지 확인하려고 9-2 팀에서 api 땡겨왔어요 우리팀 데이터로 바꾸실 때 삭제하시면 될 것 같습니다.
const BASE_URL = 'https://fandom-k-api.vercel.app';

export async function getIdolRank({teamName = '9-2', gender = '', pagesize = 10}) {
  const query = `gender=${gender}&pageSize=${pagesize}`;
  const response = await fetch(`${BASE_URL}/${teamName}/charts/{gender}?${query}`);
  if (!response.ok) {
    throw new Error('차트 정보를 불러오지 못했습니다. 다시 시도해주세요.');
  }
  // 객체에서 -> 구조분해할당문법(배열이나 객체의 속성을 분해하여 할당하는 문법)
  const {idols} = await response.json();
  console.log('API 응답 데이터:', idols); // 응답 데이터 확인용

  // body(는 object)가 배열인지 확인 후 반환하거나, 배열로 변환
  return Array.isArray(idols) ? idols : [];
}
