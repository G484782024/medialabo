let a = document.querySelector('input[name="pul"]');
let b = document.querySelector('button#but') ;
let rem = document.querySelector('div');
b.addEventListener('click', sendRequest);
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.name + "の天気は");
  console.log(data.weather[0].description);
  console.log("最高気温は"+ data.main.temp_max +"℃");
  console.log("湿度は"+ data.main.humidity +"%");
}
function cli(){
  console.log("検索キーワード : " + a.value);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  

  let d = document.createElement('div'); 
  d.setAttribute('id','result');
  b = document.querySelector('body');
  b.insertAdjacentElement('beforeend',d);

  let h = document.createElement('h2');
  d.insertAdjacentElement('beforeend', h);
  let u = document.createElement('u');
  h.insertAdjacentElement('beforeend', u);
  u.textContent = '検索結果(1件)';

  h = document.createElement('h3'); 
  d.insertAdjacentElement('beforeend', h);
  h.textContent = "の天気は" ;
  let s = document.createElement('strong'); 
  h.insertAdjacentElement('afterbegin', s);
  s.textContent = data.name ;

  u = document.createElement('ul');
  d.insertAdjacentElement('beforeend', u);

  let l = document.createElement('li'); 
  u.insertAdjacentElement('beforeend', l); 
  l.classList.add('tenki');
  s = document.createElement('strong'); 
  l.insertAdjacentElement('afterbegin', s);
  s.textContent = data.weather[0].description;
  
  l = document.createElement('li'); 
  u.insertAdjacentElement('beforeend', l); 
  l.classList.add('kion');
  sp = document.createElement('span'); 
  l.insertAdjacentElement('beforeend', sp);
  sp.textContent = '最高気温は';
  s = document.createElement('strong');
  l.insertAdjacentElement('beforeend', s);
  s.textContent = data.main.temp_max +"℃";

  l = document.createElement('li'); 
  u.insertAdjacentElement('beforeend', l); 
  l.classList.add('sitsudo');
  sp = document.createElement('span'); 
  l.insertAdjacentElement('beforeend', sp);
  sp.textContent = '湿度は';
  s = document.createElement('strong');
  l.insertAdjacentElement('beforeend', s);
  s.textContent = data.main.humidity +"%";

  h = document.createElement('h3'); 
  d.insertAdjacentElement('beforeend', h);
  s = document.createElement('strong'); 
  h.insertAdjacentElement('beforeend', s);
  s.textContent = "です！" ;

  let p = document.createElement('img') ;
  p.setAttribute('id','cloud'); 
  d.insertAdjacentElement('beforeend', p); 
  let i = document.querySelector('img#cloud');
  i.setAttribute("src", 'cloud.png');
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let pu = document.querySelector('select#pul');
  let idx = pu.selectedIndex;
  let os = pu.querySelectorAll('option');
  let o = os.item(idx);

  console.log('  value=' + o.getAttribute('value'));




  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + o.getAttribute('value') + '.json';

  // 通信開始
  axios.get(url)
  .then(showResult)   // 通信成功
  .catch(showError)   // 通信失敗
  .then(finish);      // 通信の最後の処理 
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    // サーバから送られてきたデータを出力
    try{
      rem.remove();
    }catch(e){
    }

    
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);

    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}


// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  rem = document.querySelector('div');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

