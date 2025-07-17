from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite qualquer origem (dev). Em produção, especifique seu domínio!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Usuario(BaseModel):
    nome: str
    usuario: str
    cidade: str

# Rota para receber dados via POST
@app.post("/usuarios")
async def criar_usuario(usuario: Usuario):
    # Aqui você pode salvar em banco, mas vamos só retornar
    return {"mensagem": "Usuário criado com sucesso!", "usuario": usuario}