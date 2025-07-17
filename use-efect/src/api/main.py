from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Usuario(BaseModel):
    nome: str
    usuario: str
    cidade: str

# Dados iniciais (nomes do JSON)
usuarios_db = [
    Usuario(nome="Leanne Graham", usuario="Bret", cidade="Gwenborough"),
    Usuario(nome="Ervin Howell", usuario="Antonette", cidade="Wisokyburgh"),
    Usuario(nome="Clementine Bauch", usuario="Samantha", cidade="McKenziehaven"),
    Usuario(nome="Patricia Lebsack", usuario="Karianne", cidade="South Elvis"),
    Usuario(nome="Chelsey Dietrich", usuario="Kamren", cidade="Roscoeview"),
    Usuario(nome="Mrs. Dennis Schulist", usuario="Leopoldo_Corkery", cidade="South Christy"),
    Usuario(nome="Kurtis Weissnat", usuario="Elwyn.Skiles", cidade="Howemouth"),
    Usuario(nome="Nicholas Runolfsdottir V", usuario="Maxime_Nienow", cidade="Aliyaview"),
    Usuario(nome="Glenna Reichert", usuario="Delphine", cidade="Bartholomebury"),
    Usuario(nome="Clementina DuBuque", usuario="Moriah.Stanton", cidade="Lebsackbury"),
]

@app.post("/usuarios")
async def criar_usuario(usuario: Usuario):
    usuarios_db.append(usuario)
    return {"mensagem": "Usuário criado com sucesso!", "usuario": usuario}

@app.get("/usuarios")
async def buscar_usuarios(
    termo: str = Query(None, description="Termo para filtrar por nome, usuário ou cidade")
):
    if termo:
        termo = termo.lower()
        filtrados = [
            u for u in usuarios_db
            if termo in u.nome.lower() or
               termo in u.usuario.lower() or
               termo in u.cidade.lower()
        ]
        return filtrados
    return usuarios_db