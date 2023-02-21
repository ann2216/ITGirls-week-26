// import React from 'react';
import './App.css';
import './components/Marvel.css';
import Marvel from './components/Marvel';
import capitainamerica from './components/images/captain-america-286-400.png';
import ironman from './components/images/ironman-286-400.png';
import thor from './components/images/thor-286-400.png';
import doctorstrange from './components/images/doctor-strange-286-400.png';
import blackwidow from './components/images/black-widow-286-400.png';

function App() {
  return (
    <div className="App">
      <Marvel name='Капитан Америка' url={capitainamerica} text="Cуперсолдат, ветеран Второй мировой войны и первый в мире супергерой Стив Роджерс."></Marvel>
      <Marvel name='Железный человек' url={ironman} text="Эксцентричный гений, миллионер, дамский угодник и филантроп Тони Старк."></Marvel>
      <Marvel name='Тор' url={thor} text="Тор Одинсон – принц Асгарда и бывший член команды Мстителей"></Marvel>
      <Marvel name='Доктор Стрэндж' url={doctorstrange} text="Доктор Стрэндж — новый Верховный Маг Земли, известный нейрохирург."></Marvel>
      <Marvel name='Черная вдова' url={blackwidow} text="Наташа Романова — эксперт в шпионаже и боевых искусствах."></Marvel>
    </div>
  );
}

export default App;
