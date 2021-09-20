import React, { Component } from "react";
import alunos from '../database/alunos.json'

const Aluno = ({ item }) => {
    return (
        <div className='lista'>
            <div className='lista-aluno'>
                <h1>{item.name}</h1>
                <ul>
                    <il>
                        <strong>id: </strong> {item.id_usp}
                    </il>
                    <il>
                        <strong>Nome: </strong> {item.nome}
                    </il>
                </ul>
            </div>
        </div>
    );
}
export default Aluno;
