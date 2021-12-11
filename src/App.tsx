
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import { GenreSelectedProvider } from './hooks/GenreSelected';

export function App() {
  return(
    <GenreSelectedProvider>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <SideBar />
        <Content/>
      </div>
    </GenreSelectedProvider>
  )
}