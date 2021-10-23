import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './shared/theme/Theme';

import './index.css';

import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <h3>By Savage Developers</h3>

        <section>
          <Switch>
            <Route exact path='/' component={() => <div style={{ height: '100vh' }}>Home</div>} />
            <Route exact path='/services' component={() => <div>services</div>} />
            <Route exact path='/software' component={() => <div>software</div>} />
            <Route exact path='/apps' component={() => <div>apps</div>} />
            <Route exact path='/sites' component={() => <div>sites</div>} />
            <Route exact path='/revolution' component={() => <div>revolution</div>} />
            <Route exact path='/about' component={() => <div>about</div>} />
            <Route exact path='/contact' component={() => <div>contact</div>} />
            <Route exact path='/estimate' component={() => <div>estimate</div>} />
          </Switch>
        </section>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
