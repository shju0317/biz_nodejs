/*
바닐라 JS 코딩
JQuery 등 front 라이브러리, 프레임워크를 사용하지 않고
순수 JS를 활용한 코딩
*/

function btn_Click() {
  //alert("버튼이 클릭됨");

  // id가 todo로 되어있는 input tag에 사용자가 입력한 문자열을 추출하여
  // todo변수에 담아라
  // input tag가 아닐 경우에는 innerHTML이라는 속성을 통해서 값을 추출할 수 있다.

  let todo = document.getElementById("todo").value;
  alert(todo);
}

function main_title_click() {
  // id가 main_title로 되어있는(일반적인 tag) text 문자열을 추출하여
  // innerHTML, innerText 속성을 사용하여 문자열 추출
  // 간혹 일부 브라우저에서 innerText 속성이 안되는 경우도 있다.
  // 또한 innerText는 대소문자를 잘 봐야 한다.
  // innerTEXT로 작성하면 안됨.
  // text 변수에 저장
  let text = document.getElementById("main_title").innerHTML;
  alert(text);
}

// html DOM(document Object Model) 전체에 이벤트를 설정하는 함수
// $( document.ready() )
// 이 이벤트 핸들러를 상ㅇ하게 되면
// DOM 문서가 모두 화면에 그려지기 전에
// JS 코드가 실행되는 것을 방지할 수 있다.
// 즉 DOM 문서가 모두 화면에 그려진 후 JS코드가 작동되도록 하기위한 방법
// $( function(){})
document.addEventListener("DOMContentLoaded", function () {
  // id가 todo인 tag를 todo라는 변수에 저장하라
  // todo는 id가 todo인 document object가 된다.
  let todo = document.getElementById("todo");

  // id가 todo인 input box에 '반갑습니다'라는 문자열을 setting하라
  // document.getElementById("todo").value = "반갑습니다";
  // todo.value = "반갑습니다";

  // id가 btn-save인 tag(button)에 click event 핸들러 설정
  /*
    JS의 Query 선택자
    document.querySelector() 
    : id가 지정된 tag를 선택할 때 = 결과 1개
    document.querySelector("#id값")
    만약 tag와 class에 querySelector()를 적용하면
    조건에 맞는 첫번째 element만 가져올 수 있다.

    document.querySelectAll()
    : class가 지정된 tag나 tag이름으로 선택할 때 = 결과가 배열
    doucunent.querySelectAll("tag이름")
    doucunent.querySelectAll(".class값")
  */
  // $("#btn-save")
  document.querySelector("#btn-save").addEventListener("click", function () {
    // 만약 html 문서 내에 같은 tag가 1개만 있거나
    // 같은 class가 지정된 tag가 1개만 있을 경우 querySelectAll()을 사용하지 않고
    // querySelector()를 사용하여 조회할 수 있다.
    let todo_input = document.querySelector("input");
    let todo_value = todo_input.value;

    if (todo_value === "") {
      alert("할 일을 입력하세요");
      document.querySelectorAll("input")[0].focus();
      return false;
    }
    if (confirm("저장할까요?")) {
      document.querySelector("form").submit();
    }
  });

  /*
  document.getElementById("btn-save").addEventListener("click", function () {
    // alert(todo.value);
    let todo_value = todo.value;
    if (todo_value == "") {
      alert("할 일을 입력하세요!");
      todo.focus();
      return false;
    }

    if (confirm("저장할까요?")) {
      // 서버로 데이터를 전송하라
      document.getElementsByTagName("form")[0].submit();
    }
  });
  */

  // id가 지정되지 않았을 때
  // tag이름으로 찾을 경우는 같은 이름의 tag가 여러개 있을 수 있기 때문에
  // 무조건 배열로 값이 추출된다.
  // tag이름으로 getElements를 수행한 다음에는 qodufdythfmf wlwjdgkdu
  // 어떤 tag를 선택할지 지정해주어야 한다.
  /*
  let btn_save = document.getElementsByTagName("button")[0];
  btn_save.addEventListener("click", function () {
    let inputs = document.getElementsByName("input");
    let todo_input = inputs[0];
    let todo_value = todo.value;

    if (todo_value === "") {
      alert("할일을 입려하세요");
      document.getElementsByName("todo")[0].focus();
      return false;
    }

    if (confirm("저장할까요")) {
      document.getElementsByName("form")[0].submit();
    }
  });
  */
});
