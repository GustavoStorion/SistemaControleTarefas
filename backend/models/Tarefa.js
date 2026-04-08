import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },
  concluida: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Tarefa", tarefaSchema);

// OU PODE FAZER ASSIM(EXPORTAÇÃO MODERNA):
// const Tarefa = mongoose.model("Tarefa", TarefaSchema);
// export default Tarefa; // Exportação moderna