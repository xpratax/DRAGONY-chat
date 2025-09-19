// api/login.js
let users = []; // lista de usuários logados

export default function handler(req, res) {
    if(req.method === 'POST') {
        const { username, password } = req.body;
        if(!username) return res.status(400).json({error: 'Nome de usuário obrigatório'});

        // verifica se é moderador
        let isMod = false;
        if(password === '8689') isMod = true;

        // adiciona usuário se não estiver logado
        if(!users.find(u => u.username === username)){
            users.push({username, isMod});
        }

        return res.status(200).json({username, isMod});
    } else if(req.method === 'GET'){
        return res.status(200).json({users});
    } else {
        return res.status(405).json({error: 'Método não permitido'});
    }
}
