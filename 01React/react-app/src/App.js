import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 

function Article(props) {
  return <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
}

function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault(); // 클릭 시 default event를 막음 -> 페이지 reload prevent
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header> // 얘는 지금은 HTML이 아님. 리액트가 브라우저가 이해할 수 있는 HTML로 converting
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{ // 인자가 하나일 때는 괄호 생략 가능
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)); // target: event를 유발시킨 태그
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
        <ol>
          {lis}
        </ol>
      </nav>
}

function App() {
  // const _mode = useState('WELCOME'); // state의 초깃값
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME'); // 축약형
  const [id, setId] = useState(null);
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;