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

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}


function App() {
  // const _mode = useState('WELCOME'); // state의 초깃값
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME'); // 축약형
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ]);
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
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics); // 복제본과 원본 비교 후 다르다면 컴포넌트를 다시 render
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>;
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
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;