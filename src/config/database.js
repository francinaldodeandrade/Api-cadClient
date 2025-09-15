import mongoose from "mongoose";
import dotenv from "dotenv";

// Carrega variáveis do .env
dotenv.config();

// Pega a URI do MongoDB Atlas
const uri = process.env.MONGO_URI;

// Função para validar a URI
const validateUri = () => {
  if (!uri) {
    console.error(
      "❌ Erro: A variável de ambiente MONGO_URI não está definida!\n" +
      "→ Crie um arquivo .env na raiz do projeto com a linha:\n" +
      "   MONGO_URI='sua_uri_do_mongodb_atlas'"
    );
    process.exit(1); // encerra o processo com erro
  }
};

// Função de conexão com reconexão automática
const connect = async () => {
  try {
    validateUri();

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Conectado ao MongoDB Atlas com sucesso!");

    mongoose.connection.on("error", (err) => {
      console.error("❌ Erro na conexão com o MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Conexão com MongoDB perdida. Tentando reconectar em 5s...");
      setTimeout(connect, 5000);
    });

  } catch (err) {
    console.error("❌ Falha ao conectar ao MongoDB:", err);
    console.log("🔁 Tentando reconectar em 5 segundos...");
    setTimeout(connect, 5000);
  }
};

// Exporta a função de conexão
export default { connect };
