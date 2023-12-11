import React, { useState } from "react";
import './CadastroCliente.css';
import '../../assets/eleitor.png'
import UsuarioService from "../../Services/UsuarioService";

function cadastroCliente() {

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuarioNome: '',
        cpf: '',
        email: '',
        senha: '',
    });

    const cadastrarUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const addUser = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
        try {
            const response = await UsuarioService.createUsuario(usuario);
            if (response.status == 200) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro ao cadastrar usuário!')
            }
        } catch (error) {
            console.error('Erro ao fazer cadastro: ', error);
        }
    };

    return (
        <>
            <h2>Novo usuário</h2>
            <div className="cadastro">
                <div className="formCadastro">
                    <form onSubmit={addUser}>
                        <input
                            type='text'
                            name='nome'
                            value={usuario.nome}
                            placeholder='Digite o seu nome' required
                            onChange={cadastrarUsuario} /><br /><br
                        />
                        <input
                            type='text'
                            name='usuarioNome'
                            value={usuario.usuarioNome}
                            placeholder='Digite o seu nome de usuário' required
                            onChange={cadastrarUsuario} /><br /><br
                        />
                        <input
                            type='text'
                            name='cpf'
                            value={usuario.cpf}
                            placeholder='Digite o seu CPF' required
                            onChange={cadastrarUsuario} /><br /><br
                        />
                        <input
                            type='text'
                            name='email'
                            value={usuario.email}
                            placeholder='Digite o seu email' required
                            onChange={cadastrarUsuario} /><br /><br
                        />
                        <input
                            type='password'
                            name='senha'
                            value={usuario.senha}
                            placeholder='Digite sua senha' required
                            onChange={cadastrarUsuario} /><br /><br
                        />
                        <button type="submit">Salvar usuário</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default cadastroCliente;