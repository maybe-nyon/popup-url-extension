"use strict";

const func = () => {

  // アクティブなウィンドウのURLを取得する
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (e) => {
    const tab_url = e[0].url;

    // URLが取得出来ているか確認する
    // console.log(tab_url);

    // 切り替える開発環境分の変数を作成する
    let devUrl,
      stgUrl,
      relUrl;

    // 切り替えるドメインの数だけ配列を作成する
    // corporate
    const strLink = [
        [
          'https://www.google.com/',
          'https://www.yahoo.co.jp',
          'https://www.microsoft.com'
        ]
      ],

      target01 = strLink[0];
    // console.log(target01);

    if (tab_url.includes(target01)) {
      devUrl = tab_url.replace(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g, 'https://www.google.com/');
      stgUrl = tab_url.replace(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g, 'https://www.yahoo.co.jp');
      relUrl = tab_url.replace(/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g, 'https://www.microsoft.com');
    }


    // 該当外
    /* else {
      const alertElement = document.getElementById('textWrap'),
        listElement = document.getElementById('listWrap');
      alertElement.innerHTML = '<p>該当するページではありません。</p>';
      listElement.classList.add('hide');
    } */
    ;

    // URLが書き換えられているか確認する
    // console.log(relUrl,stgUrl,devUrl);

    // ポップアップに書き換え後の要素を追加する
    /* const relLink = document.getElementById('rel'),
      stgLink = document.getElementById('stg'),
      devLink = document.getElementById('dev');

    relLink.insertAdjacentHTML('beforeend', '<dl><dt>Production</dt><dd><a href="' + relUrl + '" target="_blank">' + relUrl + '</a></dd></dl>');
    stgLink.insertAdjacentHTML('beforeend', '<dl><dt>Staging</dt><dd><a href="' + stgUrl + '" target="_blank">' + stgUrl + '</a></dd></dl>');
    devLink.insertAdjacentHTML('beforeend', '<dl><dt>Development</dt><dd><a href="' + devUrl + '" target="_blank">' + devUrl + '</a></dd></dl>'); */
  });
}
func();