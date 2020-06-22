//v-focusという名のグローバルカスタムディレクティブを登録します
Vue.directive('focus', {
    // ひも付いている要素が DOM に挿入される時
    inserted: function(el) {
        // 要素にフォーカスを当てる
        el.focus()
    }
})
// -> <input v-focus>を使えるようになった

`
//ローカルディレクティブに登録したい場合
directives: {
    focus: {
      // ディレクティブ定義
      inserted: function (el) {
        el.focus()
      }
    }
  }
`

new Vue({
    //要素名
    el: '#app',
})
