import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
          <div className="w-[500px]">
            <h1 className="text-slate-100 text-3xl font-bold text-centers">Gerenciador de Tarefas</h1>
            <AddTask />
            <Tasks />
          </div>
        </div>
    );
}

export default App;