import axios from 'axios';
import api from './api';
import fire from "firebase";

  //Axios de login, data e user creio que devem ser alterados.

class App extends Component{
    construct(props){
        this.state= {
            data: [],
            user: [],
            email: '',
            senha: '',
        }
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount(){
        this.authListener();
        axios.post('http://localhost:5000/login/', {email: this.state.email, senha: this.state.senha}).then(res =>
        {
            this.setState({data: res.data});
        });
    }
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setSate({user: user});
            } else {
                this.setState({user: null})
            }
        })
    }
};

// Axios para o cadastro, get email senha e nome.



export default api;
