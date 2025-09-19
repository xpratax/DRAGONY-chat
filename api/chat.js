let messages = []; // todas mensagens do chat mundial

export default function handler(req, res){
    if(req.method === 'POST'){
        const { username, message } = req.body;
        if(!username || !message) return res.status(400).json({error:'Usuário e mensagem obrigatórios'});
        messages.push({username, message, timestamp: new Date()});
        if(messages.length > 100) messages.shift(); // mantém só 100 últimas mensagens
        return res.status(200).json({messages});
    } else if(req.method === 'GET'){
        return res.status(200).json({messages});
    } else {
        return res.status(405).json({error:'Método não permitido'});
    }
}

