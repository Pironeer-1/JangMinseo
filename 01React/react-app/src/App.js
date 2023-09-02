import logo from './logo.svg';
import './App.css';

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
        props.onChangeMode(event.target.id); // target: event를 유발시킨 태그
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
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;