# Instruções

### Rodando o projeto

Para executar o projeto, basta fazer um clone deste repositório, executar `yarn install` e em sequência `yarn start`

### Organizações de pastas

Os arquivos referentes ao estado da aplicação estão dentro de **src/store**, actions, reducers, sagas e os tipos estão dentro de **src/store/ducks**, seguindo uma separação por módulos da aplicação;

Em **src/components**, estão os componentes de layout, também separados por módulos, e dentro de **src/components/shared** estão os componentes compartilhados pela aplicação e os componentes de estilos, criados com _styled components_;

Em **src/service** estão os serviços utilizados pela aplicação, como exemplo, há o arquivo _api.ts_ responsável por criar uma instancia do axios, definindo a url base para as requisições;

Em **service/screens** estão os componentes, compostos por outros, que serão exibidos para o usuário, afim de organizar o que deve ser exibido.
