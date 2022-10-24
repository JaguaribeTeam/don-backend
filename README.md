### Principais ferramentas utilizadas
 - TypeScript
 - Prisma
 - PostgreSQL 14

### Tecnologias utilizadas
 - ```express``` com uso do módulo ```express.json()``` para as requisições 
 - ```dotenv``` para manter informações importantes de fácil acesso
 - ```jsonwebtoken``` para autenticação no sistema
 - ```bcryptjs``` para criptografia de senhas

### Comandos para inicializar
 - ```npm install``` ou ```yarn install``` para instalar as dependências
 - ```npx prisma generate --schema=./src/prisma/schema.prisma``` para gerar o cliente que permite o acesso do sistema ao banco de dados
 - ```npx prisma migrate dev --schema=./src/prisma/schema.prisma``` para criar as migrações e manter o banco de dados atualizado e sincronizado com o Prisma
 - Utilize o arquivo ```.env.example``` como base para um arquivo ```.env``` local com as informações do seu banco de dados e da sua chave secreta para a JWT
 - Com os passos acima concluídos, ative o sistema utilizando o comando ```npm run dev``` ou ```yarn dev```

### Endpoints
Todas as rotas têm como base a URL ```http://localhost:3000/api/v1```
- Usuários
    - GET ```/usuario```: Retorna todos os usuários cadastrados
    - GET ```/usuario/:cpf```: Retorna o usuário com o CPF especificado
    - POST ```/usuario```: Cria um novo usuário
    - PUT ```/usuario/:cpf```: Atualiza um usuário cadastrado
    - PUT ```/usuario/endereco/:cpf/```: Atualiza as informações de endereço de um usuário cadastrado
    - PUT ```/usuario/email/:cpf/```: Atualiza o e-mail de um usuário cadastrado
    - DELETE ```/usuario/:cpf```: Deleta um usuário cadastrado
    - PUT ```/usuario/:cpf/doador```: Atualiza as informações de doador de um usuário
    - POST ```/usuario/:cpf/receptor```: Atribui um perfil de receptor a um usuário
- Órgãos
    - GET ```/orgao```: Retorna todos os órgãos cadastrados
    - GET ```/orgao/:id```: Retorna o órgão cadastrado com o id especificado
    - POST ```/orgao```: Cria um novo órgão
    - PUT ```/orgao/:id```: Atualiza um órgão cadastrado
    - DELETE ```/orgao/:id```: Deleta um órgão cadastrado
    - POST ```/orgao/doador```: Cria um registro conectando um órgão a um doador
    - POST ```/orgao/receptor```: Cria um registro conectando um órgão a um doador
- Instituições
    - GET ```/instituicao```: Retorna todos as instituições cadastradas
    - GET ```/instituicao/:cnpj```: Retorna uma instituição cadastrada com o CNPJ especificado
    - POST ```/instituicao```: Cria uma nova instituição
    - PUT ```/instituicao```: Atualiza uma instituição cadastrada
    - DELETE ```/instituicao/:cnpj```: Deleta uma instituição cadastrada
    - POST ```/instituicao_orgao```: Cria um registro conectando uma instituição a um órgão cadastrado 
- Autorização
    - POST ```/login```: Realiza o login de um usuário cadastrado e o autentica por meio de um JWT
    - POST ```/auth```: Verifica se o JWT do usuário logado é válido