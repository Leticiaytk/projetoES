import React, { Component } from "react";
import alunos from '../database/alunos.json'
import Aluno from "../components/Aluno";

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            alunos:[]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.setState({
            alunos: alunos
        });
    }

    handleChange(){
        this.setState({
            searchString: this.refs.search.value
        });
    }

    render(){
        let aluno = this.props.items;

        let search = this.state.searchString.trim().toLowerCase();
        if (search.length > 0){
            aluno = aluno.filter(function (item) {
                return item.name.toLowerCase().match(search) ||
                       item.email.toLowerCase().match(search) ||
                       item.orientador.toLowerCase().match(search);
            });
        }

    return(
        this.props.isLoding ? (
            <h1>Loading please be shant</h1>
        ) : (
            <div>
                <div>
                    <input
                        type = "text"
                        value = {this.state.searchString}
                        ref = "search"
                        onChange = {this.handleChange}
                        placeholder = "Pesquisar..."
                    />

                    <br></br>
                    <section className = "lista">
                        {aluno.map(item => {
                            return (
                                <Aluno key = {item.char_id} item={item}></Aluno>
                            );
                        })}
                    </section>
                </div>
            </div>
        )
    );
}}
export default Search;
