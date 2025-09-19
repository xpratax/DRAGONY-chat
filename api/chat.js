let messages = []; // Armazena todas as mensagens do chat mundial

export default function handler(req, res){
    if(req.method === 'POST'){
        const { user, message } = req.body;
        if(!user || !message) return res.status(400).json({error:'Usuário e mensagem são obrigatórios'});
        messages.push({user, message, timestamp: new Date()});
        if(messages.length>100) messages.shift(); // mantém só 100 últimas mensagens
        return res.status(200).json({messages});
    } else if(req.method === 'GET'){
        return res.status(200).json({messages});
    } else {
        return res.status(405).json({error:'Método não permitido'});
    }
}
