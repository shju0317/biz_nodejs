# Hello Node Project
## Nodejs를 사용하여 Web Application Server 생성
1. workspace폴더에 nodejs폴더 생성
2. nodejs폴더에서 express프레임워크를 사용하여 프로젝트 생성
    - express Hello_Node
3. cd Hello_Node : 프로젝트 폴더로 이동
4. npm install : dependency 다운로드
    - package.json 파일에 설정된 dependency들을 download하여
      node_modules 폴더에 저장
5. 프로젝트 시작
    가. npm start : 기본시작하기
    나. nodemon : 개발환경에서 파일이 변경(수정)되면
                  자동으로 서버를 재시작하는 tool을 사용하기

## nodejs의 view 설정
1. nodejs의 탄생시점에서는 jade라는 view를 사용했다
2. 2.x로 버전업이 되면서 이름이 pug로 변경되었다
3. npm install pug : view단의 도구 설치
4. views 폴더의 파일들을 *.pug로 이름 변경
5. app.js 파일에서 jade를 pug로 변경

## pug view
1. 전통적인 html 코딩이 아닌 새로운 문법구조로 만드는 view 파일
2. html과 달리 tag가 열리기만 하고 닫히는 tag가 없다.
3. 각 tag의 시작은 왼쪽정렬로 정확히 구조가 일치해아 한다.
4. tag에 tag를 포함할 때는 포함되는 tag의 앞에 tab을 추가해 주어야 한다.
5. pug는 nodejs에 의해서 transfiler(파일변환)가 되고 실제로는 html코드로 만들어져서 client에 전송된다.
6. nodejs에 설치한 pug모듈에 의해서 파일이 변환된다.
7. 
