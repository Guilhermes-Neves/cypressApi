export default {
    message: function() {
        var data = {
            createdSuccessfully: 'Criado com sucesso',
            removedSuccessfully: 'Excluído com sucesso',
            updatedSuccessfully: 'Atualizado com sucesso',
            invalidCredentials: 'Invalid credentials, please review the login, password and country provided',
            duplicatedTaxOnList: 'Já existe esta configuração na lista.',
            fieldRequired: function(field) {
                var msg = `Verifique os campos obrigatórios: ${field}`
                return msg
            },
            municipalServiceCode: 'O Código de Prestação de Serviços não pode ficar vazio quando o Tipo de Serviço for Prestado.'
        }

        return data
    }
}