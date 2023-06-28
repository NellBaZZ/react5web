import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AutoCompleteInput from './AutoCompleteInput';

const root = ReactDOM.createRoot(document.getElementById('root'));

const listProf= [
  {prof: "Web-разработчиков",
  discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
 пользователям было быстро и удобно.`},
  {prof: "Гейм-девелоперов",
  discr: `Создают видеоигры. Погружают всех нас в новые миры.`},
  {prof: "AI/ML-cпециалистов",
  discr: `Используют в деле искусственный интеллект и машинное
 обучение. Фактами и прогнозами делает бизнесу хорошо.`},
  {prof: "Аналитиков данных",
  discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
 бизнесу получать еще больше денег.`},
  {prof: "Мобильных разработчиков",
  discr: `Создают мобильные приложения, которые найдут тебя везде.
 Умещают на маленьких экранах максимальный функционал.`}
]

const listProf2= [
  {prof: "Веб-разработка",
  discr: `Карьера веб-разработчика подходит тем, кто хочет создавать 
  сайты и работать в интернете. Веб-разработчик отвечает за создание 
  и настройку сайтов для разных устройств, от мобильных до настольных 
  компьютеров. Важно, чтобы сайты загружались быстро, были удобны в 
  использовании и хорошо выглядели.`},
  {prof: "AI/ML-специалисты",
  discr: `Специалист по искусственному интеллекту и машинному обучению 
  занимается созданием и настройкой алгоритмов и продуктов, которые 
  автоматизируют и упрощают жизнь людей и бизнеса.`},
  {prof: "Аналитика данных",
  discr: `Аналитик данных обрабатывает, анализирует и интерпретирует 
  различные типы данных, чтобы принимать обоснованные решения для бизнеса.`},
  {prof: "Мобильная разработка",
  discr: `Мобильная разработка - это работа над созданием мобильных 
  приложений для iOS и Android устройств. Программисты, занимающиеся 
  мобильной разработкой, должны экономить место на мобильных 
  устройствах и максимизировать функционал.`},
]



const listImg = ["logo_dvfu.png", "logo_imct.png"]

function AnotherButton(props) {
  function Click_02() {
    props.handleClick(2);
  }
  return (
    <input className="button" type="button" value={props.val} onClick={Click_02} />
  )
}

function Content() {
  const [numOfPage, updNumOfPage] = React.useState(0);
  function handleButtonClick(newNum) {
    updNumOfPage(newNum);
  }
  if(numOfPage == 0) {
    return(
      <>
        <Head listImg={listImg} />
        <Tagline/>
        <AnotherButton val={"Хочу учиться!"} handleClick={handleButtonClick} />
        <Professions title="Обучаем на:" list={listProf} />
      </>
    )
  } else  { 
    const initialOptions = ['NellBa', 'dota', 'web programm', 'idz'];
    return(
      <>
        <Head listImg={listImg} />
        <Idz/>
        <AutoCompleteInput options={initialOptions} />
        <Tagline/>
        <Professions title="На RUSSKY DIGITAL доступны направления:" list={listProf2} />
      </>
    )
  } 
}

root.render(<Content />)

/*Передаем в качестве пропса список с рисунками*/
function Head(props) {
  const logoImages =listImg.map((img, index) =>
  <img key={index} src={img} />
  );
  return(
  <div className="head">
  {logoImages}
  </div>
  )
}
 
function Tagline() {
  return(
  <h1>
    Хватит уже игр, <br/> пора <br/> разрабатывать и зарабатывать
  </h1>
  )
}

function Idz() {
  return(
    <h2>
      Индивидуальное задание! Вариант №12. <br/> Ссылка на идз "https://bb.dvfu.ru/bbcswebdav/courses/FU50709-01.03.02-WP-01/task_react/12.pdf"
    </h2>
  )
}
 
function Professions (props) {
  
  const listProf = props.list.map((item, index) =>
  <ProfItem key={index} prof={item.prof} discr={item.discr} />
  
  );
  return (
  <div className="prof">
    <h2>{props.title} </h2>
    <ul>
      {listProf}  
    </ul>
  </div>
  
  )
}

function ProfItem(props) {

  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
  setOpenClose(!isOpen);
  }
  return(
  <li onClick={press}>
  <span className="left">{props.prof}</span>
  <span className="right">{isOpen ? "×" : "+"}</span>
  {isOpen &&
  <p> {props.discr}</p>
  }
  </li>
  ) 
}
