// level 2. 캐시

function solution(cacheSize, cities) {
  var answer = 0;
  let cacheArr = [];

  if (cacheSize === 0) return 5 * cities.length;
  cities.map((city) => {
    let cityName = city.toLowerCase();

    if (cacheArr.includes(cityName)) {
      cacheArr.splice(cacheArr.indexOf(cityName), 1);
      cacheArr.unshift(cityName);
      answer += 1;
    } else {
      cacheArr.unshift(cityName);
      answer += 5;
      if (cacheArr.length > cacheSize) {
        cacheArr.pop();
      }
    }
  });

  return answer;
}
