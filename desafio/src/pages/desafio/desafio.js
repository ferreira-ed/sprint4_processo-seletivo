import {Component} from 'react'


class ListaUsuario extends Component{
    constructor(props){
      super(props)
      this.state = {
        listaDados : [],
        nomeUsuario : ''
      }
    }

    buscarRepositorio =(event) =>{

        event.preventDefault()

        //faz a chamada para api usando o fetch
        fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos`)
        
        //define o tipo de dado do retorno da requisição (JSON)
        .then(resposta => resposta.json())

        //pega os dados obtidos da api e atribui ao state listaTiposEventos
        .then(dados => this.setState({listaDados : dados}))

        //se houver algum erro, é mostrado no console do navegador
        .catch(erro => console.log(erro))

        this.setState({
         nomeUsuario : ''
        })
    }

    LimparCampos = () => {
      this.setState({
          listaDados : [],
          nomeUsuario : ''
      })
  }

    atualizaUser = async (event) =>{
      await this.setState({
        nomeUsuario : event.target.value
      })
      
      console.log(this.state.nomeUsuario)
      
    }
    
    componentDidMount(){
      console.log(this.atualizaUser)
    }
  
    render(){
      
      return(
        <div>
          <main>
            <section>
              <h2>Lista Repositorios github</h2>
              <table>
                <thead>
                  <tr>
                    <th
                    style={{textAlign:"left"}}>#</th>
                    <th
                    style={{textAlign:"left"}}>nome</th>
                    <th
                    style={{textAlign:"left"}}>descrição</th>
                    <th
                    style={{textAlign:"left"}}>data criação</th>
                    <th
                    style={{textAlign:"left"}}>tamanho</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listaDados.map( (dadosUser) => {
                      return(
                        <tr>
                          <td
                          style={{fontSize:15}}>{dadosUser.id}</td>
                          <td
                          style={{textAlign:"justify"}}>{dadosUser.name}</td>
                          <td>{dadosUser.description}</td>
                          <td>{dadosUser.created_at}</td>
                          <td>{dadosUser.size}</td>
                        </tr>
                      )
                    })
                  }
                  
                </tbody>
              </table>
            </section>
            <section> 
            <form onSubmit={this.buscarRepositorio}>
              <div>
                  <input 
                      type="text"
                      value={this.state.nomeUsuario}
                      //atualiza o que o usuário escreve para depois ser chamada a função 
                      onChange={this.atualizaUser}
                      placeholder="usuario que irá buscar"
                  />

                 <button type="submit">Procurar</button>

                 <button type = "button" onClick ={this.LimparCampos}>
                  Limpar
                  </button>
              </div>
            </form>
            </section> 
          </main>
        </div>
      )
    }
   
}

export default ListaUsuario;