import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './css/index.css';
interface IState {}

type Props = {}
export default class App extends React.Component<Props, IState> {
    render() {
        return(
           
            <div className="dark:text-white text-black">
                <header>
                    <h1>Material-UI Typescript Electron Boilerplate</h1>
                </header>
                <main className="">
                  
                </main>
                <footer>
                    Copyright &copy; 2020
                </footer>
            </div>
        )
    }
}

ReactDOM.render( <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />            
                </ThemeProvider>, document.getElementById('root'))