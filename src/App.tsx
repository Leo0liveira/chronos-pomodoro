import { Container } from './components/Container/';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import Input from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return(
    <>
    <Container>
      <Logo/>
    </Container>
    <Container>
      <Menu/>
    </Container>
    <Container>
      <CountDown/>
    </Container>
    <Container>
      <form action="" className="form">
        <div className="formRow">
          <Input 
            labelText="Vou trabalhar em:" 
            id="task" 
            type='text' 
            placeholder='Digite algo'/>
        </div>
        <div className="formRow">
          <span> Nesse ciclo
          <strong> descanse </strong>
          <span> por </span>
          <strong> 5 minutos. </strong>
          </span>
        </div>
        <div className="formRow">
          <Cycles/>
        </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}